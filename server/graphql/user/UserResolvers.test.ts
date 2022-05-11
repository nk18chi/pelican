import { User } from '../../models/User';
import '../../utils/testSetup';
import { createApolloServer } from '../../utils/apolloServer';

const apolloServer = createApolloServer({});
describe('UserResolver', () => {
  describe('createUser Mutation', () => {
    it('create a user to DB', async () => {
      const res = await apolloServer.executeOperation({
        query: `
          mutation UserCreateOne($record: CreateOneUsersInput!) {
            userCreateOne(record: $record) {
              record {
                name
                email
              }
            }
          }
        `,
        variables: {
          record: {
            name: 'Naoki',
            email: 'naoki@example.com',
            password: 'password',
          },
        },
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.userCreateOne.record).toEqual({
        name: 'Naoki',
        email: 'naoki@example.com',
      });
      expect(await User.count()).toEqual(1);
    });
  });

  describe('login Mutation', () => {
    const LOGIN_USER = `
      mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password)
      }
    `;

    it('succeed to login', async () => {
      const res = await apolloServer.executeOperation({
        query: LOGIN_USER,
        variables: {
          email: 'naoki@example.com',
          password: 'password',
        },
      });

      expect(res.errors).toBeUndefined();
      expect(res.data?.loginUser).toEqual(true);
    });

    it('fail to login with wrong email', async () => {
      const res = await apolloServer.executeOperation({
        query: LOGIN_USER,
        variables: {
          email: 'naoki2@example.com',
          password: 'password',
        },
      });

      expect(res.errors).toBeUndefined();
      expect(res.data?.loginUser).toEqual(false);
    });

    it('fail to login with wrong pass', async () => {
      const res = await apolloServer.executeOperation({
        query: LOGIN_USER,
        variables: {
          email: 'naoki@example.com',
          password: 'passwords',
        },
      });

      expect(res.errors).toBeUndefined();
      expect(res.data?.loginUser).toEqual(false);
    });
  });
});
