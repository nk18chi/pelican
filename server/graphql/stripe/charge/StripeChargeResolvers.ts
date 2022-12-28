import stripe from '../class';

const chargeResolvers = () => ({
  Mutation: {
    createCharge: async (
      _: any,
      { record: { amount, source, customer, description } }: any
    ) => {
      console.log('CALL!');
      console.log(amount, customer, source, description);
      try {
        return stripe.charges.create({
          amount,
          currency: 'cad',
          source,
          customer,
          description,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export { chargeResolvers };
