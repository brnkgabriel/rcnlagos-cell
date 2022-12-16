import { el } from "~~/composables/ui"

interface iData {
  maxItem: number;
  last: Element | null;
  observer: IntersectionObserver | null
  observation: (entries: IntersectionObserverEntry[]) => void
}

const data: iData = {
  last: null,
  maxItem: 4,
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
  const { memberState } = useMemberState()
  const sIdx = memberState.value.rendered.length
  const eIdx = sIdx + data.maxItem
  const more = memberState.value.members.slice(sIdx, eIdx)
  memberState.value.rendered.push(...more)
  console.log("loading more from directive, memberState is", memberState.value)
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
    const options = { threshold: 0.5, root: ele, rootMargin: "20px 0px 20px 0px" }
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
