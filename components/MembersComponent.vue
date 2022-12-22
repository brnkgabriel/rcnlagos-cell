<template>
    <div class="flex flex-col items-start justify-between h-full">
      <div :class="breadcrumb">home &gt;&gt; {{ name }}</div>
      <div aria-label="preview"
        class="shadow-custom bg-white rounded-lg w-full h-[150px] overflow-hidden flex justify-center items-center">
        <img class="h-[150px] w-[150px] opacity-0" v-loaded :src="imgSrc(selected.imageUrl as string)" alt="" />
        <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
          <div aria-label="text" class="w-full">
            <div :class="mainline_small + ' ' + texttrim">{{memberName(selected)}}</div>
            <div :class="subline_small + ' ' + texttrim">{{ selected.occupation }}</div>
            <div :class="subline_small + ' ' + texttrim" >{{ selected.birthday }}</div>
          </div>
          <div aria-label="home address" class="text-xxs font-semibold capitalize w-full">
            {{ selected.homeAddress }}
          </div>
          <div aria-label="icons" class="flex justify-start gap-x-4 sm:gap-x-0 sm:justify-between items-center w-full">
            <a :href="constants.whatsappIcon(selected)" class="shadow-cta rounded-full">
              <img src="/icons/whatsapp.svg" class="w-[32px]" alt="whatsapp icon" />
            </a>
            <a :href="'tel:' + phone(selected.phoneNumber)"
              class="shadow-cta rounded-full p-2 bg-rcnorange-500 w-[32px] flex justify-center items-center">
              <Icon type="phonecall" :active="true" class="w-[16px] text-white" />
            </a>
            <NuxtLink :href="'/member' + editMemberUrl(selected)"
              class="shadow-cta rounded-full p-2 bg-rcngray-700 w-[32px] flex justify-center items-center">
              <Icon type="edit" :active="true" class="w-[16px] text-rcngray-900" />
            </NuxtLink>
          </div>
        </div>
      </div>
      <div aria-label="list" class="h-listheight w-full">
        <div aria-label="number" class="mt-[8px] mb-[4px] uppercase" :class="breadcrumb">{{ store.searched.length }} member(s)</div>
        <div v-if="store.rendered" ref="membersRoot" aria-label="membersList"
          class="w-full h-cardlistheight overflow-auto flex flex-wrap gap-2" v-infinite-scroll>
          <div :class="mainline_small" v-if="store.rendered.length == 0">No result found for {{searchTerm}} :(</div>
          <MemberItem
            v-for="(member, idx) in store.rendered"
            @click="setSelected(member)"
            :key="idx"
            :class="position(idx, store.rendered)"
            :item="member" />
        </div>
      </div>
      <div aria-label="search" class="h-[40px] w-full relative">
        <input
          type="text"
          id="search"
          name="search"
          autocomplete="off"
          :class="input"
          class="pr-[40px]"
          :placeholder="placeholder"
          v-model="searchTerm"/>
        <div :class="search" @click="handleSearch">
          <Icon type="search" :class="searchIcon" />
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { iMember } from "~~/helpers/interfaces"
  import { vInfiniteScroll, vLoaded } from "~~/helpers/directives";
  import { useMemberStore } from "~~/store/members-store";
  import { Ref } from "vue";
  import { fromLocalStorage, toLocalStorage } from "~~/composables/util";
  
  const { breadcrumb, input, subline_small, mainline_small, texttrim, search, searchIcon } = useUi()
  const { name } = useRoute()
  const { data, error } = await useLazyFetch(() => constants.membersApiUrl)
  
  const store = useMemberStore()
  
  const members: iMember[] | null = typeMember(data.value) 
  const placeholder = computed(() => `Search for ${name as string} ...`)
  const errorMessage = ref(error.value)
  
  const maxItemsToLoad = 10
  const searchTerm = ref("")
  const selected: Ref<iMember> = ref({})
  
  store.setMembers(members ? members : [])
  store.setSearched("")
  store.setRendered(members ? members.slice(0, maxItemsToLoad) : [])
  
  const setSelected = (selection: iMember) => selected.value = selection

  const handleSearch = () => {
    store.setSearched(searchTerm.value.toLowerCase())
    store.setRendered(store.searched.slice(0, maxItemsToLoad))
  }
  
  watch(data, () => {
    const members = typeMember(data.value)
    errorMessage.value = error.value
    store.setMembers(members ? members : [])
    store.setSearched("")
    store.setRendered(store.searched.slice(0, maxItemsToLoad))
  })
  
  watch(selected, () => {
    toLocalStorage("selected", selected.value)
  })
  
  // on search
  watchEffect(() => {
    const term = searchTerm.value.toLowerCase()
    store.setSearched(term)
    store.setRendered(store.searched.slice(0, maxItemsToLoad))
  })
  
  onMounted(async () => {
    // await refresh()
    selected.value = fromLocalStorage("selected", {})
  })
  
  onUpdated(() => {
  })
  </script>
  <style lang="">
      
  </style>