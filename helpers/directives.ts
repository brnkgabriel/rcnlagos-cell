import { el } from "~~/composables/ui"
import { useMemberStore } from "~~/store/members-store";

interface iData {
  maxItem: number;
  last: Element | null;
  observer: IntersectionObserver | null
  observation: (entries: IntersectionObserverEntry[]) => void
}

const data: iData = {
  last: null,
  maxItem: 10,
  observer: null,
  observation: (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    loadMore()
    console.log("intersecting")
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
  data,
  init: (ele: Element, from: string) => {
    const last = el('.last', ele as HTMLElement) 
    if (!data.last && last) {
      data.last = last
      vInfiniteScroll.observe(ele, from)
    }
  },
  observe: (ele: Element, from: string) => {
    const options = { threshold: 0.5, root: ele }
    data.observer = new IntersectionObserver(data.observation, options)
    data.observer.observe(data.last as Element)
  },
  updated: (ele: Element) => {
    vInfiniteScroll.init(ele, "updated")
    const last = el('.last', ele as HTMLElement)
    data.last = last
    if (data.last) data.observer?.observe(data.last as Element)
  },
  mounted: (ele: Element) => {
    vInfiniteScroll.init(ele, "mounted") 
  },
  unmounted: (ele: Element) => {
    const last = el('.last', ele as HTMLElement)
    data.last = last
    if (data.last) data.observer?.unobserve(data.last as Element)
  }
}

export const vLazyLoad = {
  updated: (ele: Element) => {
    const actualImage = el(`img[aria-label="actual image"]`, ele as HTMLElement)
    const skeletonScreen = el(`img[aria-label="skeleton screen"]`, ele as HTMLElement)
    skeletonScreen.classList.remove('loaded')
    actualImage.classList.add('loaded')
  }
}