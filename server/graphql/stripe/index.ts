import { chargeResolvers } from './charge/StripeChargeResolvers';
import { chargeTypeDef } from './charge/StripeChargeTypeDef';

const stripeResolvers: any = { ...chargeResolvers() };

let stripeTypeDef = '';
for (const def of [chargeTypeDef]) {
  stripeTypeDef += def;
}

export { stripeResolvers, stripeTypeDef };
