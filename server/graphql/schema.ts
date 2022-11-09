import { schemaComposer } from 'graphql-compose';

import { PlanTC } from './plan/PlanResolvers';
import { PlanOptionTC } from './planOption/PlanOptionResolvers';
import { ProductTC } from './product/ProductResolvers';
import { TaxTC } from './tax/TaxResolvers';

const resolvers: any = {};
const apiResolvers: any = [];
apiResolvers.forEach((apiResolver: any) => {
  const keys = Object.keys(apiResolver);
  keys.forEach((key) => {
    if (resolvers[key]) {
      resolvers[key] = {
        ...resolvers[key],
        ...apiResolver[key],
      };
    } else {
      resolvers[key] = apiResolver[key];
    }
  });
});

const initialTypeDef = `
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const typeDefs = [initialTypeDef];
let typeDef = '';
for (const def of typeDefs) {
  typeDef += def;
}

schemaComposer.addTypeDefs(typeDef);
schemaComposer.addResolveMethods(resolvers);

schemaComposer.Query.addFields({
  planFindMany: PlanTC.getResolver('findMany'),
  planOptionFindMany: PlanOptionTC.getResolver('findMany'),
  productFindMany: ProductTC.getResolver('findMany'),
  taxFindMany: TaxTC.getResolver('findMany'),
});

schemaComposer.Mutation.addFields({});

const schema = schemaComposer.buildSchema();
export default schema;
