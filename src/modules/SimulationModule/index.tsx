import { SimulationInstallment } from "@/components/simulation/simulation-installment";
import { SimulatorContainer } from "@/components/simulation/simulation-container";
import { SimulatorForm } from "@/components/simulation/simulation-form";
import { SimulationInput } from "@/components/simulation/simulation-input";
import { stringToCurrency, calculateLoan } from "@/lib/currency";
import { useState } from "react";
import { InstallmentKeys } from "@/lib/currency";

const SimulationModule = () => {
  const [loan, setLoan] = useState("R$ 300");
  const [interest, setInterest] = useState<InstallmentKeys>("3x");
  const onFormSubmit = () => {
    const payload = {
      loan,
      interest,
      installment: calculateLoan(loan, interest),
    };

    console.log(payload);
  };
  return (
    <SimulatorContainer>
      <SimulatorForm
        submitForm={onFormSubmit}
        installmentValue={stringToCurrency(calculateLoan(loan, interest))}
      >
        <SimulationInput loan={loan} setLoan={setLoan} />
        <SimulationInstallment setInterest={setInterest} />
      </SimulatorForm>
    </SimulatorContainer>
  );
};

export { SimulationModule };
