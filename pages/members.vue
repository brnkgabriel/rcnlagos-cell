<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="breadcrumb">home &gt;&gt; {{name}}</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="selected?.imageUrl" alt=""/>
      <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
        <div aria-label="text">
          <div :class="mainline">{{memberName(selected)}}</div>
          <div :class="subline">{{selected?.occupation}}</div>
        </div>
        <div aria-label="icons" class="flex justify-between items-center w-full">
          <a :href="constants.whatsappIcon(selected)" class="shadow-custom rounded-full">
            <img src="/icons/whatsapp.svg" class="w-[32px]" alt="whatsapp icon"/>
          </a>
          <a :href="'tel:+234' + phone(selected?.phoneNumber)" class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="phonecall" :active="true" class="w-[16px] text-white" />
          </a>
          <a :href="editUrl(selected)" class="shadow-custom rounded-full p-2 bg-rcnblue-500 w-[32px] flex justify-center items-center">
            <Icon type="edit" :active="true" class="w-[16px] text-white" />
          </a>
        </div>
      </div>
    </div>
    <div aria-label="list" class="h-listheight w-full">
      <div aria-label="number" class="mt-[8px] mb-[4px] uppercase" :class="breadcrumb">{{members?.length}} {{name}}</div>
      <div aria-label="list" class="w-full h-cardlistheight overflow-auto">
        <MemberItem
          @click="setSelected(member)"
          v-for="(member, idx) in members"
          :item="member"
          :key="idx"/>
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

const { breadcrumb, input, subline, mainline } = useUi()
const { name } = useRoute()
// @ts-ignore
const placeholder = computed(() => "Search for " + name + '...')

const orderBy = ref("created_at")

const typeData = (data: any) => data as iMember[]
const { data, pending, error, refresh } = await useLazyFetch(() => constants.membersApiUrl, { params: { orderBy: orderBy.value } })

const members = ref(typeData(data.value))
const selected:Ref<iMember | null> = ref(data.value ? typeData(data.value)[0] : null)
const errorMessage = ref(error.value)

const setSelected = (member: iMember) => selected.value = member

const editUrl = (member: iMember | null) => {
  if (!member) return "/member"
  const firstName = member.firstName?.split(' ').join('-').toLowerCase()
  const lastName = member.lastName?.split(' ').join('-').toLowerCase()
  return `/${firstName}-${lastName}`
}

watch([data, error], () => {
  members.value = typeData(data.value)
  selected.value = typeData(data.value)[0]

  console.log("selected is", selected.value)
  errorMessage.value = error.value
})

// onMounted(async () => {
//   await refresh()
// })


definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>