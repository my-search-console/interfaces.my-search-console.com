export enum BuilderWebsiteTheme {
  PURITY = "purity",
  MUR = "mur",
}

export const BuilderProductsToTheme: { [x: string]: BuilderWebsiteTheme } = {
  ["770119"]: BuilderWebsiteTheme.PURITY,
  ["770561"]: BuilderWebsiteTheme.MUR,
};

export interface BuilderWebsiteEntity {
  id: string;
  domain: string;
  fk_user_id: string | null;
  theme: BuilderWebsiteTheme;
}
