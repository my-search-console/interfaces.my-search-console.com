export type IndexationSettingsEntity = {
  pfk_website_id: string;
  indexation_auto_activated: boolean;
  sources: Array<"google" | "yandex" | "naver" | "bing">
}
