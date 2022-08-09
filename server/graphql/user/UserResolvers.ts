import { composeWithMongoose } from 'graphql-compose-mongoose';
import { User } from '../../models/User';

type loginUserProps = {
  email: string;
  password: string;
};

const userResolvers = () => ({
  Mutation: {
    loginUser: async (_: any, { email, password }: loginUserProps) => {
      // you can add some operations
      return email === 'naoki@example.com' && password === 'password';
    },
  },
});

const UserTC = composeWithMongoose(User);
UserTC.wrapResolverResolve('updateOne', (next) => async (rp) => {
  rp.beforeRecordMutate = async (doc: any) => {
    // you can add some operations
    return doc;
  };
  return next(rp);
});

export { UserTC, userResolvers };
