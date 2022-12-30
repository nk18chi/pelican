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
    cancelSubscription: async (_: any, { record: { subscriptionId } }: any) => {
      return stripe.subscriptions.del(subscriptionId);
    },
  },
});

export { subscriptionResolvers };
