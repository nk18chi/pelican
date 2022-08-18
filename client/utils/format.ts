type TCurrentFormat = {
  n: number;
  currency?: string;
  decimal?: number;
};

export const currentFormat = ({
  n,
  currency = 'USD',
  decimal = 2,
}: TCurrentFormat) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimal,
  });
  return formatter.format(n);
};
