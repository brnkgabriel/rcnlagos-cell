<template>
  <div class="max-w-[576px] mx-auto h-full w-screen flex justify-center items-center font-body relative">
    <div :class="logo">
      <img src="/icons/logo-colored.svg" alt="logo"/>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">

const { logo } = useUi()
</script> 
