<template>
  <div
    class="max-w-[576px] mx-auto h-full w-screen flex flex-col justify-between items-center font-body relative bg-rcngray-500">
    <TopNav class="h-[56px] w-full p-2" />
    <div class="px-2 h-middle w-full my-2">
      <Register v-if="!isRegistered" />
      <slot v-if="isRegistered" />
    </div>
    <BottomNav class="h-[56px] w-full p-2" />
  </div>
</template>
<script setup lang="ts">

const user = useSupabaseUser()

const data = await getUser(user.value?.email) as any[]

const isRegistered = ref(false)

isRegistered.value = data.length > 0

onMounted(() => {

})
</script>
<style lang="">
  
</style>