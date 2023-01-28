import stripe from '../class';

const paymentIntentResolvers = () => ({
  Mutation: {
    createPaymentIntent: async (_: any, { record: { amount } }: any) => {
      return stripe.paymentIntents.create({
        amount,
        currency: 'cad',
        setup_future_usage: 'off_session',
        automatic_payment_methods: {
          enabled: true,
        },
      });
    },
  },
});

export { paymentIntentResolvers };
