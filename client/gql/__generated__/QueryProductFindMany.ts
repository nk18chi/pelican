/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { FilterFindManyProductsInput, SortFindManyProductsInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: QueryProductFindMany
// ====================================================

export interface QueryProductFindMany_productFindMany {
  __typename: "Products";
  _id: any;
  name: string;
  isNewItem: boolean | null;
  imageURL: string;
  price: number;
  rating: number | null;
  numReviews: number | null;
}

export interface QueryProductFindMany {
  productFindMany: QueryProductFindMany_productFindMany[];
}

export interface QueryProductFindManyVariables {
  filter?: FilterFindManyProductsInput | null;
  skip?: number | null;
  limit?: number | null;
  sort?: SortFindManyProductsInput | null;
}
