<template>
  <div aria-label="membersItem" class="flex justify-start items-center my-2 w-card ml-[32px] h-[80px] bg-white rounded-md shadow-custom p-2 cursor-pointer relative">
    <img :src="props.item.imageUrl" class="rounded-full w-[64px] h-[64px] absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" :alt="props.item.firstName"/>
    <div aria-label="details" class="flex flex-col items-start justify-start w-listitemdetails px-2 absolute top-1/2 left-[32px] -translate-y-1/2">
      <div aria-label="name" :class="mainline" class="whitespace-nowrap overflow-hidden text-ellipsis w-full">{{name}}</div>
      <div aria-label="subline" class="flex justify-center items-center gap-x-1 w-full" :class="subline">
        <Icon type="occupation" class="w-[16px] h-[16px]" :active="false" />
        <div class="whitespace-nowrap overflow-x-clip text-ellipsis w-full">{{props.item.occupation}}</div>
      </div>
    </div>
    <div class="rounded-xl w-[64px] h-[64px] absolute right-[8px] top-1/2 -translate-y-1/2 bg-white border-2 border-rcngray-500">

    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces"

const name = computed(() => `${props.item.firstName} ${props.item.lastName}`)

const { subline, mainline } = useUi()

const props = defineProps<{
  item: iMember
}>()
</script>
<style lang="">
    
</style>