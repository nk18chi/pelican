import fetch from 'node-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { MockLink, MockedResponse } from '@apollo/client/testing';
import { GET_PRODUCT_FIND_MANY } from './gql/product';
import { GET_TAX_FIND_MANY } from 'gql/tax';
import { GET_PLAN_FIND_MANY } from 'gql/plan';
import { GET_PLAN_OPTION_FIND_MANY } from 'gql/planOption';
import productDummy from './cypress/fixtures/product.json';
import taxDummy from './cypress/fixtures/tax.json';
import planDummy from './cypress/fixtures/plan.json';
import planOptionDummy from './cypress/fixtures/planOption.json';

const mocks: MockedResponse[] = [
  {
    request: {
      query: GET_PRODUCT_FIND_MANY,
      variables: { limit: 100 },
    },
    result: {
      data: {
        productFindMany: productDummy,
      },
    },
  },
  {
    request: {
      query: GET_TAX_FIND_MANY,
      variables: { limit: 100 },
    },
    result: {
      data: {
        taxFindMany: taxDummy,
      },
    },
  },
  {
    request: {
      query: GET_PLAN_FIND_MANY,
      variables: { limit: 100 },
    },
    result: {
      data: {
        planFindMany: planDummy,
      },
    },
  },
  {
    request: {
      query: GET_PLAN_OPTION_FIND_MANY,
      variables: { limit: 100 },
    },
    result: {
      data: {
        planOptionFindMany: planOptionDummy,
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
