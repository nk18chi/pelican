/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProductById
// ====================================================

export interface QueryProductById_productById_user {
  __typename: 'Users';
  name: string | null;
}

export interface QueryProductById_productById {
  __typename: 'Products';
  _id: string;
  name: string | null;
  user: QueryProductById_productById_user | null;
}

export interface QueryProductById {
  productById: QueryProductById_productById | null;
}

export interface QueryProductByIdVariables {
  id: string;
}
