import { ApolloServer } from 'apollo-server-express';
import schema from '../graphql/schema';

export const createApolloServer = (props: any): ApolloServer => {
  return new ApolloServer({
    ...props,
    schema,
  });
};
