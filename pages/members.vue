<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="breadcrumb">home &gt;&gt; {{ name }}</div>
    <div aria-label="preview"
      class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="imgSrc(store.selected?.imageUrl as string)" alt="" />
      <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
        <div aria-label="text" class="w-full">
          <div :class="mainline_small + ' ' + texttrim">{{memberName(store.selected)}}</div>
          <div :class="subline_small + ' ' + texttrim">{{ store.selected?.occupation }}</div>
          <div :class="subline_small + ' ' + texttrim" >{{ store.selected?.birthday }}</div>
        </div>
        <div aria-label="home address" class="border-y-rcnblue-500 border border-dashed text-xxs font-semibold capitalize w-full">
          {{ store.selected?.homeAddress }}
        </div>
        <div aria-label="icons" class="flex justify-between items-center w-full">
          <a :href="constants.whatsappIcon(store.selected)" class="shadow-custom rounded-full">
            <img src="/icons/whatsapp.svg" class="w-[32px]" alt="whatsapp icon" />
          </a>
          <a :href="'tel:+234' + phone(store.selected?.phoneNumber)"
            class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="phonecall" :active="true" class="w-[16px] text-white" />
          </a>
          <NuxtLink :href="editMemberUrl(store.selected)"
            class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="edit" :active="true" class="w-[16px] text-white" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <div aria-label="list" class="h-listheight w-full">
      <div aria-label="number" class="mt-[8px] mb-[4px] uppercase" :class="breadcrumb">{{ store.searched.length }} member(s)</div>
      <div v-if="store.rendered" ref="membersRoot" aria-label="membersList"
        class="w-full h-cardlistheight overflow-auto flex flex-wrap gap-2" v-infinite-scroll>
        <MemberItem v-for="(member, idx) in store.rendered" @click="store.setSelected(member)" :key="idx"
          :class="position(idx, store.rendered)" :item="member" />
      </div>
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input
        type="text"
        id="search"
        name="search"
        autocomplete="off"
        :class="input"
        :placeholder="placeholder"
        v-model="searchTerm"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iCombined, iMember } from "~~/helpers/interfaces"
import { vInfiniteScroll } from "~~/helpers/directives";
import { useMemberStore } from "~~/store/members-store";

const { breadcrumb, input, subline_small, mainline_small, texttrim } = useUi()
const { name } = useRoute()
const { data, error, refresh } = await useLazyFetch(() => constants.membersApiUrl)

const store = useMemberStore()

const members: iMember[] | null = typeMember(data.value)
const placeholder = computed(() => `Search for ${name as string} ...`)
const errorMessage = ref(error.value)

const maxItemsToLoad = 10
const searchTerm = ref("")

store.setMembers(members ? members : [])
store.setSearched(searchTerm.value)
store.setRendered(members ? members.slice(0, maxItemsToLoad) : [])
  store.setSelected(store.searched ? store.searched[0] : {})

watch(data, () => {
  const members = typeMember(data.value)
  errorMessage.value = error.value
  store.setMembers(members ? members : [])
  store.setSearched(searchTerm.value)
  store.setRendered(members ? members.slice(0, maxItemsToLoad) : [])
  store.setSelected(store.searched ? store.searched[0] : {})
})

// on search
watchEffect(() => {
  const term = searchTerm.value.toLowerCase()
  store.setSearched(term)
  store.setRendered(store.searched.slice(0, maxItemsToLoad))
})

onMounted(async () => {
  // await refresh()
})

onUpdated(() => {
})

definePageMeta({ layout: "catalog" });
</script>
<style lang="">
    
</style>