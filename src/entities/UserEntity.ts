import { UserToWebsiteRoles } from "./UserToWebsiteEntity";

export class UserEntity {
  id: string;
  email: string;
  language: string;
  created_at: Date;
}

export type UserWithRoleEntity = UserEntity & {
  role: UserToWebsiteRoles
}
