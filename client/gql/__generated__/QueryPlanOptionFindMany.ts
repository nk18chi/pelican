/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterFindManyPlanOptionsInput, SortFindManyPlanOptionsInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryPlanOptionFindMany
// ====================================================

export interface QueryPlanOptionFindMany_planOptionFindMany {
  __typename: "PlanOptions";
  _id: any;
  label: string;
  price: number;
}

export interface QueryPlanOptionFindMany {
  planOptionFindMany: QueryPlanOptionFindMany_planOptionFindMany[];
}

export interface QueryPlanOptionFindManyVariables {
  filter?: FilterFindManyPlanOptionsInput | null;
  skip?: number | null;
  limit?: number | null;
  sort?: SortFindManyPlanOptionsInput | null;
}
