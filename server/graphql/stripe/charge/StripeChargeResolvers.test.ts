import stripe from '../class';
import { testApolloServer } from '../../../jest.global';

const result = {
  id: 'abcdefg',
  amount: 100,
  status: 'success',
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      charges: {
        create: jest.fn(() => result),
      },
    };
  });
});

describe('StripeChargeResolvers', () => {
  describe('Mutation: createCharge', () => {
    it('call charges.create method in stripe api', async () => {
      expect(stripe.charges.create).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `
          mutation {
            createCharge(record: { amount: 100, customer: "cus_N3zLJOpRpdL4g7", description: "test create charge" })
          }
        `,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.createCharge).toEqual(result);
      expect(stripe.charges.create).toHaveBeenCalledTimes(1);
      expect(stripe.charges.create).toHaveBeenCalledWith({
        amount: 100,
        customer: 'cus_N3zLJOpRpdL4g7',
        description: 'test create charge',
        currency: 'cad',
        source: undefined,
      });
    });
  });
});
