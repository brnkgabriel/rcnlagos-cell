<template>
  <div class="flex justify-center items-center gap-x-8 bg-white">
    <NuxtLink
      href="/meetings"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon :type="constants.meetings" class="w-[24px] h-[24px]" :active="route.name === constants.meetings" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color(constants.meetings)">meetings</div>
    </NuxtLink>
    <NuxtLink
      href="/members"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon :type="constants.members" class="w-[24px] h-[24px]" :active="route.name === constants.members" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color(constants.members)">members</div>
    </NuxtLink>
    <div
      @click="signOut"
      :class="bottomNavLink">
      <div :class="bottomNavLinkIcon">
        <Icon :type="constants.signout" class="w-[24px] h-[24px]" />
      </div>
      <div class="capitalize" :class="subline_small + ' ' + color(constants.signout)">signout</div>
    </div> 
  </div>
</template>
<script setup lang="ts">

// data / var
const { subline_small, bottomNavLink, bottomNavLinkIcon } = useUi()
const route = useRoute()
const supabase = useSupabaseAuthClient()

// functions
const color = (type: string) => route.name === type ? `text-rcnblue-500` : `text-rcngray-900`
const signOut = async () => {
  await supabase.auth.signOut()
  navigateTo("/")
}
</script>
<style lang="">
    
</style>