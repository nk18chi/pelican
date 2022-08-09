/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SortFindManyProductsInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
}

export interface FilterFindManyProductsInput {
  name?: string | null;
  user?: string | null;
  _id?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
  _operators?: FilterFindManyProductsOperatorsInput | null;
  OR?: FilterFindManyProductsInput[] | null;
  AND?: FilterFindManyProductsInput[] | null;
}

/**
 * For performance reason this type contains only *indexed* fields.
 */
export interface FilterFindManyProductsOperatorsInput {
  _id?: FilterFindManyProducts_idOperatorsInput | null;
}

export interface FilterFindManyProducts_idOperatorsInput {
  gt?: string | null;
  gte?: string | null;
  lt?: string | null;
  lte?: string | null;
  ne?: string | null;
  in?: (string | null)[] | null;
  nin?: (string | null)[] | null;
  exists?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
