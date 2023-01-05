import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from './CheckoutForm';
import { CREATE_PAYMENT_INTENT } from 'gql/stripe';
import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Spinner, Text } from '@chakra-ui/react';

const stripePromise =
  process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY &&
  loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);

interface StripeElementProps {
  amount: number;
  noAmountMessage: string;
}

const StripeElement = ({ amount, noAmountMessage }: StripeElementProps) => {
  const [createPaymentIntent, { data, loading }] = useMutation(
    CREATE_PAYMENT_INTENT
  );

  useEffect(() => {
    if (!amount) return;
    createPaymentIntent({ variables: { record: { amount } } }).catch((e) => e);
  }, [createPaymentIntent, amount]);

  const clientSecret = data?.createPaymentIntent?.client_secret;
  if (!stripePromise || loading) return <Spinner />;
  if (!clientSecret) return <Text as={'p'}>{noAmountMessage}</Text>;
  return (
    <div className="App">
      <Elements
        stripe={stripePromise}
        options={{
          clientSecret,
          appearance: {
            theme: 'stripe',
          },
        }}
      >
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default StripeElement;
