<template>
  <component :is="comp.icon" :class="comp.color" />
</template>
<script setup lang="ts">
import {
  HomeModernIcon as HomeIconOutline,
  ChatBubbleBottomCenterIcon as MeetingsIconOutline,
  UserGroupIcon as MembersIconOutline,
  Cog6ToothIcon as SettingsIconOutline,
  CalendarDaysIcon as EventsIconOutline,
  WrenchScrewdriverIcon as OccupationIconOutline,
  PhoneArrowUpRightIcon as PhonecallIconOutline,
  PencilIcon as EditIconOutline  
} from "@heroicons/vue/24/outline/index"
import {
  HomeModernIcon as HomeIconSolid,
  ChatBubbleBottomCenterIcon as MeetingsIconSolid,
  UserGroupIcon as MembersIconSolid,
  Cog6ToothIcon as SettingsIconSolid,
  CalendarDaysIcon as EventsIconSolid,
  WrenchScrewdriverIcon as OccupationIconSolid,
  PhoneArrowUpRightIcon as PhonecallIconSolid,
  PencilIcon as EditIconSolid,
  MagnifyingGlassIcon as SearchIcon
} from "@heroicons/vue/24/solid/index"

const comp = computed(() => {
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
    case constants.occupation:
      icon = props.active ? OccupationIconSolid : OccupationIconOutline
      break
    case constants.phonecall:
      icon = props.active ? PhonecallIconSolid : PhonecallIconOutline
      break
    case constants.edit:
      icon = props.active ? EditIconSolid : EditIconOutline
      break;
    case constants.home:
      icon = props.active ? HomeIconSolid : HomeIconOutline
      break;
    case constants.search:
      icon = SearchIcon
      break;
    default:
      break;
  }
  return { icon, color }
})

const props = defineProps<{
  active?: boolean
  type?: string
}>()
</script>
<style lang="">
    
</style>