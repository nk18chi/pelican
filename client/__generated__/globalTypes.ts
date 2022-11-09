/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum SortFindManyPlanOptionsInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export enum SortFindManyPlansInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export enum SortFindManyProductsInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export enum SortFindManyTaxesInput {
  _ID_ASC = "_ID_ASC",
  _ID_DESC = "_ID_DESC",
}

export interface FilterFindManyPlanOptionsInput {
  label?: string | null;
  price?: number | null;
  _id?: any | null;
  updatedAt?: any | null;
  createdAt?: any | null;
  _operators?: FilterFindManyPlanOptionsOperatorsInput | null;
  OR?: FilterFindManyPlanOptionsInput[] | null;
  AND?: FilterFindManyPlanOptionsInput[] | null;
}

/**
 * For performance reason this type contains only *indexed* fields.
 */
export interface FilterFindManyPlanOptionsOperatorsInput {
  _id?: FilterFindManyPlanOptions_idOperatorsInput | null;
}

export interface FilterFindManyPlanOptions_idOperatorsInput {
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  ne?: any | null;
  in?: (any | null)[] | null;
  nin?: (any | null)[] | null;
  exists?: boolean | null;
}

export interface FilterFindManyPlansInput {
  title?: string | null;
  options?: (FilterFindManyPlansOptionsInput | null)[] | null;
  price?: number | null;
  _id?: any | null;
  updatedAt?: any | null;
  createdAt?: any | null;
  _operators?: FilterFindManyPlansOperatorsInput | null;
  OR?: FilterFindManyPlansInput[] | null;
  AND?: FilterFindManyPlansInput[] | null;
}

/**
 * For performance reason this type contains only *indexed* fields.
 */
export interface FilterFindManyPlansOperatorsInput {
  _id?: FilterFindManyPlans_idOperatorsInput | null;
}

export interface FilterFindManyPlansOptionsInput {
  desc?: string | null;
  _id?: any | null;
}

export interface FilterFindManyPlans_idOperatorsInput {
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  ne?: any | null;
  in?: (any | null)[] | null;
  nin?: (any | null)[] | null;
  exists?: boolean | null;
}

export interface FilterFindManyProductsInput {
  name?: string | null;
  isNewItem?: boolean | null;
  imageURL?: string | null;
  price?: number | null;
  rating?: number | null;
  numReviews?: number | null;
  _id?: any | null;
  updatedAt?: any | null;
  createdAt?: any | null;
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
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  ne?: any | null;
  in?: (any | null)[] | null;
  nin?: (any | null)[] | null;
  exists?: boolean | null;
}

export interface FilterFindManyTaxesInput {
  label?: string | null;
  percentage?: number | null;
  _id?: any | null;
  updatedAt?: any | null;
  createdAt?: any | null;
  _operators?: FilterFindManyTaxesOperatorsInput | null;
  OR?: FilterFindManyTaxesInput[] | null;
  AND?: FilterFindManyTaxesInput[] | null;
}

/**
 * For performance reason this type contains only *indexed* fields.
 */
export interface FilterFindManyTaxesOperatorsInput {
  _id?: FilterFindManyTaxes_idOperatorsInput | null;
}

export interface FilterFindManyTaxes_idOperatorsInput {
  gt?: any | null;
  gte?: any | null;
  lt?: any | null;
  lte?: any | null;
  ne?: any | null;
  in?: (any | null)[] | null;
  nin?: (any | null)[] | null;
  exists?: boolean | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
