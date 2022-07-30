import { gql } from '@apollo/client';

export const GET_PRODUCT_BY_ID = (id: string) => gql`
  {
    productById(_id: "${id}") {
      _id
      name
      user {
        name
      }
    }
  }
`;

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
