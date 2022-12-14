<template>
  <div class="flex flex-col items-start justify-between h-full">
    <div :class="pageTitle">{{name}}</div>
    <div aria-label="preview" class="shadow-custom rounded-lg bg-white w-full h-[150px] overflow-hidden flex justify-center items-center">
      <img class="h-[150px]" :src="selected?.imageUrl" alt=""/>
      <div aria-label="details" class="w-details p-2 flex flex-col justify-between h-full items-start">
        <div aria-label="text">
          <div :class="mainline">{{memberName(selected)}}</div>
          <div :class="subline">{{selected?.occupation}}</div>
        </div>
        <div aria-label="icons">
          <a :href="constants.whatsappIcon(selected)">
            <img src="/icons/whatsapp.svg" class="w-[32px]" alt="whatsapp icon"/>
          </a>
        </div>
      </div>
    </div>
    <div aria-label="list" class="h-listheight w-full">
      <div aria-label="number" class="h-[16px] mt-[8px] mb-[4px] capitalize" :class="subline">{{members?.length}} {{name}}</div>
      <div aria-label="list" class="w-full h-cardlistheight overflow-auto">
        <MemberItem
          @click="setSelected(member)"
          v-for="(member, idx) in members"
          :item="member"
          :key="idx"/>
      </div>
    </div>
    <div aria-label="search" class="h-[40px] w-full">
      <input type="text" id="search" autocomplete="false" :class="input" :placeholder="placeholder">
    </div>
  </div>
</template>
<script setup lang="ts">
import { Ref } from "vue";
import { iMember } from "~~/helpers/interfaces" 

const { pageTitle, input, subline, mainline } = useUi()
const { name } = useRoute()
// @ts-ignore
const placeholder = computed(() => "Search for " + name + '...')

const orderBy = ref("created_at")

const typeData = (data: any) => data as iMember[]
const { data, pending, error, refresh } = await useLazyFetch(() => constants.membersApiUrl, { params: { orderBy: orderBy.value } })

const members = ref(typeData(data.value))
const selected:Ref<iMember | null> = ref(data.value ? typeData(data.value)[0] : null)
const errorMessage = ref(error.value)

const setSelected = (member: iMember) => selected.value = member

watch([data, error], () => {
  members.value = typeData(data.value)
  selected.value = typeData(data.value)[0]

  console.log("selected is", selected.value)
  errorMessage.value = error.value
})

// onMounted(async () => {
//   await refresh()
// })


definePageMeta({
  layout: "catalog",
});
</script>
<style lang="">
    
</style>