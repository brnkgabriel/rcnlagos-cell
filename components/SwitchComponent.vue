<template lang="">
  <div data-name="form-group gender" class="flex gap-2 justify-center items-center capitalize h-[44px]">
    <span>{{props.left}}</span>
    <Switch v-model="enabled" :name="props.name"
      :class="enabled ? 'bg-pink-400' : 'bg-blue-400'"
      class="relative inline-flex h-6 w-11 items-center rounded-full">
      <span class="sr-only">Enable notifications</span>
      <span :class="enabled ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
    </Switch>
    <span>{{props.right}}</span>
  </div>
</template>
<script setup lang="ts">
import { Switch } from "@headlessui/vue";

const enabled = ref(false)

watch(enabled, () => {
  const gender = enabled.value ? props.right : props.left
  props.value(gender)
}) 

const props = defineProps<{
  left: string;
  right: string;
  name: string;
  value: (selected: string) => void;
}>()
</script>
<style lang="">
    
</style>