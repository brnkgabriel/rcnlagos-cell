import { iMember } from "~~/helpers/interfaces";

export const memberName = (member: iMember | null) => member?.lastName ? `${member.firstName} ${member.lastName}` : 'loading...'

export const editMemberUrl = (member: iMember | null) => {
  if (!member) return "/member"
  const firstName = member.firstName?.split(' ').join('-').toLowerCase()
  const lastName = member.lastName?.split(' ').join('-').toLowerCase()
  return `/${firstName}-${lastName}`
}

export const typeMember = (data: any) => data as iMember[]