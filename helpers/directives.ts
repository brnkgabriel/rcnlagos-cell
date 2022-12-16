import { el } from "~~/composables/ui"

interface iData {
  maxItem: number;
  last: Element | null;
  observer: IntersectionObserver | null
  observation: (entries: IntersectionObserverEntry[]) => void
}


const loadMore = () => {
  const { memberState } = useMemberState()
  console.log("loading more from directive, memberState is", memberState.value)
}

const data: iData = {
  last: null,
  maxItem: 4,
  observer: null,
  observation: (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    loadMore()
    // entry.target.classList.remove("last")
    // data.observer?.unobserve(entry.target)
  }
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
    const options = { threshold: 0.5, ele }
    data.observer = new IntersectionObserver(data.observation, options)
    data.observer.observe(data.last as Element)
  },
  updated: (ele: Element) => {
    vInfiniteScroll.init(ele, "updated")
  },
  mounted: (ele: Element) => {
    vInfiniteScroll.init(ele, "mounted") 
  }
}
