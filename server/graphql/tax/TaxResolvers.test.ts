import { Tax } from '../../models/Tax';
import { testApolloServer } from '../../jest.global';

describe('TaxResolver', () => {
  describe('taxFindMany Query', () => {
    it('get all taxs', async () => {
      const t1 = await Tax.create({ label: 'Tax 1', percentage: 0.1 });
      const t2 = await Tax.create({ label: 'Tax 2', percentage: 0.05 });

      const res = await testApolloServer.executeOperation({
        query: `{
            taxFindMany {
              _id
              label
              percentage
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.taxFindMany).toEqual([
        { _id: t1._id.toString(), label: 'Tax 1', percentage: 0.1 },
        { _id: t2._id.toString(), label: 'Tax 2', percentage: 0.05 },
      ]);
    });
  });
});
