import { gql } from '@apollo/client';

export const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($record: createPaymentIntentInput!) {
    createPaymentIntent(record: $record)
  }
`;
