import { gql } from '@apollo/client';

export const GET_PLAN_OPTION_FIND_MANY = gql`
  query QueryPlanOptionFindMany(
    $filter: FilterFindManyPlanOptionsInput
    $skip: Int
    $limit: Int = 100
    $sort: SortFindManyPlanOptionsInput
  ) {
    planOptionFindMany(
      filter: $filter
      skip: $skip
      limit: $limit
      sort: $sort
    ) {
      _id
      label
      price
    }
  }
`;
