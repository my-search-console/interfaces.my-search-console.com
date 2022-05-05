export enum BuilderWebsiteTheme {
  PURITY = "purity",
}

export interface BuilderWebsiteEntity {
  id: string;
  domain: string;
  fk_user_id: string | null;
  theme: BuilderWebsiteTheme;
}
