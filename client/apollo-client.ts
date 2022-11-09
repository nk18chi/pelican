import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { MockLink, MockedResponse } from '@apollo/client/testing';
import { GET_PRODUCT_FIND_MANY } from './gql/product';
import productDummy from './cypress/fixtures/product.json';

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_PRODUCT_FIND_MANY,
    },
    result: {
      data: {
        productFindMany: productDummy,
      },
    },
  },
];

const client = new ApolloClient({
  link:
    process.env.APP_ENV === 'test'
      ? new MockLink(mocks)
      : createHttpLink({
          uri: process.env.API_URL,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          fetch: fetch as any,
        }),
  cache: new InMemoryCache(),
});

export default client;
