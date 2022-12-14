<template>
  <div class="h-full">
    <div :class="breadcrumb">home &gt;&gt; update &gt;&gt; {{ selected.firstName }} {{ selected.lastName }}
    </div>

    <form ref="formRef" class="flex justify-center items-center flex-col gap-y-1 h-form overflow-y-auto"
      @submit.prevent>
      <label for="avatar" class="relative cursor-pointer">
        <div aria-label="icon-wrap"
          class="absolute right-0 bottom-0 bg-rcngray-700 rounded-full p-1 border-rcngray-500 border-[2px] flex items-center justify-center">
          <Icon type="edit" :active="true" class="text-rcngray-900 w-[12px]" />
        </div>
        <input name="imageUrl" id="avatar" type="file" class="hidden" accept="image/*" @change="toCropImage" />
        <img class="rounded-full w-[80px]" :src="imgSrc(selected?.imageUrl as string)" :alt="selected.firstName" />
      </label>
      <input type="text" id="firstName" name="firstName" autocomplete="off" :class="input" placeholder="First name"
        v-model="selected.firstName" />
      <input type="text" id="lastName" name="lastName" autocomplete="off" :class="input" placeholder="Last name"
        v-model="selected.lastName" />
      <input type="email" id="email" name="email" autocomplete="off" :class="input" placeholder="Email"
        v-model="selected.email" />
      <input type="number" id="phoneNumber" name="phoneNumber" autocomplete="off" :class="input" placeholder="Email"
        v-model="selected.phoneNumber" />
      <input type="text" id="homeAddress" name="homeAddress" autocomplete="off" :class="input"
        placeholder="home address" v-model="selected.homeAddress" />
      <input type="text" id="occupation" name="occupation" autocomplete="off" :class="input" placeholder="Occupation"
        v-model="selected.occupation" />
      <input type="text" id="birthday" name="birthday" autocomplete="off" :class="input" placeholder="Birthday"
        v-model="selected.birthday" />
      <input type="text" id="weddingAnniversary" name="weddingAnniversary" autocomplete="off" :class="input"
        placeholder="Wedding anniversary" v-model="selected.weddingAnniversary" />
      <SwitchComponent left="male" right="female" :value="handleGender" name="gender" :class="subline" />
      <button type="submit" :class="button" @click="handleSubmit">submit</button>
    </form>
    <CropperModal
      v-if="isOpen"
      :is-open="isOpen"
      :img-file="imgFile"
      @cropped="onCrop"
      @opened="onOpened"
    />
  </div>
</template>
<script setup lang="ts">
import { useMemberStore } from "~~/store/members-store"
import { iMember, iUpload } from "~~/helpers/interfaces"
import { Ref } from "vue";
import CropperModal from "~~/components/CropperModal.vue";

const { breadcrumb, input, button, subline } = useUi()
const formRef = ref()
const store = useMemberStore()
const selected:Ref<iMember> = ref({})

const isOpen = ref(false)
const imgFile: Ref<iUpload> = ref({
  file: "",
  name: "",
  path: "",
  type: ""
})

const handleGender = (value: string) => {
  console.log("from update page, gender is", value)
}

const onCrop = async (toUpload: iUpload) => {
  selected.value.imageUrl = toUpload.file

  console.log("data from client", toUpload)
  try {
    const fetchOptions = {
      headers: { "Content-type": "multipart/form-data" },
      method: 'POST',
      body: toUpload
    }
    const { data, error } = await useFetch(constants.imageUploadApiUrl, fetchOptions)
    if (error.value) throw error
    const url = constants.storageUrl(data.value as string)
    // selected.value.imageUrl = url
    console.log("url from server", url, "data", data.value)
  } catch (error) {
    console.log(error)
  }
}

const onOpened = (flag: boolean) => isOpen.value = flag

const toCropImage = async (evt: Event) => {
  const target = evt.target as HTMLInputElement

  if (target.files) {
    const fileObj = target.files[0]
    const file = await getBase64(fileObj) as string
    isOpen.value = true
    imgFile.value = {
      file,
      name: fileObj.name,
      path: id(folderName(selected.value), '-'),
      type: fileObj.type
    }
  }
}

const handleSubmit = async (evt: Event) => {
  const formData = new FormData(formRef.value)
  const entries = Object.fromEntries(formData.entries())
  delete entries.imageUrl
  selected.value = { ...selected.value, ...entries }
  const { data, error } = await useFetch(constants.updateMemberUrl, { method: "POST", body: selected.value })
  if (error.value) throw error
  toLocalStorage("selected", selected.value)
  navigateTo("/members")
}

watchEffect(() => console.log("isOpen is", isOpen.value))

onMounted(() => {
  const dataIfNull = store.rendered[0]
  selected.value = fromLocalStorage("selected", dataIfNull)
})

definePageMeta({
  layout: "catalog",
});
</script>