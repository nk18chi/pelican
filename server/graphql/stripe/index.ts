import { chargeResolvers } from './charge/StripeChargeResolvers';
import { chargeTypeDef } from './charge/StripeChargeTypeDef';
import { subscriptionResolvers } from './subscription/StripeSubscriptionResolvers';
import { subscriptionTypeDef } from './subscription/StripeSubscriptionTypeDef';
import { paymentIntentResolvers } from './paymentIntent/StripePaymentIntentResolvers';
import { paymentIntentTypeDef } from './paymentIntent/StripePaymentIntentTypeDef';

const stripeResolvers: any = [
  chargeResolvers(),
  subscriptionResolvers(),
  paymentIntentResolvers(),
];

let stripeTypeDef = '';
for (const def of [chargeTypeDef, subscriptionTypeDef, paymentIntentTypeDef]) {
  stripeTypeDef += def;
}

export { stripeResolvers, stripeTypeDef };
