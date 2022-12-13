<template>
  <div class="flex flex-col items-start justify-between">
    <div :class="pageTitle">members</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" src="/images/prayer_452x452.png" alt=""/>
      <div aria-label="details" class="w-details p-2">details</div>
    </div>
    <div aria-label="list">list</div>
    <div aria-label="search" class="h-[40px] w-full">
      <input type="text" id="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rcnblue-500 focus:border-rcnblue-500 block w-full h-[42px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rcnblue-500 dark:focus:border-rcnblue-500" :placeholder="placeholder">
  
    </div>
  </div>
</template>
<script setup lang="ts">

const { pageTitle } = useUi()

const { name } = useRoute()

// @ts-ignore
const placeholder = computed(() => "Search for " + name + '...')

definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>