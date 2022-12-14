<template>
  <div class="flex justify-start items-center gap-x-2 w-full h-[60px] bg-white rounded-md shadow-custom p-2 cursor-pointer">
    <img :src="props.item.imageUrl" class="rounded-md w-[40px] h-[40px]" :alt="props.item.firstName"/>
    <div aria-label="details" class="flex flex-col items-start justify-start">
      <div aria-label="name" :class="mainline">{{name}}</div>
      <div aria-label="subline" class="flex justify-center items-center gap-x-1" :class="subline">
        <Icon type="members" class="w-[16px] h-[16px]" :active="false" />
        <div>Birthday</div>
        <div>{{props.item.birthday}}</div>
      </div>
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