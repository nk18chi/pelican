export const paymentIntentTypeDef = `

input createPaymentIntentInput {
  amount: Int!
}

extend type Mutation {
    createPaymentIntent(record: createPaymentIntentInput!): JSON
}
`;
