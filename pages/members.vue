<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="breadcrumb">home &gt;&gt; {{ name }}</div>
    <div aria-label="preview"
      class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="memberState.selected?.imageUrl" alt="" />
      <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
        <div aria-label="text">
          <div :class="mainline">{{ memberName(memberState.selected) }}</div>
          <div :class="subline">{{ memberState.selected?.occupation }}</div>
        </div>
        <div aria-label="icons" class="flex justify-between items-center w-full">
          <a :href="constants.whatsappIcon(memberState.selected)" class="shadow-custom rounded-full">
            <img src="/icons/whatsapp.svg" class="w-[32px]" alt="whatsapp icon" />
          </a>
          <a :href="'tel:+234' + phone(memberState.selected?.phoneNumber)"
            class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="phonecall" :active="true" class="w-[16px] text-white" />
          </a>
          <a :href="editMemberUrl(memberState.selected)"
            class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="edit" :active="true" class="w-[16px] text-white" />
          </a>
        </div>
      </div>
    </div>
    <div aria-label="list" class="h-listheight w-full">
      <div aria-label="number" class="mt-[8px] mb-[4px] uppercase" :class="breadcrumb">{{ memberState.members.length }}
        {{ name }}</div>
      <div v-if="memberState.rendered" ref="membersRoot" aria-label="membersList" class="w-full h-cardlistheight overflow-auto" v-infinite-scroll>
        <MemberItem 
          v-for="(member, idx) in memberState.rendered"
          @click="setSelected(member)" 
          :key="idx"
          :class="position(idx, memberState.rendered)"
          :item="member" />
      </div>
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input type="text" id="search" autocomplete="off" :class="input" :placeholder="placeholder">
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
import { iMember } from "~~/helpers/interfaces"
import { vInfiniteScroll } from "~~/helpers/directives";

const { breadcrumb, input, subline, mainline } = useUi()
const { memberState, setMembers, setRendered, setSelected } = useMemberState()
const { name } = useRoute()
const { data, pending, error } = await useLazyFetch(() => constants.membersApiUrl)

const members: iMember[] | null = typeMember(data.value)
const membersRoot:Ref<any> = ref()
const placeholder = computed(() => `Search for ${name as string} ...`)
const errorMessage = ref(error.value)

const maxItemsToLoad = 4
// const iScroll = new InfiniteScroll()

setMembers(members ? members : [])
setRendered(members ? members.slice(0,maxItemsToLoad) : [])
setSelected(members ? members[0] : {}) 

watch(data, () => {
  const members = typeMember(data.value)
  errorMessage.value = error.value

  setMembers(members ? members : [])
  setRendered(members ? members.slice(0,maxItemsToLoad) : [])
  setSelected(members ? members[0] : {})
})

// observer code

const observer:Ref<IntersectionObserver | null> = ref(null)

watch(pending, () => {
  if (pending.value === false) {
    observe()
    // iScroll.start()
  }
})

const observe = () => {
  const observation = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    loadMore() 
    entry.target.classList.remove("last")
    observer.value?.unobserve(entry.target) 
  }
  const root = el(`div[aria-label="${constants.membersList}"]`)
  const last = el('div.last')
  const options = { threshold: 0.5, root }
  observer.value = new IntersectionObserver(observation, options)

  observer.value.observe(last)

  const loadMore = () => {
    const sIdx = memberState.value.rendered.length
    const eIdx = sIdx + maxItemsToLoad
    const more =  memberState.value.members.slice(sIdx, eIdx) 
    memberState.value.rendered.push(...more)
  }
}

onUpdated(() => {
  const last = el('div.last') 
  observer.value?.observe(last)
  // iScroll.reObserve()
})

onMounted(() => {
  // await refresh()
  // observer.start() 
})


onBeforeUnmount(() => {
  // observer.end()
  // iScroll.end()
})

// get starting point of next item to load by:
// pageRef = itemsPerPage * pageNumber
definePageMeta({ layout: "catalog" });
</script>
<style lang="">
    
</style>