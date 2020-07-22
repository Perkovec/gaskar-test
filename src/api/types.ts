export interface User {
  username: string;
  avatar: string;
}

export interface Project {
  title: string,
  dateStart: Date | string,
  dateEnd: Date | string,
  administrator: string,
  lead: string,
  customer: string,
  category: string,
}
