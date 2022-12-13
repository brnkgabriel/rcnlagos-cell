<template>
  <div class="flex flex-col items-start justify-between">
    <div class="capitalize mb-1" :class="subline">meetings</div>
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

const { subline } = useUi()
definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>