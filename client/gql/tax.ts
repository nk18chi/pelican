import { gql } from '@apollo/client';

export const GET_TAX_FIND_MANY = gql`
  query QueryTaxFindMany(
    $filter: FilterFindManyTaxesInput
    $skip: Int
    $limit: Int = 100
    $sort: SortFindManyTaxesInput
  ) {
    taxFindMany(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
      _id
      label
      percentage
    }
  }
`;
