import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { stringToCurrency, currencyToNumber } from "@/lib/currency";
import { clsx } from "clsx/lite";

const SimulationInput = ({
  loan,
  setLoan,
}: {
  loan: string;
  setLoan: (value: string) => void;
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const onCurrencyChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const currencyValue = stringToCurrency(value || "0");
    setLoan(currencyValue);
  };

  const onCurrencyBlur = () => {
    const MIN_VALUE = 300;
    const MAX_VALUE = 15000;
    const numberLoan = currencyToNumber(loan);
    console.log({ numberLoan });

    if (numberLoan < MIN_VALUE) {
      setErrorMessage("Valor de empréstimo não pode ser menor que R$ 300");
      return;
    }
    if (numberLoan > MAX_VALUE) {
      setErrorMessage("Valor de empréstimo não pode ser maior que R$ 15.000");
      return;
    }
    setErrorMessage("");
    return;
  };
  return (
    <div className="grid auto-rows-min w-full max-w-[300px] items-center gap-1.5">
      <Label htmlFor="number">Qual valor quer simular?</Label>
      <Input
        type="text"
        id="loan"
        placeholder="R$ 500"
        value={loan}
        onChange={onCurrencyChange}
        onBlur={onCurrencyBlur}
      />
      <small className={clsx("text-gray-500", errorMessage && "text-red-600")}>
        {errorMessage || "O valor precisa estar entre R$500 e R$15.000"}
      </small>
    </div>
  );
};

export { SimulationInput };
