export enum BuilderPlans {
  EXPIRED = 'expired',
  LIFETIME = 'lifetime',
  PAID = 'paid',
}

export interface BuilderPlanEntity {
  pfk_user_id: string;
  plan: BuilderPlans;
}
