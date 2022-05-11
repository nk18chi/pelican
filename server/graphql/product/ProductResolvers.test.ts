import { ApolloServer } from 'apollo-server-express';
import { Product } from '../../models/Product';
import { User } from '../../models/User';
import {
  connectTestDatabase,
  disconnectDataBase,
  clearDataBase,
} from '../../utils/database';
import schema from '../schema';

beforeAll(async () => {
  await connectTestDatabase();
});

afterEach(async () => {
  await clearDataBase();
});

afterAll(async () => {
  await disconnectDataBase();
});

describe('ProductResolver', () => {
  describe('productMany Query', () => {
    it('get all products', async () => {
      const user1 = await User.create({ name: 'Naoki' });
      const user2 = await User.create({ name: 'Taro' });

      await Product.create({ name: 'Product 1', user: user1._id });
      await Product.create({ name: 'Product 2', user: user1._id });
      await Product.create({ name: 'Product 3', user: user2._id });

      const apolloServer: ApolloServer = new ApolloServer({
        schema,
      });

      const res = await apolloServer.executeOperation({
        query: `{
            productMany {
              name
              user {
                  name
              }
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.productMany).toEqual([
        { name: 'Product 1', user: { name: 'Naoki' } },
        { name: 'Product 2', user: { name: 'Naoki' } },
        { name: 'Product 3', user: { name: 'Taro' } },
      ]);
    });
  });
});
