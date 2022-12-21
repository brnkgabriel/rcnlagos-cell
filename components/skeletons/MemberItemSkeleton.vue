<template>
  <div aria-label="membersItem" :class="memberItem">
    <img aria-label="actual image" class="w-full" loading="lazy" src="/icons/image-placeholder.svg" alt="skeleton" />
    <div aria-label="details" class="p-2 flex flex-col justify-start gap-y-1">
      <div aria-label="name" :class="mainline_small + ' ' + texttrim" class="bg-rcngray-700 w-[95%] h-[13px]"></div>
      <div aria-label="occupation" :class="subline_small" class="flex gap-x-1 items-center">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="true" />
        <div :class="texttrim" class="bg-rcngray-700 w-1/2 h-[10px]"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const {
  mainline_small,
  subline_small,
  memberItem,
  memberItemOccupationIcon,
  texttrim
} = useUi()
</script>
<style lang="">
    
</style>