<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="pageTitle">{{name}}</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="selected.imageUrl" alt=""/>
      <div aria-label="details" class="w-details p-2">
        <div class="font-bold">{{selected.firstName}}</div>
        <div>{{selected.lastName}}</div>
        <div :class="subline">{{selected.occupation}}</div>
      </div>
    </div>
    <div aria-label="list" class="h-listheight w-full">
      <div aria-label="number" class="h-[16px] mt-[8px] mb-[4px] capitalize" :class="subline">{{members.length}} {{name}}</div>
      <div aria-label="list" class="flex flex-col gap-y-2 w-full h-cardlistheight overflow-auto">
        <MemberItem
          @click="setSelected(member)"
          v-for="(member, idx) in members"
          :item="member"
          :key="idx"/>
      </div>
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input type="text" id="search" :class="input" :placeholder="placeholder">
    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces" 

const { pageTitle, input, subline, mainline } = useUi()
const { name } = useRoute()
// @ts-ignore
const placeholder = computed(() => "Search for " + name + '...')

const orderBy = ref("created_at")

const typeData = (data: any) => data as iMember[]
const { data, pending, error, refresh } = await useLazyFetch(() => constants.membersApiUrl, { params: { orderBy: orderBy.value } })

const members = ref(typeData(data.value))
const errorMessage = ref(error.value)
const selected = ref(members.value[0])

const setSelected = (member: iMember) => selected.value = member

watch([data, error], () => {
  members.value = typeData(data.value)
  errorMessage.value = error.value
}) 


definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>