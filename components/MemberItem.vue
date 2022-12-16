<template>
  <div
    aria-label="membersItem"
    :data-name="memberName(props.item)"
    :class="memberItem">
    <img :src="props.item.imageUrl" :class="memberItemAvatar" :alt="props.item.firstName"/>
    <div aria-label="details" :class="memberItemDetails">
      <div aria-label="name" :class="mainline + ' ' + memberItemName">{{name}}</div>
      <div aria-label="subline" :class="memberItemSubline + ' ' + subline">
        <Icon type="occupation" :class="memberItemOccupationIcon" :active="false" />
        <div :class="memberItemOccupaion">{{props.item.occupation}}</div>
      </div>
    </div>
    <div aria-label="birthday" :class="memberItemBirthday">

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
  memberItemBirthday
} = useUi()

const props = defineProps<{
  item: iMember
}>()
</script>
<style lang="">
    
</style>