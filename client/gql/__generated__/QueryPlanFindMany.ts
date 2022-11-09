/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterFindManyPlansInput, SortFindManyPlansInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryPlanFindMany
// ====================================================

export interface QueryPlanFindMany_planFindMany_options {
  __typename: "PlansOptions";
  desc: string;
}

export interface QueryPlanFindMany_planFindMany {
  __typename: "Plans";
  _id: any;
  title: string;
  options: (QueryPlanFindMany_planFindMany_options | null)[] | null;
  price: number;
}

export interface QueryPlanFindMany {
  planFindMany: QueryPlanFindMany_planFindMany[];
}

export interface QueryPlanFindManyVariables {
  filter?: FilterFindManyPlansInput | null;
  skip?: number | null;
  limit?: number | null;
  sort?: SortFindManyPlansInput | null;
}
