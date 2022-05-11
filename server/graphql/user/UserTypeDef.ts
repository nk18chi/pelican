export const userTypeDef = `
    extend type Query {
        user(name: String!): String
    }
    extend type Mutation {
        loginUser(email: String!, password: String!): Boolean
    }
`;
