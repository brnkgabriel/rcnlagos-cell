<template>
  <div class="flex flex-col items-start justify-between">
    <div :class="pageTitle">meetings</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden">
      <img class="h-[150px]" src="/images/prayer_452x452.png" alt=""/>
      <div aria-label="details">

      </div>
    </div>
    <div aria-label="list">list</div>
    <div aria-label="search">search</div>
  </div>
</template>
<script setup lang="ts">

const { pageTitle } = useUi()
definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>