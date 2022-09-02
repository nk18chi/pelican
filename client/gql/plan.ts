import { gql } from '@apollo/client';

export const GET_PLAN_FIND_MANY = gql`
  query QueryPlanFindMany(
    $filter: FilterFindManyPlansInput
    $skip: Int
    $limit: Int = 100
    $sort: SortFindManyPlansInput
  ) {
    planFindMany(filter: $filter, skip: $skip, limit: $limit, sort: $sort) {
      _id
      title
      options {
        desc
      }
      price
    }
  }
`;
