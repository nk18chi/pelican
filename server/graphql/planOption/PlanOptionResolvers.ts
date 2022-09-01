import { composeWithMongoose } from 'graphql-compose-mongoose';
import { PlanOption } from '../../models/PlanOption';

const PlanOptionTC = composeWithMongoose(PlanOption);
export { PlanOptionTC };
