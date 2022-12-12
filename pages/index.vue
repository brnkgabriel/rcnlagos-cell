<template>
  <div class="w-full flex-1">
    <div aria-label="slides" class="relative w-full h-40% overflow-hidden">
      <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="slide1Style"></div>
    </div>
    <div aria-label="bottom content" class="flex flex-col gap-y-6 h-60% justify-center items-center">
      <div aria-label="note" class="text-center leading-tight">
        <div aria-label="welcome" class="text-main-500 font-semibold">Welcome to</div>
        <div aria-label="rcnlagos" class="text-main-500 font-semibold">Remnant Christian Network Lagos</div>
        <div aria-label="footnote" class="text-main-500 text-sm">Towards the rebirth of Apostolic Christianity</div>
      </div>

      <div aria-label="title" class="font-title text-3xl uppercase text-center text-main-500">
        <div aria-label="top">oko oba</div>
        <div aria-label="bottom">prayer cell</div>
      </div>

      <div aria-label="navigation" class="flex flex-col justify-center items-center gap-y-2">
        <NuxtLink href="/meetings" class="rounded-full border-main-500 px-4 py-2 w-[250px] text-center cursor-pointer text-main-500 font-semibold border-2 text-sm">Meetings</NuxtLink>
        <NuxtLink href="/members" class="rounded-full border-main-500 px-4 py-2 w-[250px] text-center cursor-pointer text-main-500 font-semibold border-2 text-sm">Members</NuxtLink>
        <NuxtLink href="/events" class="rounded-full border-main-500 px-4 py-2 w-[250px] text-center cursor-pointer text-main-500 font-semibold border-2 text-sm">Events</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
 
const slide1Style = ref(`background:url('/images/prayer_678x452.jpeg') no-repeat;background-position:center;background-size:cover`)
definePageMeta({
  layout: "home",
});
</script>