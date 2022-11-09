/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterFindManyTaxesInput, SortFindManyTaxesInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryTaxFindMany
// ====================================================

export interface QueryTaxFindMany_taxFindMany {
  __typename: "Taxes";
  _id: any;
  label: string;
  percentage: number;
}

export interface QueryTaxFindMany {
  taxFindMany: QueryTaxFindMany_taxFindMany[];
}

export interface QueryTaxFindManyVariables {
  filter?: FilterFindManyTaxesInput | null;
  skip?: number | null;
  limit?: number | null;
  sort?: SortFindManyTaxesInput | null;
}
