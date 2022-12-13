<template>
  <div class="flex justify-between items-center gap-x-2 bg-white">
    <NuxtLink
      href="/events"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <component 
        :is="eventsIcon()"
        class="w-[24px] h-[24px]"></component>
      </div>
      <div class="capitalize" :class="subline">events</div>
    </NuxtLink>
    <NuxtLink
      href="/meetings"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <component 
        :is="meetingsIcon()"
        class="w-[24px] h-[24px]"></component>
      </div>
      <div class="capitalize" :class="subline">meetings</div>
    </NuxtLink>
    <NuxtLink
      href="/members"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <component 
        :is="membersIcon()"
        class="w-[24px] h-[24px]"></component>
      </div>
      <div class="capitalize" :class="subline">members</div>
    </NuxtLink>
    <NuxtLink
      href="/settings"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <component 
        :is="settingsIcon()"
        class="w-[24px] h-[24px]"></component>
      </div>
      <div class="capitalize" :class="subline">settings</div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
import {
  HomeModernIcon as EventIconOutline,
  ChatBubbleBottomCenterIcon as MeetingsIconOutline,
  UserGroupIcon as MembersIconOutline,
  Cog6ToothIcon as SettingsIconOutline
} from "@heroicons/vue/24/outline"
import {
  HomeModernIcon as EventIconSolid,
  ChatBubbleBottomCenterIcon as MeetingsIconSolid,
  UserGroupIcon as MembersIconSolid,
  Cog6ToothIcon as SettingsIconSolid
} from "@heroicons/vue/24/solid"

const { subline, bottomNavLink, bottomNavLinkIcon } = useUi()

const route = useRoute()
const currentTab = ref("events")

const settingsIcon = () => {
  return route.name === 'settings'
    ? SettingsIconSolid : SettingsIconOutline
}

const membersIcon = () => {
  return route.name === 'members'
    ? MembersIconSolid : MembersIconOutline
}

const meetingsIcon = () => {
  return route.name === 'meetings'
    ? MeetingsIconSolid : MeetingsIconOutline
}


const eventsIcon = () => {
  return route.name === 'events'
    ? EventIconSolid : EventIconOutline
}



const changeTab = (tab: string) => currentTab.value = tab
</script>
<style lang="">
    
</style>