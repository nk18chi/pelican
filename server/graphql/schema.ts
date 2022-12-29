import { schemaComposer } from 'graphql-compose';

import { UserTC } from './user/UserResolvers';
import { PlanTC } from './plan/PlanResolvers';
import { PlanOptionTC } from './planOption/PlanOptionResolvers';
import { ProductTC } from './product/ProductResolvers';
import { TaxTC } from './tax/TaxResolvers';
import { SubscriptionTC } from './subscription/SubscriptionResolvers';
import { stripeResolvers, stripeTypeDef } from './stripe';

const resolvers: any = {};
const apiResolvers: any = [...stripeResolvers];
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

const typeDefs = [initialTypeDef, stripeTypeDef];
let typeDef = '';
for (const def of typeDefs) {
  typeDef += def;
}

schemaComposer.addTypeDefs(typeDef);
schemaComposer.addResolveMethods(resolvers);

schemaComposer.Query.addFields({
  userFindOne: UserTC.getResolver('findOne'),
  userFindMany: UserTC.getResolver('findMany'),
  userCreateOne: UserTC.getResolver('createOne'),
  userUpdateOne: UserTC.getResolver('updateOne'),
  planFindMany: PlanTC.getResolver('findMany'),
  planOptionFindMany: PlanOptionTC.getResolver('findMany'),
  productFindMany: ProductTC.getResolver('findMany'),
  taxFindMany: TaxTC.getResolver('findMany'),
  subscriptionFindMany: SubscriptionTC.getResolver('findMany'),
  subscriptionCreateOne: SubscriptionTC.getResolver('createOne'),
  subscriptionUpdateOne: SubscriptionTC.getResolver('updateOne'),
});

schemaComposer.Mutation.addFields({});

const schema = schemaComposer.buildSchema();
export default schema;
