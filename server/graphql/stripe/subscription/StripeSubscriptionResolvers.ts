import stripe from '../class';

const subscriptionResolvers = () => ({
  Mutation: {
    createSubscription: async (
      _: any,
      { record: { customer, items } }: any
    ) => {
      return stripe.subscriptions.create({
        customer,
        items,
      });
    },
  },
});

export { subscriptionResolvers };
