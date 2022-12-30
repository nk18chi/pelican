import { composeWithMongoose } from 'graphql-compose-mongoose';
import { Payment } from '../../models/Payment';

const PaymentTC = composeWithMongoose(Payment);
export { PaymentTC };
