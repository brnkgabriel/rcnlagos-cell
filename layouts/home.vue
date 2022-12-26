<template>
  <div class="max-w-[576px] mx-auto h-full w-screen flex justify-center items-center font-body relative">
    <NuxtLink href="/" :class="logo">
      <img src="/icons/logo-colored.svg" alt="logo"/>
    </NuxtLink>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

const user = useSupabaseUser()
const { globalState } = useGlobalState()

watch(user, () => {
  console.log("from home layout user", globalState.value)
  const { fromRoute, toRoute } = globalState.value

  if (fromRoute === "/" && toRoute === "/") navigateTo("/members")
  else if (user.value) navigateTo(globalState.value.toRoute)
})
const { logo } = useUi()
</script> 
