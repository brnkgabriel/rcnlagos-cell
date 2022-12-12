<template>
  <div class="font-body relative w-full min-h-screen max-w-[576px] mx-auto">
    <div class="flex justify-center items-center bg-main-500 absolute top-[40vh] left-[16px] w-[60px] h-[60px] rounded-lg p-2 z-10 -translate-y-1/2">
      <img src="/icons/logo.svg" alt="logo"/>
    </div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
</script> 
