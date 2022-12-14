<template>
  <component :is="settings.icon" :class="settings.color" />
</template>
<script setup lang="ts">
import {
  ChatBubbleBottomCenterIcon as MeetingsIconOutline,
  UserGroupIcon as MembersIconOutline,
  Cog6ToothIcon as SettingsIconOutline,
  CalendarDaysIcon as EventsIconOutline
} from "@heroicons/vue/24/outline/index"
import {
  ChatBubbleBottomCenterIcon as MeetingsIconSolid,
  UserGroupIcon as MembersIconSolid,
  Cog6ToothIcon as SettingsIconSolid,
  CalendarDaysIcon as EventsIconSolid
} from "@heroicons/vue/24/solid/index"

const settings = computed(() => {
  let icon = null
  let color = props.active ? 'text-rcnblue-500' : 'text-rcngray-900'
  switch (props.type) {
    case constants.settings:
      icon = props.active ? SettingsIconSolid : SettingsIconOutline
      break;
    case constants.members:
      icon = props.active ? MembersIconSolid : MembersIconOutline
      break
    case constants.meetings:
      icon = props.active ? MeetingsIconSolid : MeetingsIconOutline
      break
    case constants.events:
      icon = props.active ? EventsIconSolid : EventsIconOutline
      break
    default:
      break;
  }
  return { icon, color }
})

const props = defineProps<{
  active: boolean
  type?: string
}>()
</script>
<style lang="">
    
</style>