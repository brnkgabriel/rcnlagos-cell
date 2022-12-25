<template>
  <div class="w-full h-full">
    <div aria-label="slides" class="relative w-full h-40% overflow-hidden">
      <div aria-label="slide" class="h-full w-full flex items-center justify-center" :style="slide1Style"></div>
    </div>
    <div aria-label="bottom content" class="flex flex-col gap-y-2 h-60% justify-center items-center">

      <div aria-label="title" class="text-center text-rcnblue-500 px-4">
        <div aria-label="top" :class="mainline">Sign in to your account</div>
      </div>

      <div aria-label="navigation" class="flex flex-col justify-center items-center gap-y-2 capitalize">
        <div :class="homeNavLink" class="relative cursor-pointer" @click="signIn">
          <img src="/icons/google.svg" class="w-[24px] absolute top-1/2 left-[8px] -translate-y-1/2" alt="google drive"/>
          <div>Google</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const client = useSupabaseClient()
const slide1Style = ref(`background:url('/images/prayer_678x452.jpeg') no-repeat;background-position:center;background-size:cover`)

const { mainline, subline_small, homeNavLink } = useUi()

const signIn = async () => {
  const cred = await client.auth.signInWithOAuth({ provider: "google" })
  console.log("cred is", cred)
  
}
</script>