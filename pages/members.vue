<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="breadcrumb">home &gt;&gt; {{ name }}</div>
    <div aria-label="preview"
      class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="imgSrc(memberState.selected?.imageUrl as string)" alt="" />
      <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
        <div aria-label="text" class="w-full">
          <div :class="mainline_small + ' ' + texttrim">{{memberName(memberState.selected)}}</div>
          <div :class="subline_small + ' ' + texttrim">{{ memberState.selected?.occupation }}</div>
        </div>
        <div aria-label="birthday" :class="subline_small" class="text-xxs font-semibold">{{ memberState.selected?.birthday }}</div>
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
      <div aria-label="number" class="mt-[8px] mb-[4px] uppercase" :class="breadcrumb">{{ memberState.searched.length }}
        {{ name }}</div>
      <div v-if="memberState.rendered" ref="membersRoot" aria-label="membersList"
        class="w-full h-cardlistheight overflow-auto flex flex-wrap gap-2" v-infinite-scroll>
        <MemberItem v-for="(member, idx) in memberState.rendered" @click="setSelected(member)" :key="idx"
          :class="position(idx, memberState.rendered)" :item="member" />
      </div>
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input
        type="text"
        id="search"
        autocomplete="off"
        :class="input"
        :placeholder="placeholder"
        v-model="memberState.searchTerm"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces"
import { vInfiniteScroll } from "~~/helpers/directives";

const { breadcrumb, input, subline_small, mainline_small, texttrim } = useUi()
const { memberState, setMembers, setRendered, setSelected, setSearched } = useMemberState()
const { name } = useRoute()
const { data, error } = await useLazyFetch(() => constants.membersApiUrl)

const members: iMember[] | null = typeMember(data.value)
const placeholder = computed(() => `Search for ${name as string} ...`)
const errorMessage = ref(error.value)

const maxItemsToLoad = 10

setMembers(members ? members : [])
setSearched(members ? members : [])
setRendered(members ? members.slice(0, maxItemsToLoad) : [])
setSelected(members ? members[0] : {})

watch(data, () => {
  const members = typeMember(data.value)
  errorMessage.value = error.value

  setMembers(members ? members : [])
  setRendered(members ? members.slice(0, maxItemsToLoad) : [])
  setSelected(members ? members[0] : {})
})

watchEffect(() => {
  const term = memberState.value.searchTerm.toLowerCase()
  const iFound = memberState.value.members.filter(member => {
    return member.firstName?.toLowerCase().includes(term) ||
    member.lastName?.toLowerCase().includes(term) ||
    member.birthday?.toLowerCase().includes(term) ||
    member.email?.toLowerCase().includes(term) ||
    member.gender?.toLowerCase().includes(term) ||
    member.maritalStatus?.toLowerCase().includes(term) ||
    member.occupation?.toLowerCase().includes(term) ||
    member.phoneNumber?.toLowerCase().includes(term) ||
    member.role?.toLowerCase().includes(term)
  })
  setSearched(iFound)
  setRendered(memberState.value.searched.slice(0, maxItemsToLoad))
})

onMounted(() => {
  // await refresh()
  // observer.start() 
})

definePageMeta({ layout: "catalog" });
</script>
<style lang="">
    
</style>