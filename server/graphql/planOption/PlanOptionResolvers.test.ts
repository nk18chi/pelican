import { PlanOption } from '../../models/PlanOption';
import { testApolloServer } from '../../jest.global';

describe('PlanOptionResolver', () => {
  describe('planOptionFindMany Query', () => {
    it('get all planOptions', async () => {
      const po1 = await PlanOption.create({
        label: 'PlanOption 1',
        price: 10,
      });
      const po2 = await PlanOption.create({
        label: 'PlanOption 2',
        price: 5,
      });

      const res = await testApolloServer.executeOperation({
        query: `{
            planOptionFindMany {
              _id
              label
              price
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.planOptionFindMany).toEqual([
        { _id: po1._id.toString(), label: 'PlanOption 1', price: 10 },
        { _id: po2._id.toString(), label: 'PlanOption 2', price: 5 },
      ]);
    });
  });
});
