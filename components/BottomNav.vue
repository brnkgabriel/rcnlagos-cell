<template>
  <div class="flex justify-between items-center gap-x-2 bg-white">
    <NuxtLink href="/" class="flex justify-center flex-col items-center">
      <div class="w-[40px] h-[40px] flex justify-center items-center">
        <HomeIconOutline class="w-[24px] h-[24px]" />
      </div>
      <div class="capitalize" :class="subline">home</div>
    </NuxtLink>
    <NuxtLink href="/meetings" class="flex justify-center flex-col items-center">
      <div class="w-[40px] h-[40px] flex justify-center items-center">
        <MeetingsIconOutline class="w-[24px] h-[24px]" />
      </div>
      <div class="capitalize" :class="subline">meetings</div>
    </NuxtLink>
    <NuxtLink href="/members" class="flex justify-center flex-col items-center">
      <div class="w-[40px] h-[40px] flex justify-center items-center">
        <MembersIconOutline class="w-[24px] h-[24px]" />
      </div>
      <div class="capitalize" :class="subline">members</div>
    </NuxtLink>
    <NuxtLink href="/settings" class="flex justify-center flex-col items-center">
      <div class="w-[40px] h-[40px] flex justify-center items-center">
        <SettingsIconOutline class="w-[24px] h-[24px]" />
      </div>
      <div class="capitalize" :class="subline">settings</div>
    </NuxtLink>
  </div>
</template>
<script setup="ts">
import {
  HomeModernIcon as HomeIconOutline,
  ChatBubbleBottomCenterIcon as MeetingsIconOutline,
  UserGroupIcon as MembersIconOutline,
  Cog6ToothIcon as SettingsIconOutline
} from "@heroicons/vue/24/outline"
import {
  HomeModernIcon as HomeIconSolid,
  ChatBubbleBottomCenterIcon as MeetingsIconSolid,
  UserGroupIcon as MembersIconSolid,
  Cog6ToothIcon as SettingsIconSolid
} from "@heroicons/vue/24/solid"

const { subline } = useUi()
</script>
<style lang="">
    
</style>