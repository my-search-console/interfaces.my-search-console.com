export enum UserToWebsiteRoles {
  admin = "admin",
  write = "write",
  read = "read",
}

export class UserToWebsiteEntity {
  id: string;
  fk_website_id: string;
  fk_user_id: string;
  role: UserToWebsiteRoles
}
