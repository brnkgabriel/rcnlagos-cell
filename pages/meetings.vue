<template>
  <div class="w-full h-full">
    <div aria-label="slides" class="relative w-full h-40% overflow-hidden">
      <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="slide1Style"></div>
    </div>
    <div aria-label="bottom content" class="flex flex-col gap-y-6 h-60% justify-around items-center">

      <div aria-label="title" class="text-center text-rcnblue-500 px-4">
        <div aria-label="top" :class="mainline">Meetings</div>
        <div aria-label="bottom" :class="subline_small">Kindly find upcoming & previous meetings @ links below</div>
      </div>

      <div aria-label="navigation" class="flex flex-col justify-center items-center gap-y-2 capitalize">
        <a href="https://us04web.zoom.us/j/75345423965?pwd=1PugyuRN4Fk9_bLTa0K7lfF9LYzXbF.1" :class="homeNavLink" class="relative" target="_blank">
          <img src="/icons/zoom.svg" class="w-[24px] absolute top-1/2 left-[8px] -translate-y-1/2" alt="google drive"/>
          <div>upcoming meeting</div>
        </a>
        <a href="https://tinyurl.com/42vb8n7y" :class="homeNavLink" class="relative" target="_blank">
          <img src="/icons/google-drive.svg" class="w-[24px] absolute top-1/2 left-[8px] -translate-y-1/2" alt="google drive"/>
          <div>previous meetings</div>
        </a>
        <NuxtLink href="/members" :class="homeNavLink">Members</NuxtLink>
        <NuxtLink href="/settings" :class="homeNavLink">Settings</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const { mainline, subline_small, homeNavLink } = useUi()
 
const slide1Style = ref(`background:url('/images/prayer_678x452.jpeg') no-repeat;background-position:center;background-size:cover`)
definePageMeta({
  layout: "home",
});
</script>