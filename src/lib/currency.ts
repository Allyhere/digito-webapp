import bigDecimal from "js-big-decimal";

const PRECISION = 2;

const INSTALLMENTS = {
  "3x": 17.04,
  "6x": 14.71,
  "9x": 14.43,
  "12x": 14.62,
} as const;

type InstallmentKeys = keyof typeof INSTALLMENTS;

const stringToCurrency = (value: string) => {
  const valueToNumber = parseFloat(value.replace(/[^0-9]/g, ""));
  const adjustedValue = parseFloat((valueToNumber / 100).toFixed(PRECISION));
  console.log(adjustedValue);

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(adjustedValue);
};

const currencyToNumber = (value: string) => {
  const valueWithoutCurrency = value.replace(/[^\d,-]/g, "");
  const valueCommaToDot = valueWithoutCurrency.replace(",", ".");
  const parsedValue = Number(valueCommaToDot.replace(/[^0-9.]/g, ""));
  return parsedValue;
};

const calculateLoan = (value: string, interest: InstallmentKeys) => {
  const parsedValue = new bigDecimal(currencyToNumber(value));
  const installment = new bigDecimal(interest.replace("x", ""));
  const interestValue = new bigDecimal(INSTALLMENTS[interest]);
  const dividend = new bigDecimal(100);

  const monthlyInstallment = parsedValue.divide(installment);
  const simpleInterest = parsedValue.multiply(interestValue.divide(dividend));

  return bigDecimal.round(
    monthlyInstallment.add(simpleInterest).getValue(),
    PRECISION
  );
};

export { calculateLoan, currencyToNumber, stringToCurrency, INSTALLMENTS };
export type { InstallmentKeys };
