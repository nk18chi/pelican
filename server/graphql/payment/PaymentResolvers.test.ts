import { Payment } from '../../models/Payment';
import { testApolloServer } from '../../jest.global';

describe('PaymentResolver', () => {
  describe('paymentFindOne Query', () => {
    it('get a payment', async () => {
      const p1 = await Payment.create({
        user: '6134262fb7601fc4de2356a0',
        plan: '6134262fb7601fc4de2356c0',
      });
      const res = await testApolloServer.executeOperation({
        query: `{
            paymentFindOne {
              _id
              user
              plan
              planOptions
              product
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.paymentFindOne).toEqual({
        _id: p1._id.toString(),
        user: '6134262fb7601fc4de2356a0',
        plan: '6134262fb7601fc4de2356c0',
        planOptions: [],
        product: null,
      });
    });
  });
  describe('paymentFindMany Query', () => {
    it('get all payments', async () => {
      const p1 = await Payment.create({
        user: '6134262fb7601fc4de2356a0',
        plan: '6134262fb7601fc4de2356c0',
      });
      const p2 = await Payment.create({
        user: '6134262fb7601fc4de2356a1',
        plan: '6134262fb7601fc4de2356c1',
        planOptions: ['6134262fb7601fc4de2356b0', '6134262fb7601fc4de2356b1'],
      });
      const p3 = await Payment.create({
        user: '6134262fb7601fc4de2356a2',
        product: '6134262fb7601fc4de2356d0',
      });

      const res = await testApolloServer.executeOperation({
        query: `{
            paymentFindMany {
              _id
              user
              plan
              planOptions
              product
            }
          }`,
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.paymentFindMany).toEqual([
        {
          _id: p1._id.toString(),
          user: '6134262fb7601fc4de2356a0',
          plan: '6134262fb7601fc4de2356c0',
          planOptions: [],
          product: null,
        },
        {
          _id: p2._id.toString(),
          user: '6134262fb7601fc4de2356a1',
          plan: '6134262fb7601fc4de2356c1',
          planOptions: ['6134262fb7601fc4de2356b0', '6134262fb7601fc4de2356b1'],
          product: null,
        },
        {
          _id: p3._id.toString(),
          user: '6134262fb7601fc4de2356a2',
          plan: null,
          planOptions: [],
          product: '6134262fb7601fc4de2356d0',
        },
      ]);
    });
  });
  describe('paymentCreateOne Query', () => {
    it('create a new payments', async () => {
      const res = await testApolloServer.executeOperation({
        query: `
          mutation PaymentCreateOne($record: CreateOnePaymentsInput!) {
            paymentCreateOne(record: $record) {
              record {
                user
                plan
                planOptions
                product
              }
            }
          }`,
        variables: {
          record: {
            user: '6134262fb7601fc4de2356a0',
            plan: '6134262fb7601fc4de2356c0',
          },
        },
      });
      expect(res.errors).toBeUndefined();
      expect(res.data?.paymentCreateOne).toEqual({
        record: {
          user: '6134262fb7601fc4de2356a0',
          plan: '6134262fb7601fc4de2356c0',
          planOptions: [],
          product: null,
        },
      });
    });
  });
});
