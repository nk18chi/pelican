import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  link: createHttpLink({
    uri: process.env.API_URL,
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
