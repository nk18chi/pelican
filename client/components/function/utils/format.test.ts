import { currencyFormat } from './format';

const testcases = {
  currency: [
    {
      description: 'should return price with currency',
      props: { n: 100, currency: 'USD', decimal: 2 },
      expected: '$100.00',
    },
    {
      description: 'should return price with currency',
      props: { n: 100 },
      expected: '$100.00',
    },
    {
      description: 'should return price with currency',
      props: { n: 100, currency: 'CAD', decimal: 0 },
      expected: 'CA$100',
    },
  ],
};

describe('format.ts', () => {
  describe('currencyFormat', () => {
    testcases.currency.forEach(({ props, description, expected }) => {
      it(`${description} ${JSON.stringify(props)}`, async () => {
        expect(currencyFormat(props)).toBe(expected);
      });
    });
  });
});
