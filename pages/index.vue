<template>
  <div class="w-full h-full">
    <div aria-label="slides" class="relative w-full h-40% overflow-hidden">
      <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="slide1Style"></div>
    </div>
    <div aria-label="bottom content" class="flex flex-col gap-y-6 h-60% justify-center items-center">
      <div aria-label="note" class="text-center">
        <div aria-label="welcome" :class="mainline">Welcome to</div>
        <div aria-label="rcnlagos" :class="mainline">Remnant Christian Network Lagos</div>
        <div aria-label="footnote" :class="subline_small">Towards the rebirth of Apostolic Christianity</div>
      </div>

      <div aria-label="title" class="flex flex-col text-center text-rcnblue-500">
        <div aria-label="top" class="uppercase font-bold text-3xl">oko oba</div>
        <div aria-label="bottom" class="capitalize font-bold" :class="subline_small">prayer cell</div>
      </div>

      <div aria-label="navigation" class="flex flex-col justify-center items-center gap-y-2">
        <NuxtLink href="/events" :class="homeNavLink">Events</NuxtLink>
        <NuxtLink href="/meetings" :class="homeNavLink">Meetings</NuxtLink>
        <NuxtLink href="/members" :class="homeNavLink">Members</NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

const { mainline_small, subline_small, homeNavLink, mainline } = useUi()
 
const slide1Style = ref(`background:url('/images/prayer_678x452.jpeg') no-repeat;background-position:center;background-size:cover`)
definePageMeta({
  layout: "home",
});
</script>