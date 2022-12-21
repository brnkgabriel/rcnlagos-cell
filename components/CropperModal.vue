<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Crop your image
              </DialogTitle>
              <div class="mt-2">
                <VuePictureCropper
                :options="pcOptions"
                :box-style="pcBoxStyle"
                :img="props.imgFile.file"
                @ready="ready"
                />
              </div>

              <div class="mt-4">
                <button type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="getResult">
                  Crop image!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <div></div>
</template>
  
<script setup lang="ts">
import VuePictureCropper, { cropper } from "vue-picture-cropper"
import { iUpload } from "~~/helpers/interfaces"
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue' 

const props = defineProps<{
  isOpen: boolean
  imgFile: iUpload
}>()
const emit = defineEmits<{
  (e: 'cropped', image: iUpload): void
  (e: 'opened', flag: boolean): void
}>()

const isOpen = ref(props.isOpen)

const pcOptions = {
  viewMode: 1,
  dragMode: "crop",
  aspectRatio: 1 / 1
}
const pcBoxStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "#f8f8f8",
  margin: "auto"
}
const ready = () => console.log("picture cropper is ready")

const getResult = async () => {
  if (!cropper) return
  const toUpload: iUpload = {
    file: cropper.getDataURL(),
    name: props.imgFile.name,
    type: props.imgFile.type,
    path: props.imgFile.path
  }
  emit("cropped", toUpload)
  emit("opened", false)
  isOpen.value = false
}

const closeModal = async () => {
  isOpen.value = false
  emit("opened", false)
}

</script>
  