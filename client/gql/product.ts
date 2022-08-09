import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = gql`
  query QueryProductById($id: MongoID!) {
    productById(_id: $id) {
      _id
      name
      user {
        name
      }
    }
  }
`;

export const GET_PRODUCT_MANY = gql`
  query QueryProductMany(
    $filter: FilterFindManyProductsInput
    $skip: Int
    $limit: Int = 100
    $sort: SortFindManyProductsInput
  ) {
    productMany(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
      _id
      name
      user {
        name
      }
    }
  }
`;
