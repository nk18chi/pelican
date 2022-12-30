import stripe from '../class';

const chargeResolvers = () => ({
  Mutation: {
    createCharge: async (
      _: any,
      { record: { amount, source, customer, description } }: any
    ) => {
      return stripe.charges.create({
        amount,
        currency: 'cad',
        source,
        customer,
        description,
      });
    },
  },
});

export { chargeResolvers };
