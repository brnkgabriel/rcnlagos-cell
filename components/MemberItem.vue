<template>
  <div aria-label="membersItem" :class="memberItem" v-lazy-load>
    <img
      aria-label="skeleton screen"
      class="w-full"
      v-show="!loaded && imageExists()"
      src="/icons/avatar.svg"
      :alt="props.item.firstName"/>
    <img
      aria-label="actual image"
      class="w-full"
      loading="lazy"
      @load="handleLoad"
      :src="imgSrc(props.item.imageUrl as string)"
      :alt="props.item.firstName"/>
    <div aria-label="details" class="p-2">
      <div aria-label="name" :class="mainline_small + ' ' + texttrim">{{name}}</div>
      <div aria-label="occupation" :class="subline_small" class="flex gap-x-1">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="false" />
        <div :class="texttrim">{{props.item.occupation}}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces"
import { vLazyLoad } from "~~/helpers/directives"

const name = computed(() => `${props.item.firstName} ${props.item.lastName}`)

const loaded = ref(false)

const imageExists = () => imgSrc(props.item.imageUrl as string) !== '/icons/avatar.svg'

const {
  mainline_small,
  subline_small,
  memberItem,
  memberItemOccupationIcon,
  texttrim
} = useUi()

const handleLoad = () => {
  loaded.value = true
}

const props = defineProps<{
  item: iMember
}>()
</script>
<style lang="">
    
</style>