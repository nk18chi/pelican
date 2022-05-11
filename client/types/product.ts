import { TUser } from './user';

export interface TProduct {
  _id: string;
  name: string;
  user: TUser;
}
