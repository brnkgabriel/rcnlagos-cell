<template>
  <div class="w-full">
    <div class="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>You're welcome, can we meet you?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Biodata
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>What do you do?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Occupation
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" class="mt-2" v-slot="{ open }">
        <DisclosureButton
          class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-rcnblue-500 hover:bg-rcnblue-200 focus:outline-none focus-visible:ring focus-visible:ring-rcnblue-100 focus-visible:ring-opacity-75">
          <span>Are you married?</span>
          <ChevronUpIcon :class="open ? 'rotate-180 transform' : ''" class="h-5 w-5 text-rcnblue-500" />
        </DisclosureButton>
        <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">
          Marrital status
        </DisclosurePanel>
      </Disclosure>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
</script>
