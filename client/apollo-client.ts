import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000/graphql',
    // fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
