import type { GetStaticProps } from 'next';
import {
  QueryProductFindMany,
  QueryProductFindManyVariables,
  QueryProductFindMany_productFindMany,
} from '@/generated/QueryProductFindMany';
import {
  QueryTaxFindMany,
  QueryTaxFindManyVariables,
  QueryTaxFindMany_taxFindMany,
} from '@/generated/QueryTaxFindMany';
import {
  QueryPlanFindMany,
  QueryPlanFindManyVariables,
  QueryPlanFindMany_planFindMany,
} from '@/generated/QueryPlanFindMany';
import {
  QueryPlanOptionFindMany,
  QueryPlanOptionFindManyVariables,
  QueryPlanOptionFindMany_planOptionFindMany,
} from '@/generated/QueryPlanOptionFindMany';
import { GET_TAX_FIND_MANY } from 'gql/tax';
import { GET_PLAN_FIND_MANY } from 'gql/plan';
import { GET_PLAN_OPTION_FIND_MANY } from 'gql/planOption';
import client from '../apollo-client';
import { GET_PRODUCT_FIND_MANY } from '../gql/product';
import { TopPage } from '@/components/page/Top/index';

export interface TopPageProps {
  products: QueryProductFindMany_productFindMany[];
  taxes: QueryTaxFindMany_taxFindMany[];
  plans: QueryPlanFindMany_planFindMany[];
  planOptions: QueryPlanOptionFindMany_planOptionFindMany[];
}

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { productFindMany },
  } = await client.query<QueryProductFindMany, QueryProductFindManyVariables>({
    query: GET_PRODUCT_FIND_MANY,
  });
  const {
    data: { taxFindMany },
  } = await client.query<QueryTaxFindMany, QueryTaxFindManyVariables>({
    query: GET_TAX_FIND_MANY,
  });
  const {
    data: { planFindMany },
  } = await client.query<QueryPlanFindMany, QueryPlanFindManyVariables>({
    query: GET_PLAN_FIND_MANY,
  });
  const {
    data: { planOptionFindMany },
  } = await client.query<
    QueryPlanOptionFindMany,
    QueryPlanOptionFindManyVariables
  >({
    query: GET_PLAN_OPTION_FIND_MANY,
  });
  return {
    props: {
      products: productFindMany,
      taxes: taxFindMany,
      plans: planFindMany,
      planOptions: planOptionFindMany,
    },
  };
};

export default TopPage;
