export interface iUi {
  mainline: string;
  subline: string;
  grayText: string;
  pageTitle: string;
  logo: string;
  bottomNavLink: string;
  bottomNavLinkIcon: string;
  homeNavLink: string;
  center: string;
  input: string;
}

export interface iMembers {
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

export interface iMeetings {
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

export interface iCombined extends iMembers, iMeetings {
  created_at?: Date;
  id?: string;
}