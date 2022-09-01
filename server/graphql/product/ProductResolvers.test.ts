import { testApolloServer } from '../../jest.global';
import { Product } from '../../models/Product';

const productParam = {
  name: 'Product 1',
  isNewItem: true,
  imageURL: '/assets/img/phones/phone-1.png',
  price: 1000,
  rating: 4.8,
  numReviews: 134,
};

describe('ProductResolver', () => {
  describe('productFindMany Query', () => {
    it('get all products', async () => {
      const p1 = await Product.create({ ...productParam, name: 'Product 1' });
      const p2 = await Product.create({ ...productParam, name: 'Product 2' });
      const p3 = await Product.create({ ...productParam, name: 'Product 3' });

      const res = await testApolloServer.executeOperation({
        query: `{
            productFindMany {
              _id
              name
              isNewItem
              imageURL
              price
              rating
              numReviews
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.productFindMany).toEqual([
        { ...productParam, _id: p1._id.toString(), name: 'Product 1' },
        { ...productParam, _id: p2._id.toString(), name: 'Product 2' },
        { ...productParam, _id: p3._id.toString(), name: 'Product 3' },
      ]);
    });
  });
});
