import stripe from '../class';
import { testApolloServer } from '../../../jest.global';

const result = {
  create: {
    customer: 'abcdefg',
    items: [{ price: 'price_1' }],
  },
  cancel: {
    subscriptionId: 'sub_1',
  },
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      subscriptions: {
        create: jest.fn(() => result.create),
        del: jest.fn(() => result.cancel),
      },
    };
  });
});

describe('StripeSubscriptionResolvers', () => {
  describe('Mutation: createSubscription', () => {
    it('call subscriptions.create method in stripe api', async () => {
      expect(stripe.subscriptions.create).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `
          mutation {
            createSubscription(record: { customer: "cus_N3zLJOpRpdL4g7", items: [{ price: "price_1MK6BHAEYcGlszYVcyjLpVpN" }] })
          }
        `,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.createSubscription).toEqual(result.create);
      expect(stripe.subscriptions.create).toHaveBeenCalledTimes(1);
      expect(stripe.subscriptions.create).toHaveBeenCalledWith({
        customer: 'cus_N3zLJOpRpdL4g7',
        items: [{ price: 'price_1MK6BHAEYcGlszYVcyjLpVpN' }],
      });
    });
  });
  describe('Mutation: cancelSubscription', () => {
    it('call subscriptions.del method in stripe api', async () => {
      expect(stripe.subscriptions.del).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `
          mutation {
            cancelSubscription(record: { subscriptionId: "sub_1MK6suAEYcGlszYVu0tFyJCd" })
          }
        `,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.cancelSubscription).toEqual(result.cancel);
      expect(stripe.subscriptions.del).toHaveBeenCalledTimes(1);
      expect(stripe.subscriptions.del).toHaveBeenCalledWith(
        'sub_1MK6suAEYcGlszYVu0tFyJCd'
      );
    });
  });
});
