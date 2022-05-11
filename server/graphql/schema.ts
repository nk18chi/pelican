import { schemaComposer } from 'graphql-compose';
import { GraphQLUpload } from 'graphql-upload';

import { userResolvers, UserTC } from './user/UserResolvers';
import { userTypeDef } from './user/UserTypeDef';
import { ProductTC } from './product/ProductResolvers';

const resolvers: any = {};
const apiResolvers: any = [userResolvers()];
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

const typeDefs = [initialTypeDef, userTypeDef];
let typeDef = '';
for (const def of typeDefs) {
  typeDef += def;
}

schemaComposer.addTypeDefs(typeDef);
schemaComposer.addResolveMethods(resolvers);

schemaComposer.add(GraphQLUpload);

ProductTC.addRelation('user', {
  resolver: UserTC.getResolver('findById'),
  prepareArgs: {
    _id: (source: any) => source.user,
  },
  projection: { user: true },
});

schemaComposer.Query.addFields({
  userById: UserTC.getResolver('findById'),
  userMany: UserTC.getResolver('findMany'),
  productById: ProductTC.getResolver('findById'),
  productMany: ProductTC.getResolver('findMany'),
});

schemaComposer.Mutation.addFields({
  userCreateOne: UserTC.getResolver('createOne'),
});

const schema = schemaComposer.buildSchema();
export default schema;
