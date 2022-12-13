<template>
  <div class="shadow-custom bg-white flex justify-between items-center relative">
    <NuxtLink href="/" class="">
      <img class="h-[32px]" src="/images/rcn-logo.png" alt="rcn logo"/>
    </NuxtLink>
    <div aria-label="site name" class="flex flex-col justify-center items-center" :class="center">
      <div class="uppercase" :class="mainline">oko oba</div>
      <div class="uppercase" :class="subline">prayer cell</div>
    </div>
    <div aria-label="notification" class="rounded-full border-2 border-bglight-700 p-[2px] h-[40px] w-[40px]">
      <img class="rounded-full" src="/icons/avatar.svg" alt="avatar"/>
    </div>
  </div>
</template>
<script setup="ts">

const { subline, mainline, center } = useUi()
</script>
<style lang="">
    
</style>