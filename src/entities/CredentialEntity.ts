export declare class CredentialEntity {
  pfk_user_id: string;
  google_access_token: string;
  google_refresh_token: string;
  google_expiration_date: Date;
}

export type GoogleCredentialEntity = Pick<
  CredentialEntity,
  "google_access_token" | "google_expiration_date" | "google_refresh_token"
>;
