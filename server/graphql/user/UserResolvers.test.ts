import { User } from '../../models/User';
import stripe from '../stripe/class';
import { testApolloServer } from '../../jest.global';

const usersDummy = [
  {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com',
    phone: '+1604123456',
  },
  {
    firstName: 'Nate',
    lastName: 'Johnson',
    email: 'nate@example.com',
    phone: '+1604777777',
  },
  {
    firstName: 'Kate',
    lastName: 'Brown',
    email: 'kate@example.com',
    phone: '+1778123456',
  },
];
const stripeRes = {
  id: 'cus_N3zLJOpRpdL4g7',
  object: 'customer',
  address: null,
  balance: 0,
  created: 1672202127,
  currency: 'cad',
  default_source: 'card_1MJrOlAEYcGlszYVEOZPAL4S',
  delinquent: false,
  description: null,
  discount: null,
  email: 'naoki.mita18+johns@gmail.com',
  invoice_prefix: '44BA5F1E',
  invoice_settings: {
    custom_fields: null,
    default_payment_method: null,
    footer: null,
    rendering_options: null,
  },
  livemode: false,
  metadata: {},
  name: 'John Smith',
  next_invoice_sequence: 3,
  phone: null,
  preferred_locales: [],
  shipping: null,
  tax_exempt: 'none',
  test_clock: null,
};

jest.mock('stripe', () => {
  return jest.fn().mockImplementation(() => {
    return {
      customers: {
        create: jest.fn(() => stripeRes),
        update: jest.fn(() => stripeRes),
      },
    };
  });
});

describe('UserResolver', () => {
  describe('userFindOne Query', () => {
    it('get one User', async () => {
      const u1 = await User.create({ ...usersDummy[0] });
      const res = await testApolloServer.executeOperation({
        query: `{
            userFindOne {
              _id
              firstName
              lastName
              email
              phone
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.userFindOne).toEqual({
        ...usersDummy[0],
        _id: u1._id.toString(),
      });
    });
  });
  describe('userFindMany Query', () => {
    it('get all Users', async () => {
      const u1 = await User.create({ ...usersDummy[0] });
      const u2 = await User.create({ ...usersDummy[1] });
      const u3 = await User.create({ ...usersDummy[2] });

      const res = await testApolloServer.executeOperation({
        query: `{
            userFindMany {
              _id
              firstName
              lastName
              email
              phone
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.userFindMany).toEqual([
        { ...usersDummy[0], _id: u1._id.toString() },
        { ...usersDummy[1], _id: u2._id.toString() },
        { ...usersDummy[2], _id: u3._id.toString() },
      ]);
    });
  });
  describe('userCreateOne Mutation', () => {
    it('create a new user', async () => {
      expect(stripe.customers.create).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `{
            userCreateOne(record: { firstName: "Joseph", lastName: "Smith", email: "joseph@example.com", phone: "+1778987654" }) {
              record {
                firstName
                lastName
                email
                phone
              }
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.userCreateOne).toEqual({
        record: {
          firstName: 'Joseph',
          lastName: 'Smith',
          email: 'joseph@example.com',
          phone: '+1778987654',
        },
      });
      expect(stripe.customers.create).toHaveBeenCalledTimes(1);
      expect(stripe.customers.create).toHaveBeenCalledWith({
        name: 'Joseph Smith',
        email: 'joseph@example.com',
        phone: '+1778987654',
      });
    });
  });
  describe('userUpdateOne Mutation', () => {
    it('update a user', async () => {
      const u1 = await User.create({
        ...usersDummy[0],
        stripe: { id: 'cus_1' },
      });
      expect(stripe.customers.update).not.toHaveBeenCalled();
      const res = await testApolloServer.executeOperation({
        query: `{
              userUpdateOne(record: { firstName: "Joseph", lastName: "Smith", email: "joseph@example.com", phone: "+1778987654" }, filter: { _id: "${u1._id.toString()}" }) {
                record {
                  firstName
                  lastName
                  email
                  phone
                }
              }
            }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.userUpdateOne).toEqual({
        record: {
          firstName: 'Joseph',
          lastName: 'Smith',
          email: 'joseph@example.com',
          phone: '+1778987654',
        },
      });
      expect(stripe.customers.update).toHaveBeenCalledTimes(1);
      expect(stripe.customers.update).toHaveBeenCalledWith('cus_1', {
        name: 'Joseph Smith',
        email: 'joseph@example.com',
        phone: '+1778987654',
      });
    });
  });
});
