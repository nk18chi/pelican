import config from 'config';
import Stripe from 'stripe';

const stripe = new Stripe(config.get('STRIPE_SECRET_KEY'), {
  apiVersion: '2022-11-15',
});

export default stripe;
