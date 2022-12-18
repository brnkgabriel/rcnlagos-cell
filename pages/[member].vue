<template>
  <div>
    <div :class="breadcrumb">home &gt;&gt; update &gt;&gt; {{store.selected.firstName}} {{store.selected.lastName}}</div>
    
    <form class="flex justify-center items-center flex-col gap-y-4">
      <label for="avatar" class="relative cursor-pointer">
        <div aria-label="icon-wrap" class="absolute right-0 bottom-0 bg-rcnblue-500 rounded-full p-1 border-white border-[2px] flex items-center justify-center">
          <Icon type="edit" :active="true" class="text-white w-[12px]" />
        </div>
        <input id="avatar" type="file" class="hidden" accept="image/*" />
        <img class="rounded-full w-[80px]" :src="store.selected.imageUrl" :alt="store.selected.firstName"/>
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        autocomplete="off"
        :class="input"
        placeholder="first name"
        v-model="store.selected.firstName"/>
      <input
        type="text"
        id="lastName"
        name="lastName"
        autocomplete="off"
        :class="input"
        placeholder="last name"
        v-model="store.selected.lastName"/>
      <input
        type="email"
        id="email"
        name="email"
        autocomplete="off"
        :class="input"
        placeholder="email"
        v-model="store.selected.email"/>
      <input
        type="number"
        id="phoneNumber"
        name="phoneNumber"
        autocomplete="off"
        :class="input"
        placeholder="email"
        v-model="store.selected.phoneNumber"/>
      <input
        type="text"
        id="homeAddress"
        name="homeAddress"
        autocomplete="off"
        :class="input"
        placeholder="home address"
        v-model="store.selected.homeAddress"/>
      <input
        type="text"
        id="occupation"
        name="occupation"
        autocomplete="off"
        :class="input"
        placeholder="occupation"
        v-model="store.selected.occupation"/>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"

const { breadcrumb, input } = useUi()

const store = useMemberStore()

onMounted(() => {
  console.log("selected", store.selected)
})

definePageMeta({
  layout: "catalog",
});
</script>