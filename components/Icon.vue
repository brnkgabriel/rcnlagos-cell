<template>
  <component :is="comp.icon" :class="comp.color" />
</template>
<script setup lang="ts">
import MeetingFilled from "./icon-components/MeetingFilled.vue";
import MeetingOutline from "./icon-components/MeetingOutline.vue";
import MembersFilled from "./icon-components/MembersFilled.vue";
import MembersOutline from "./icon-components/MembersOutline.vue";
import Power from "./icon-components/Power.vue";
import Search from "./icon-components/Search.vue";
import PhoneCallOutline from "./icon-components/PhoneCallOutline.vue"
import PhoneCallSolid from "./icon-components/PhoneCallSolid.vue"

const comp = computed(() => {
  let icon = null
  let color = props.active ? 'text-rcnblue-500' : 'text-rcngray-900'
  switch (props.type) {
    // case constants.settings:
    //   icon = props.active ? SettingsIconSolid : SettingsIconOutline
    //   break;
    case constants.members:
      icon = props.active ? MembersFilled : MembersOutline
      break
    case constants.meetings:
      icon = props.active ? MeetingFilled : MeetingOutline
      break
    // case constants.events:
    //   icon = props.active ? EventsIconSolid : EventsIconOutline
    //   break
    // case constants.occupation:
    //   icon = props.active ? OccupationIconSolid : OccupationIconOutline
    //   break
    case constants.phonecall:
      icon = props.active ? PhoneCallSolid : PhoneCallOutline
      break
    // case constants.edit:
    //   icon = props.active ? EditIconSolid : EditIconOutline
    //   break;
    // case constants.home:
    //   icon = props.active ? HomeIconSolid : HomeIconOutline
    //   break;
    case constants.search:
      icon = Search
      break;
    case constants.signout:
      icon = Power
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