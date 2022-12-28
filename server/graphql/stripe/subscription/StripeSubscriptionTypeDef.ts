export const subscriptionTypeDef = `

input SubscriptionItemInput {
  price: String
}

input createSubscriptionInput {
  customer: String!
  items: [SubscriptionItemInput!]!
}

extend type Mutation {
    createSubscription(record: createSubscriptionInput!): JSON
}
`;
