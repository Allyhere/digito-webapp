import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { InstallmentKeys, INSTALLMENTS } from "@/lib/currency";
import { useId } from "react";

const SimulationInstallment = ({
  setInterest,
}: {
  setInterest: (value: InstallmentKeys) => void;
}) => {
  const onInstallmentChange = (value: InstallmentKeys) => setInterest(value);

  return (
    <div className="grid gap-2 col-start-1 row-start-2">
      <h2 className="text-sm font-medium">Em quantas parcelas vai dividir?</h2>
      <RadioGroup
        onValueChange={onInstallmentChange}
        defaultValue="3x"
        className="flex flex-wrap gap-4"
      >
        {Object.keys(INSTALLMENTS).map((installment, index) => {
          const fieldIndex = useId();
          return (
            <div className="flex items-center space-x-2">
              <RadioGroupItem value={installment} id={fieldIndex} />
              <Label htmlFor={fieldIndex}>{installment}</Label>
            </div>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export { SimulationInstallment };
