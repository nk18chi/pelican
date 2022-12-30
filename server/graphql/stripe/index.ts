import { chargeResolvers } from './charge/StripeChargeResolvers';
import { chargeTypeDef } from './charge/StripeChargeTypeDef';
import { subscriptionResolvers } from './subscription/StripeSubscriptionResolvers';
import { subscriptionTypeDef } from './subscription/StripeSubscriptionTypeDef';

const stripeResolvers: any = [chargeResolvers(), subscriptionResolvers()];

let stripeTypeDef = '';
for (const def of [chargeTypeDef, subscriptionTypeDef]) {
  stripeTypeDef += def;
}

export { stripeResolvers, stripeTypeDef };
