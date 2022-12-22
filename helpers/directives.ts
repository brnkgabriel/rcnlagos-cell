import { el } from "~~/composables/ui"
import { useMemberStore } from "~~/store/members-store";

interface iData {
  maxItem: number;
  observer: IntersectionObserver | null
  observation: (entries: IntersectionObserverEntry[]) => void
}

const data: iData = {
  maxItem: 10,
  observer: null,
  observation: (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0] 
    if (!entry.isIntersecting) return
    loadMore() 
    entry.target.classList.remove("last")
    data.observer?.unobserve(entry.target)
  }
}

const loadMore = () => {
  const store = useMemberStore()
  const sIdx = store.rendered.length
  const eIdx = sIdx + data.maxItem
  const more = store.searched.slice(sIdx, eIdx)
  store.addToRender(more)
}

export const vInfiniteScroll = {
  updated: (ele: Element) => {
    const options = { threshold: 0.1, root: ele }
    data.observer = new IntersectionObserver(data.observation, options)
    const last = el('.last', ele as HTMLElement)  
    if (last) data.observer.observe(last as Element)
  },
  mounted: (ele: Element) => {
    const options = { threshold: 0.1, root: ele }
    data.observer = new IntersectionObserver(data.observation, options)
    const last = el('.last', ele as HTMLElement)  
    if (last) data.observer.observe(last as Element)
    console.log("mounted")
  },
  unmounted: (ele: Element) => {
    const last = el('.last', ele as HTMLElement)
    if (last) data.observer?.unobserve(last as Element)
    data.observer = null
  }
}

const loaded = (ele: Element) => {
  const img = ele as HTMLImageElement
  img.onload = () => img.classList.add("loaded")
}

export const vLoaded = {
  mounted: (ele: Element) => loaded(ele),
  updated: (ele: Element) => loaded(ele)
}