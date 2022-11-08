import { QueryProductFindMany_productFindMany } from '@/generated/QueryProductFindMany';
import { QueryPlanFindMany_planFindMany } from '@/generated/QueryPlanFindMany';
import { QueryPlanOptionFindMany_planOptionFindMany } from '@/generated/QueryPlanOptionFindMany';

export { default as TopPage } from './Top.page';
export type TSelectedOrder = {
  phone?: QueryProductFindMany_productFindMany;
  plan?: QueryPlanFindMany_planFindMany;
  options?: QueryPlanOptionFindMany_planOptionFindMany[];
};
