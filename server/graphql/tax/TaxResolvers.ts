import { composeWithMongoose } from 'graphql-compose-mongoose';
import { Tax } from '../../models/Tax';

const TaxTC = composeWithMongoose(Tax);
export { TaxTC };
