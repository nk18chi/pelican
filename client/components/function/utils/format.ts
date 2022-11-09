export const currencyFormat = ({
  n,
  currency = 'USD',
  decimal = 2,
}: {
  n: number;
  currency?: string;
  decimal?: number;
}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: decimal,
  });
  return formatter.format(n);
};
