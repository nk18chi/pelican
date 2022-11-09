import { Plan } from '../../models/Plan';
import { testApolloServer } from '../../jest.global';

const planParam = {
  title: 'Plan 1',
  options: [{ desc: 'Plan Desc 1' }],
  price: 100,
};

describe('PlanResolver', () => {
  describe('planFindMany Query', () => {
    it('get all plans', async () => {
      const p1 = await Plan.create({ ...planParam, title: 'Plan 1' });
      const p2 = await Plan.create({ ...planParam, title: 'Plan 2' });
      const p3 = await Plan.create({ ...planParam, title: 'Plan 3' });

      const res = await testApolloServer.executeOperation({
        query: `{
            planFindMany {
              _id
              title
              options {
                desc
              }
              price
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.planFindMany).toEqual([
        { ...planParam, _id: p1._id.toString(), title: 'Plan 1' },
        { ...planParam, _id: p2._id.toString(), title: 'Plan 2' },
        { ...planParam, _id: p3._id.toString(), title: 'Plan 3' },
      ]);
    });
  });
});
