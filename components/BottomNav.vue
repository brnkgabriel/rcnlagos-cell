<template>
  <div class="flex justify-center items-center gap-x-8 bg-white">
    <NuxtLink
      href="/"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon type="home" class="w-[24px] h-[24px]" :active="route.name === 'home'" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color('home')">home</div>
    </NuxtLink>
    <NuxtLink
      href="/meetings"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon type="meetings" class="w-[24px] h-[24px]" :active="route.name === 'meetings'" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color('meetings')">meetings</div>
    </NuxtLink>
    <NuxtLink
      href="/members"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon type="members" class="w-[24px] h-[24px]" :active="route.name === 'members'" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color('members')">members</div>
    </NuxtLink>
    <!-- <NuxtLink
      href="/settings"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon type="settings" class="w-[24px] h-[24px]" :active="route.name === 'settings'" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color('settings')">settings</div>
    </NuxtLink> -->
  </div>
</template>
<script setup lang="ts">

const { subline_small, bottomNavLink, bottomNavLinkIcon } = useUi()

const route = useRoute()

const color = (type: string) => route.name === type ? `text-rcnblue-500` : `text-rcngray-900`
</script>
<style lang="">
    
</style>