export declare enum IndexationType {
    NOT_INDEXED = "not-indexed",
    INDEXED = "indexed",
    NOT_PROCESSED = "not-processed"
}
export declare class PageEntity {
    url: string;
    indexation_state: IndexationType;
    updated_at: Date;
    fk_website_id: string;
}
