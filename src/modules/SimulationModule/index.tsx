import { SimulationInstallment } from "@/components/simulation/simulation-installment";
import { SimulatorForm } from "@/components/simulation/simulation-form";
import { SimulatorData } from "@/components/simulation/simulation-data";
import { SimulatorIncome } from "@/components/simulation/simulation-income";
import { SimulationInput } from "@/components/simulation/simulation-input";
import { calculateLoan } from "@/lib/currency";
import { useState, SyntheticEvent } from "react";
import { InstallmentKeys } from "@/lib/currency";
import { ChevronRight, CheckCheck } from "lucide-react";
import { Card, CardTitle } from "@/components/card";

const SimulationModule = () => {
  const [loan, setLoan] = useState("R$ 300");
  const [interest, setInterest] = useState<InstallmentKeys>("3x");
  const [startSimulation, setStartSimulation] = useState<{
    title: string;
    description: string;
    index: any;
  }>({
    title: "Simule seu empréstimo",
    description:
      "Simule rapidamente e com segurança  e viabilize aquele sonho que você tanto deseja",
    index: 1,
  });
  const [step, setStep] = useState("INITIALIZE");

  const onFormSubmit = (step: string, event: SyntheticEvent) => {
    const payload = {
      loan,
      interest,
      installment: calculateLoan(loan, interest),
    };
    setStep(step);
    console.log(
      Array.from((event.target as HTMLFormElement).elements)
        .filter((element) => element.nodeName === "INPUT")
        .map((input) => (input as HTMLInputElement).value)
    );
  };

  const handleStartSimulation = (event: React.MouseEvent) => {
    event.preventDefault();
    setStartSimulation({
      title: "Solicitação",
      description: "O valor precisa estar entre R$500 e R$15.000",
      index: <CheckCheck />,
    });
    setStep("FIRST");
  };

  return (
    <div className="fluid-grid gap-4 w-full">
      <Card>
        <CardTitle cardInfo={startSimulation} open={step !== "FIRST"}>
          <a href="" onClick={handleStartSimulation}>
            Começar simulação <ChevronRight />
          </a>
        </CardTitle>
        <SimulatorForm
          action="Incluir dados de envio "
          submitForm={(event: SyntheticEvent) => onFormSubmit("SECOND", event)}
        >
          <SimulationInput loan={loan} setLoan={setLoan} />
          <SimulationInstallment setInterest={setInterest} />
        </SimulatorForm>
      </Card>
      <Card classes="theme-2">
        <CardTitle
          cardInfo={{
            title: "Dados de envio",
            description:
              "Precisamos confirmar sua identidade e o e-mail que enviaremos análise (não enviaremos spam).",
            index: 2,
          }}
          open={step !== "SECOND"}
        />
        <SimulatorForm
          action="Adicionar informações de renda"
          submitForm={(event: SyntheticEvent) => onFormSubmit("THIRD", event)}
        >
          <SimulatorData />
        </SimulatorForm>
      </Card>
      <Card classes="theme-3">
        <CardTitle
          cardInfo={{
            title: "Informações de renda",
            description:
              "Agora basta incluir suas informações de trabalho para contribuir na aprovação da análise de crédito.",
            index: 3,
          }}
          open={step !== "THIRD"}
        />
        <SimulatorForm
          action="Receber simulação no meu e-mail"
          submitForm={(event) => onFormSubmit("END", event)}
        >
          <SimulatorIncome />
        </SimulatorForm>
      </Card>
    </div>
  );
};

export { SimulationModule };
