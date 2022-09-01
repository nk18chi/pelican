import { ApolloServer } from 'apollo-server-express';
import schema from './graphql/schema';

export const testApolloServer = new ApolloServer({
  schema,
});
