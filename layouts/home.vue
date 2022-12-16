<template>
  <div class="max-w-[576px] mx-auto h-full w-screen flex justify-center items-center font-body relative">
    <NuxtLink href="/" :class="logo">
      <img src="/icons/logo-colored.svg" alt="logo"/>
    </NuxtLink>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

const { logo } = useUi()
</script> 
