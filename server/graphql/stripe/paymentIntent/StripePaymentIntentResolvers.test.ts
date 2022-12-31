import stripe from '../class';
import { testApolloServer } from '../../../jest.global';

const result = {
  id: 'pi_1EUmy5285d61s2cIUDDd7XEQ',
  client_secret: 'pi_1EUmy5285d61s2cIUDDd7XEQ_secret_ZWIYZAGWyZlhayYSw6KncDR8K',
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      paymentIntents: {
        create: jest.fn(() => result),
      },
    };
  });
});

describe('StripePaymentIntentResolvers', () => {
  describe('Mutation: createPaymentIntent', () => {
    it('call paymentIntents.create method in stripe api', async () => {
      expect(stripe.paymentIntents.create).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `
          mutation {
            createPaymentIntent(record: { amount: 100 })
          }
        `,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.createPaymentIntent).toEqual(result);
      expect(stripe.paymentIntents.create).toHaveBeenCalledTimes(1);
      expect(stripe.paymentIntents.create).toHaveBeenCalledWith({
        amount: 100,
        automatic_payment_methods: {
          enabled: true,
        },
        currency: 'cad',
      });
    });
  });
});
