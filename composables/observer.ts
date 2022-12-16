import { iCombined, iMember, iMemberState, iObserver } from "~~/helpers/interfaces"; 


export class InfiniteScroll {
  private observer!: IntersectionObserver
  private maxItems: number = 4

  constructor() {

  }

  start() {
    const root = el(`div[aria-label="${constants.membersList}"]`)
    const last = el('div.last')
    
    const options = { threshold: 0.5, root }

    this.observer = new IntersectionObserver(this.observation.bind(this), options)

    this.observer.observe(last)
  }

  observation(entries: IntersectionObserverEntry[]) {
    const entry = entries[0]
    if (!entry.isIntersecting) return
    this.loadMore()

    entry.target.classList.remove("last")
    this.observer.unobserve(entry.target)
  }

  reObserve() {
    const last = el("div.last")
    console.log("reobserving last", last)
    if (!last) this.observer.observe(last)
  }

  loadMore() {
    const { memberState } = useMemberState()
    const sIdx = memberState.value.rendered.length
    const eIdx = sIdx + this.maxItems
    const more = memberState.value.members.slice(sIdx, eIdx)
    console.log("to load more", more)
    memberState.value.rendered.push(...more)
  }

  end() {
    const last = el("div.last")
    console.log("unobserving last", last)
    last && this.observer.unobserve(last)
  }
}