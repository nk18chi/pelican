import { composeWithMongoose } from 'graphql-compose-mongoose';
import { Plan } from '../../models/Plan';

const PlanTC = composeWithMongoose(Plan);
export { PlanTC };
