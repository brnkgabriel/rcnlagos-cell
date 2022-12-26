<template>
  <div class="h-full">
    <!-- <Tabs /> -->
    <!-- <Disclosure /> -->
    <div :class="mainline_small" class="text-center">Almost there!!!</div>
    <div :class="subline_small" class="text-center">All tabs must be opened before submitting to capture your details</div>
    <form ref="formRef" @submit.prevent="handleSubmit" class="mx-auto w-full max-w-md rounded-2xl bg-white p-2 pb-8 h-full overflow-y-auto flex flex-col gap-y-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>You're welcome, can we meet you?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 py-2 text-sm text-gray-500 flex flex-col justify-start gap-y-2">
          <div class="flex justify-between items-center gap-x-2">
            <label for="avatar" class="relative cursor-pointer">
              <div aria-label="icon-wrap"
                class="absolute right-0 bottom-0 bg-rcngray-700 rounded-full p-1 border-rcngray-500 border-[2px] flex items-center justify-center">
                <Icon type="edit" :active="true" class="text-rcngray-900 w-[12px]" />
              </div>
              <input name="imageFile" id="avatar" type="file" class="hidden" accept="image/*" @change="toCropImage" />
              <img class="rounded-full w-[80px]" :src="imgSrc(selected.imageUrl as string)" alt="avatar" />
            </label>
            <SwitchComponent left="male" right="female" :value="handleGender" name="gender" :class="subline" />
          </div>
          <div aria-label="names" class="flex justify-between items-center gap-x-2">
            <div class="flex flex-col justify-start w-full">
              <label for="firstName" :class="subline_small">First name</label>
              <input type="text" id="firstName" name="firstName" autocomplete="off" :class="input" placeholder="John"
                v-model="selected.firstName" required />
            </div>
            <div class="flex flex-col justify-start w-full">
              <label for="lastName" :class="subline_small">Last name</label>
              <input type="text" id="lastName" name="lastName" autocomplete="off" :class="input" placeholder="Doe"
                v-model="selected.lastName" required />
            </div>
          </div>
          <div class="flex flex-col justify-start w-full">
            <label for="email" :class="subline_small">Email</label>
            <input type="email" id="email" name="email" autocomplete="off" :class="input"
              placeholder="john.doe@gmail.com" v-model="selected.email" required />
          </div>
          <div class="flex flex-col justify-start w-full">
            <label for="phoneNumber" :class="subline_small">Phone number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" autocomplete="off" :class="input"
              placeholder="08021116498" v-model="selected.phoneNumber" required />
          </div>
          <div class="flex flex-col justify-start w-full">
            <label for="homeAddress" :class="subline_small">Home address</label>
            <input type="text" id="homeAddress" name="homeAddress" autocomplete="off" :class="input"
              placeholder="1, Tewogbade close, Shola Martins..." v-model="selected.homeAddress" required />
          </div>
          <div class="flex flex-col justify-start w-full">
            <label for="birthday" :class="subline_small">Birthday</label>
            <input type="text" id="birthday" name="birthday" autocomplete="off" :class="input" placeholder="October 1"
              v-model="selected.birthday" required />
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>What do you do?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 py-2 text-sm text-gray-500 flex flex-col justify-start gap-y-2">
          <div class="flex flex-col justify-start w-full">
            <label for="occupation" :class="subline_small">Occupation</label>
            <input type="text" id="occupation" name="occupation" autocomplete="off" :class="input"
              placeholder="Graphics designer" v-model="selected.occupation" />
          </div>

          <div class="flex flex-col justify-start w-full">
            <label for="workAddress" :class="subline_small">Work address</label>
            <input type="text" id="workAddress" name="workAddress" autocomplete="off" :class="input"
              placeholder="1, Tewogbade close, Shola Martins..." v-model="selected.workAddress" />
          </div>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>Are you married?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 py-2 text-sm text-gray-500 flex flex-col justify-start gap-y-2">
          <div class="flex flex-col justify-start w-full">
            <label for="maritalStatus" :class="subline_small">Marital Status</label>
            <ListComponent id="maritalStatus" @selected="handleMaritalStatus" />
          </div>
          <div class="flex flex-col justify-start w-full">
            <label for="weddingAnniversary" :class="subline_small">Wedding anniversary</label>
            <input type="text" id="weddingAnniversary" name="weddingAnniversary" autocomplete="off" :class="input"
              placeholder="December 1" v-model="selected.weddingAnniversary" />
          </div>
        </DisclosurePanel>
      </Disclosure>
      <button type="submit" :class="button">submit</button>
    </form>
    <CropperModal v-if="isOpen" :is-open="isOpen" :img-file="imgFile" @cropped="onCrop" @opened="onOpened" />
    
  </div>
</template>
<script setup lang="ts">
import { iMember, iUpload } from "~~/helpers/interfaces"
import { Ref } from "vue";
import CropperModal from "~~/components/CropperModal.vue";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'

const { input, button, subline, mainline_small, subline_small } = useUi()
const formRef = ref()
const selected = ref<iMember>({})

const isOpen = ref(false)
const imgFile: Ref<iUpload> = ref({
  file: "",
  name: "",
  path: "",
  type: ""
})

const handleGender = (value: string) => {
  console.log("from update page, gender is", value)
  selected.value.gender = value
}

const handleMaritalStatus = (value: string) => {
  selected.value.maritalStatus = value
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
    const { data } = await useFetch(constants.imageUploadApiUrl, fetchOptions)
    console.log("data from server", data.value)
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
      path: id(memberName(selected.value), '-'),
      type: fileObj.type
    }
  }
}

const handleSubmit = (evt: Event) => {
  const formData = new FormData(formRef.value)
  const entries = Object.fromEntries(formData.entries())
  selected.value = { ...selected.value, ...entries }
  console.log("form submission says", selected.value)
}

</script>