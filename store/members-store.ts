import { defineStore } from "pinia"
import { reorder, search } from "../composables/util";
import { iCombined, iMember } from "../helpers/interfaces"
import { constants } from "../composables/constants"

export interface iMemberState {
  members: iMember[];
  selected: iMember;
  searched: iMember[];
  rendered: iMember[]
}

const state = (): iMemberState => ({
  members: [],
  selected: {},
  searched: [],
  rendered: []
})

const getters = {
  getById: (state: iMemberState) => (id: string) => {
    return state.members.filter(member => member.id === id)[0]
  },
  getOrderedMembers: (state: iMemberState) => reorder(state.members, constants.members)
}

export const useMemberStore = defineStore('memberStore', {
  state,
  getters,
  actions: {
    setMembers(members: iMember[]) {
      this.members = members
      this.setSearched("")
    },
    setSearched(term: string) {
      this.searched = search(term, this.getOrderedMembers?.reordered as iCombined[])
    },
    setRendered(members: iMember[]) {
      this.rendered = members
    },
    addToRender(members: iMember[]) {
      this.rendered.push(...members)
    },
    remove(id: string) {
      this.members = this.members.filter(member => member.id !== id)
    },
    update(id: string, updateMember: iMember) {
      this.members = this.members.map(member => member.id == id ? updateMember : member)
    },
    setSelected(member: iMember) {
      this.selected = member
    }
  }
})