import { composeWithMongoose } from 'graphql-compose-mongoose';
import { Subscription } from '../../models/Subscription';

const SubscriptionTC = composeWithMongoose(Subscription);
export { SubscriptionTC };
