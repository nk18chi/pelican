import { gql } from '@apollo/client';

export const GET_PRODUCT_FIND_MANY = gql`
  query QueryProductFindMany(
    $filter: FilterFindManyProductsInput
    $skip: Int
    $limit: Int = 100
    $sort: SortFindManyProductsInput
  ) {
    productFindMany(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
      _id
      name
      isNewItem
      imageURL
      name
      price
      rating
      numReviews
    }
  }
`;
