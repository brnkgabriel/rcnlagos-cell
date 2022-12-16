import { Ref } from "vue"

export interface iUi {
  mainline?: string;
  subline?: string;
  grayText?: string;
  breadcrumb?: string;
  logo?: string;
  bottomNavLink?: string;
  bottomNavLinkIcon?: string;
  homeNavLink?: string;
  center?: string;
  input?: string;
}

export interface iMember {
  created_at?: Date;
  id?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  email?: string;
  gender?: string;
  imageUrl?: string;
  birthday?: string;
  maritalStatus?: string;
  weddingAnniversary?: string;
  homeAddress?: string;
  occupation?: string;
  workAddress?: string;
  role?: string;
}

export interface iMeeting {
  created_at?: Date;
  id?: string;
  date?: string;
  desc?: string;
  ministers?: string;
  name?: string;
  duration?: string;
  type?: string;
  imageUrl?: string;
  mediaUrl?: string;
  mediaType?: string;
  address?: string;
  map?: string;
}

export interface iCombined extends iMember, iMeeting { }

export interface iObserver {
  pLabel: string; // parent label
  cLabel: string; // child label
  direction: string; // direction of scroll 
}

export interface iMemberState {
  members: iMember[];
  rendered: iMember[];
  selected: iMember;
}