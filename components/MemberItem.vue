<template>
  <!-- <div
    aria-label="membersItem"
    :data-name="memberName(props.item)"
    :class="memberItem">
    <img :src="imgSrc(props.item.imageUrl as string)" :class="memberItemAvatar" :alt="props.item.firstName"/>
    <div aria-label="details" :class="memberItemDetails">
      <div aria-label="name" :class="mainline + ' ' + memberItemName">{{name}}</div>
      <div aria-label="subline" :class="memberItemSubline + ' ' + subline">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="false" />
        <div :class="memberItemOccupaion">{{props.item.occupation}}</div>
      </div>
    </div>
    <div aria-label="birthday" :class="memberItemBirthday">

    </div>
  </div> -->
  <div aria-label="membersItem" class="flex flex-col basis-[100px] flex-grow flex-shrink w-1/2 sm:w-1/4 overflow-hidden rounded-md shadow-custom bg-white">
    <img
      class="w-full"
      :src="imgSrc(props.item.imageUrl as string)"
      :alt="props.item.firstName"/>
    <div aria-label="details" class="p-2 pb-4">
      <div aria-label="name" :class="mainline + ' ' + texttrim">{{name}}</div>
      <div aria-label="occupation" :class="subline" class="flex gap-x-1">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="false" />
        <div :class="texttrim">{{props.item.occupation}}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { iMember } from "~~/helpers/interfaces"

const name = computed(() => `${props.item.firstName} ${props.item.lastName}`)

const {
  subline,
  mainline,
  memberItem,
  memberItemAvatar,
  memberItemDetails,
  memberItemName,
  memberItemSubline,
  memberItemOccupationIcon,
  memberItemOccupaion,
  memberItemBirthday,
  texttrim
} = useUi()

const props = defineProps<{
  item: iMember
}>()
</script>
<style lang="">
    
</style>