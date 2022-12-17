import { defineStore } from "pinia"
import { reorder, search } from "../composables/util";
import { iMember } from "../helpers/interfaces"
import { constants } from "../composables/constants"

export interface iMemberState {
  members: iMember[];
  selected: iMember;
  searched: iMember[];
}

const state = (): iMemberState => ({
  members: [],
  selected: {},
  searched: [],
})

const getters = {
  getById: (state: iMemberState) => (id: string) => {
    return state.members.filter(member => member.id === id)[0]
  },
  getOrderedMembers: (state: iMemberState) => reorder(state.members, constants.members),
  getSelected: (state: iMemberState) => state.selected,
  getSearched: (state: iMemberState) => state.searched,
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
      this.searched = search(term, [...this.members])
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