import { gql } from '@apollo/client';

export const GET_PRODUCT_MANY = gql`
  {
    productMany {
      _id
      name
      user {
        name
      }
    }
  }
`;
