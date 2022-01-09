export enum IndexationType {
  NOT_INDEXED = 'not-indexed',
  INDEXED = 'indexed',
  NOT_PROCESSED = 'not-processed',
}

export class PageEntity {
  url: string;
  indexation_state: IndexationType;
  updated_at: Date;
  fk_website_id: string;
}
