import stripe from '../class';
import { testApolloServer } from '../../../jest.global';

const result = {
  customer: 'abcdefg',
  items: [{ price: 'price_1' }],
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      subscriptions: {
        create: jest.fn(() => result),
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
      expect(res.data?.createSubscription).toEqual(result);
      expect(stripe.subscriptions.create).toHaveBeenCalledTimes(1);
      expect(stripe.subscriptions.create).toHaveBeenCalledWith({
        customer: 'cus_N3zLJOpRpdL4g7',
        items: [{ price: 'price_1MK6BHAEYcGlszYVcyjLpVpN' }],
      });
    });
  });
});
