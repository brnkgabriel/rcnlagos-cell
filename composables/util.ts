import { iMember } from "~~/helpers/interfaces";

export const memberName = (member: iMember | null) => member?.lastName ? `${member.firstName} ${member.lastName}` : 'loading...'