import { Subscription } from '../../models/Subscription';
import { testApolloServer } from '../../jest.global';

describe('SubscriptionResolver', () => {
  describe('subscriptionFindMany Query', () => {
    it('get all subscriptions', async () => {
      const s1 = await Subscription.create({
        user: '6134262fb7601fc4de2356a0',
        plan: '6134262fb7601fc4de2356c0',
      });
      const s2 = await Subscription.create({
        user: '6134262fb7601fc4de2356a1',
        plan: '6134262fb7601fc4de2356c1',
      });

      const res = await testApolloServer.executeOperation({
        query: `{
            subscriptionFindMany {
              _id
              user
              plan
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.subscriptionFindMany).toEqual([
        {
          _id: s1._id.toString(),
          user: '6134262fb7601fc4de2356a0',
          plan: '6134262fb7601fc4de2356c0',
        },
        {
          _id: s2._id.toString(),
          user: '6134262fb7601fc4de2356a1',
          plan: '6134262fb7601fc4de2356c1',
        },
      ]);
    });
  });
  describe('subscriptionCreateOne Query', () => {
    it('create a new subscriptions', async () => {
      const res = await testApolloServer.executeOperation({
        query: `
        mutation SubscriptionCreateOne($record: CreateOneSubscriptionsInput!) {
          subscriptionCreateOne(record: $record) {
            record {
              user
              plan
            }
          }
        }`,
        variables: {
          record: {
            user: '6134262fb7601fc4de2356a0',
            plan: '6134262fb7601fc4de2356c0',
          },
        },
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.subscriptionCreateOne).toEqual({
        record: {
          user: '6134262fb7601fc4de2356a0',
          plan: '6134262fb7601fc4de2356c0',
        },
      });
    });
  });
  describe('subscriptionUpdateOne Query', () => {
    it('update a subscriptions', async () => {
      const s1 = await Subscription.create({
        user: '6134262fb7601fc4de2356a0',
        plan: '6134262fb7601fc4de2356c0',
      });
      const res = await testApolloServer.executeOperation({
        query: `
          mutation SubscriptionUpdateOne($record: UpdateOneSubscriptionsInput!, $filter: FilterUpdateOneSubscriptionsInput, $sort: SortUpdateOneSubscriptionsInput, $skip: Int) {
            subscriptionUpdateOne(record: $record, filter: $filter, sort: $sort, skip: $skip) {
              record {
                user
                plan
              }
            }
          }`,
        variables: {
          record: {
            user: '6134262fb7601fc4de2356a9',
            plan: '6134262fb7601fc4de2356c9',
          },
          filter: { _id: `${s1._id.toString()}` },
        },
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.subscriptionUpdateOne).toEqual({
        record: {
          user: '6134262fb7601fc4de2356a9',
          plan: '6134262fb7601fc4de2356c9',
        },
      });
    });
  });
});
