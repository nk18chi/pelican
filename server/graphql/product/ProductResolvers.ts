import { composeWithMongoose } from 'graphql-compose-mongoose';
import { Product } from '../../models/Product';

const ProductTC = composeWithMongoose(Product);
export { ProductTC };
