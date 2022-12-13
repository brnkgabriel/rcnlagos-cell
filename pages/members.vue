<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="pageTitle">{{name}}</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" src="/images/prayer_452x452.png" alt=""/>
      <div aria-label="details" class="w-details p-2">details</div>
    </div>
    <div aria-label="list" class="h-listheight">
      
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input type="text" id="search" :class="input" :placeholder="placeholder">
    </div>
  </div>
</template>
<script setup lang="ts">

const { pageTitle, input } = useUi()

const { name } = useRoute()

// @ts-ignore
const placeholder = computed(() => "Search for " + name + '...')

definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>