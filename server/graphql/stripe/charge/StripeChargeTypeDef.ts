export const chargeTypeDef = `

input createChargeInput {
  amount: Float!
  source: String
  customer: String
  description: String
}

extend type Mutation {
    createCharge(record: createChargeInput!): JSON
}
`;
