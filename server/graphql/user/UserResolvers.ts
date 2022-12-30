import { composeWithMongoose } from 'graphql-compose-mongoose';
import { User } from '../../models/User';
import stripe from '../stripe/class';

const UserTC = composeWithMongoose(User);
UserTC.wrapResolverResolve('createOne', (next) => async (rp) => {
  rp.beforeRecordMutate = async (doc: any, resolveParams: any) => {
    const { firstName, lastName, email, phone } = resolveParams.args.record;
    const stripeCustomer = await stripe.customers.create({
      name: `${firstName} ${lastName}`,
      email,
      phone,
    });
    doc.stripe = stripeCustomer;
    return doc;
  };
  return next(rp);
});
UserTC.wrapResolverResolve('updateOne', (next) => async (rp) => {
  rp.beforeRecordMutate = async (doc: any, resolveParams: any) => {
    const { firstName, lastName, email, phone } = resolveParams.args.record;
    await stripe.customers.update(doc.stripe.id, {
      name: `${firstName} ${lastName}`,
      email,
      phone,
    });
    return doc;
  };
  return next(rp);
});

export { UserTC };
