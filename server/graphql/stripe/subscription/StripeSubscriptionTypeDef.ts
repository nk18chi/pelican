export const subscriptionTypeDef = `

input SubscriptionItemInput {
  price: String
}

input createSubscriptionInput {
  customer: String!
  items: [SubscriptionItemInput!]!
}

input cancelSubscriptionInput {
  subscriptionId: String!
}

extend type Mutation {
    createSubscription(record: createSubscriptionInput!): JSON
    cancelSubscription(record: cancelSubscriptionInput!): JSON
}
`;
