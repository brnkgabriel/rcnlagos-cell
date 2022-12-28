
<template>
  <div aria-label="membersItem" :class="memberItem">
    <div :style="imageStyle">
      <img
        aria-label="actual image"
        class="w-full object-cover min-h-[116px] opacity-0" loading="lazy"
        v-loaded
        :src="imgSrc(props.item.imageUrl as string)"
        :alt="props.item.firstName" />
    </div>
    <!-- <img v-if="!loaded" aria-label="actual image" class="w-full" loading="lazy" src="/icons/image-placeholder.svg" alt="skeleton" /> -->
    <div aria-label="details" class="p-2">
      <div aria-label="name" :class="mainline_small + ' ' + texttrim">{{ props.item.prefix + ' ' +  props.item.firstName }}</div>
      <div aria-label="occupation" :class="subline_small" class="flex gap-x-1">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="true" />
        <div :class="texttrim">{{ props.item.occupation }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces"
import { vLoaded } from "~~/helpers/directives"
const imageStyle = ref(`background:url(/icons/image-placeholder.svg) no-repeat;background-position:center;background-size:cover`)

const {
  mainline_small,
  subline_small,
  memberItem,
  memberItemOccupationIcon,
  texttrim
} = useUi()

const props = defineProps<{
  item: iMember
}>()
</script>
<style lang="">
    
</style>