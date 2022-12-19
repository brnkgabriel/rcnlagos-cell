<template>
  <div class="h-full">
    <div :class="breadcrumb">home &gt;&gt; update &gt;&gt; {{ selected.firstName }} {{ selected.lastName }}
    </div>

    <form ref="formRef" class="flex justify-center items-center flex-col gap-y-2 h-form overflow-y-auto py-4 pt-[80px]"
      @submit.prevent>
      <label for="avatar" class="relative cursor-pointer">
        <div aria-label="icon-wrap"
          class="absolute right-0 bottom-0 bg-rcnblue-500 rounded-full p-1 border-rcngray-500 border-[2px] flex items-center justify-center">
          <Icon type="edit" :active="true" class="text-rcngray-500 w-[12px]" />
        </div>
        <input name="imageFile" id="avatar" type="file" class="hidden" accept="image/*" @change="handleImageUpload" />
        <img class="rounded-full w-[80px]" :src="imgSrc(selected?.imageUrl as string)" :alt="selected.firstName" />
      </label>
      <input type="text" id="firstName" name="firstName" autocomplete="off" :class="input" placeholder="first name"
        v-model="selected.firstName" />
      <input type="text" id="lastName" name="lastName" autocomplete="off" :class="input" placeholder="last name"
        v-model="selected.lastName" />
      <input type="email" id="email" name="email" autocomplete="off" :class="input" placeholder="email"
        v-model="selected.email" />
      <input type="number" id="phoneNumber" name="phoneNumber" autocomplete="off" :class="input" placeholder="email"
        v-model="selected.phoneNumber" />
      <input type="text" id="homeAddress" name="homeAddress" autocomplete="off" :class="input"
        placeholder="home address" v-model="selected.homeAddress" />
      <input type="text" id="occupation" name="occupation" autocomplete="off" :class="input" placeholder="occupation"
        v-model="selected.occupation" />
      <SwitchComponent left="male" right="female" :value="handleGender" name="gender" />
      <input type="text" id="birthday" name="birthday" autocomplete="off" :class="input" placeholder="birthday"
        v-model="selected.birthday" />
      <input type="text" id="weddingAnniversary" name="weddingAnniversary" autocomplete="off" :class="input"
        placeholder="weddingAnniversary" v-model="selected.weddingAnniversary" />
      <button type="submit" :class="button" @click="handleSubmit">submit</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"
import { iMember, iUpload } from "~~/helpers/interfaces"
import { Ref } from "vue";

const { breadcrumb, input, button } = useUi()
const formRef = ref()
const store = useMemberStore()
const selected:Ref<iMember> = ref({})

const handleGender = (value: string) => {
  console.log("from update page, gender is", value)
}
const handleImageUpload = async (evt: Event) => {
  const target = evt.target as HTMLInputElement

  if (target.files) {

    const fileObj = target.files[0]

    const upload: iUpload = {
      path: id(memberName(selected.value), '-'),
      name: fileObj.name,
      file: await getBase64(fileObj) as string,
      type: fileObj.type
    }

    selected.value.imageUrl = await getBase64(fileObj) as string

    console.log("data from client", upload)
    try {

      const { data, error } = await useFetch(constants.imageUploadApiUrl, {
        headers: { "Content-type": "multipart/form-data" },
        method: 'POST',
        body: upload
      })

      console.log("data from server", data.value)
    } catch (error) {
      console.log(error)
    }
  }
}

const handleSubmit = (evt: Event) => {
  const formData = new FormData(formRef.value)
  const entries = Object.fromEntries(formData.entries())
  console.log("form entries", entries)
}


onMounted(() => {
  const dataIfNull = store.rendered[0]
  selected.value = fromLocalStorage("selected", dataIfNull)
})

definePageMeta({
  layout: "catalog",
});
</script>