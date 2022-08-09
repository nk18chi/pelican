import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { MockLink, MockedResponse } from '@apollo/client/testing';
import { GET_PRODUCT_BY_ID, GET_PRODUCT_MANY } from './gql/product';
import productDummy from './cypress/fixtures/product.json';

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_PRODUCT_BY_ID,
      variables: {
        id: '62d4b636d41f4441db37ef01',
      },
    },
    result: {
      data: {
        productById: productDummy[0],
      },
    },
  },
  {
    request: {
      query: GET_PRODUCT_MANY,
    },
    result: {
      data: {
        productMany: productDummy,
      },
    },
  },
];

console.log(process.env.APP_ENV);
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
