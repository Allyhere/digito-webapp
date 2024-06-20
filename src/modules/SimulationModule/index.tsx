import { SimulationInstallment } from "@/components/simulation/simulation-installment";
import { SimulatorContainer } from "@/components/simulation/simulation-container";
import { SimulatorForm } from "@/components/simulation/simulation-form";
import { SimulatorData } from "@/components/simulation/simulation-data";
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
    <div className="grid grid-cols-3 gap-4">
      <SimulatorContainer title="Solicitação">
        <SimulatorForm
          action="Incluir dados de envio "
          submitForm={onFormSubmit}
        >
          <SimulationInput loan={loan} setLoan={setLoan} />
          <SimulationInstallment setInterest={setInterest} />
        </SimulatorForm>
      </SimulatorContainer>
      <SimulatorContainer
        title="Dados de envio"
        description="Precisamos confirmar sua identidade e o e-mail que enviaremos análise (não enviaremos spam)."
      >
        <SimulatorForm
          action="Adicionar informações de renda"
          submitForm={onFormSubmit}
        >
          <SimulatorData />
        </SimulatorForm>
      </SimulatorContainer>
    </div>
  );
};

export { SimulationModule };
