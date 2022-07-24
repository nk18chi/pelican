import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://35.75.1.39:4000/graphql',
  }),
  cache: new InMemoryCache(),
});

export default client;
