<template>
    <div ref="listRef">
        <div v-for="(a, i) in arr" :key="a" :ref="(el: any) => { divs[i] = el }">
          {{a}}
        </div>
    </div>
</template>
<script setup lang="ts">import { Ref } from 'vue';

const page = ref(1)
// @ts-ignore
const list = Array(30).fill().map((_, i) => i)
const arr = ref(list)
const observer = ref()
const listRef = ref()
const divs:Ref<any[]> = ref([])

const addObserver = async () => {
  await nextTick()
  const options = {
    root: listRef.value,
    rootMargin: "20px",
    threshold: 1
  }
  const callback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      arr.value = [
        ...arr.value,
        ...Array(30).fill().map((_, i) => i + 30 * (page.value - 1))
      ]
      page.value++
    }

  }
  observer.value = new IntersectionObserver(callback, options)
  const lastElement = divs.value[divs.value.length - 1]
  console.log("last element is", lastElement)
  observer.value.observe(lastElement)
}

onMounted(() => {
  addObserver()

  console.log("divs are", divs.value)
})
</script>
<style lang="">
    
</style>