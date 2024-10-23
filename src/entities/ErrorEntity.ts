export enum ErrorEntity {
  CREDENTIALS_NOT_FOUND = "credentials/not-found",
  GOOGLE_UNSUFFICIENT_RIGHTS = "google/unsufficient-rights",
  GOOGLE_AUTH_CREDENTIALS_EXPIRED = "google/auth/credentials/expired",
  GOOGLE_UNKNOWN_ERROR = "google/unknown-error",
  GOOGLE_AUTH_SCOPE_NOT_FOUND = "google/auth/scope-not-found",
  GOOGLE_AUTH_REFRESH_TOKEN_ERROR = "google/auth/refresh-token-error",
  WEBSITE_NOT_FOUND = "website/not-found",
  UNKNOWN_ERROR = "global/unknown-error",
  USER_NOT_FOUND = "user/not-found",
  USER_NOT_AUTHENTICATED = "user/not-authenticated",
}
