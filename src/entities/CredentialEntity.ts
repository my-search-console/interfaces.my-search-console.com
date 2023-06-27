export declare class CredentialEntity {
  pfk_user_id: string;
  google_access_token: string;
  google_refresh_token: string;
  google_expiration_date: Date;
  bing_access_token: string | null;
  bing_refresh_token: string | null;
  bing_expiration_date: Date | null;
  yandex_access_token: string | null;
  yandex_refresh_token: string | null;
  yandex_expiration_date: Date | null;
  yandex_user_id: string | null;
}

export type GoogleCredentialEntity = Pick<CredentialEntity, "google_access_token" | "google_expiration_date" | "google_refresh_token">
export type BingCredentialEntity = Pick<CredentialEntity, "bing_access_token" | "bing_expiration_date" | "bing_refresh_token">
export type YandexCredentialEntity = Pick<CredentialEntity, "yandex_access_token" | "yandex_expiration_date" | "yandex_refresh_token" | "yandex_user_id">
