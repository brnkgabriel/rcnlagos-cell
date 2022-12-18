<template>
  <div class="h-full">
    <div :class="breadcrumb">home &gt;&gt; update &gt;&gt; {{store.selected.firstName}} {{store.selected.lastName}}</div>
    
    <form ref="formRef" class="flex justify-center items-center flex-col gap-y-2 h-form overflow-y-auto py-4 pt-[96px]" @click.prevent="handleSubmit">
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
      <SwitchComponent
        left="male"
        right="female"
        :value="handleGender"
        name="gender"/>
      <input
        type="text"
        id="birthday"
        name="birthday"
        autocomplete="off"
        :class="input"
        placeholder="birthday"
        v-model="store.selected.birthday"/>
      <input
        type="text"
        id="weddingAnniversary"
        name="weddingAnniversary"
        autocomplete="off"
        :class="input"
        placeholder="weddingAnniversary"
        v-model="store.selected.weddingAnniversary"/>
      <button type="submit" :class="button">submit</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"

const { breadcrumb, input, button } = useUi()
const formRef = ref()
const store = useMemberStore()

const handleGender = (value: string) => {
  console.log("from update page, gender is", value)
}

const handleSubmit = (evt: Event) => {
  const formData = new FormData(formRef.value)
  const entries = Object.fromEntries(formData.entries())
  console.log("form entries", entries)
}


onMounted(() => {
  console.log("selected", store.selected)
})

definePageMeta({
  layout: "catalog",
});
</script>