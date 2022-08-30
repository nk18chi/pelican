export enum SUPPORTED_COUNTRIES {
  'CANADA' = 'Canada',
  'USA' = 'USA',
}

const SUPPORTED_COUNTRY_PHONE: {
  [key: string]: {
    countryCode: string;
    areaCode: number[];
  };
} = {
  Canada: {
    countryCode: '1',
    areaCode: [778, 604],
  },
};

export const generateRandomPhoneNumber = ({
  country,
}: {
  country: SUPPORTED_COUNTRIES;
}) => {
  const { countryCode, areaCode } = SUPPORTED_COUNTRY_PHONE[country] || {};
  if (!countryCode || !areaCode)
    throw new Error(`${country} has not been supported yet`);

  return `+${countryCode}-${
    areaCode[Math.floor(Math.random() * (areaCode.length - 1))]
  }-${Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, '0')}-${Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, '0')}`;
};
