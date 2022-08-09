/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  FilterFindManyProductsInput,
  SortFindManyProductsInput,
} from './../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: QueryProductMany
// ====================================================

export interface QueryProductMany_productMany_user {
  __typename: 'Users';
  name: string | null;
}

export interface QueryProductMany_productMany {
  __typename: 'Products';
  _id: string;
  name: string | null;
  user: QueryProductMany_productMany_user | null;
}

export interface QueryProductMany {
  productMany: QueryProductMany_productMany[];
}

export interface QueryProductManyVariables {
  filter?: FilterFindManyProductsInput | null;
  skip?: number | null;
  limit?: number | null;
  sort?: SortFindManyProductsInput | null;
}
