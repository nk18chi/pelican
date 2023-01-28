import { gql } from '@apollo/client';

export const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($record: createPaymentIntentInput!) {
    createPaymentIntent(record: $record)
  }
`;

export const CREATE_CHARGE = gql`
  mutation CreateCharge($record: createChargeInput!) {
    createCharge(record: $record)
  }
`;

export const CREATE_ONE_USER = gql`
  mutation UserCreateOne($record: CreateOneUsersInput!) {
    userCreateOne(record: $record) {
      record {
        _id
        firstName
        lastName
        email
        phone
        stripe
        createdAt
        updatedAt
      }
    }
  }
`;
