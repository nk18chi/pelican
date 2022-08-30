import { SUPPORTED_COUNTRIES, generateRandomPhoneNumber } from './fake';

const testcases = {
  phoneNumber: [
    {
      description: 'should generate a random phone number',
      props: { country: SUPPORTED_COUNTRIES.CANADA },
      expected: /^\+1-(778|604)-[0-9]{3}-[0-9]{4}$/,
      times: 30,
    },
    {
      description: 'should generate a random phone number',
      props: { country: SUPPORTED_COUNTRIES.USA },
      expected: `${SUPPORTED_COUNTRIES.USA} has not been supported yet`,
      throwError: true,
    },
  ],
};

describe('fake.ts', () => {
  describe('generateRandomPhoneNumber', () => {
    testcases.phoneNumber.forEach(
      ({ props, description, throwError, expected, times = 1 }) => {
        it(`${description} ${JSON.stringify(props)}`, async () => {
          if (throwError) {
            expect(() => generateRandomPhoneNumber(props)).toThrow(expected);
          } else {
            for (let i = 0; i < times; i++) {
              expect(generateRandomPhoneNumber(props)).toMatch(expected);
            }
          }
        });
      }
    );
  });
});
