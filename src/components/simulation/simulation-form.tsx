import { ReactNode, SyntheticEvent } from "react";
import { Button } from "@/components/ui/button";

const SimulatorForm = ({
  children,
  installmentValue,
  submitForm,
}: {
  children: ReactNode;
  installmentValue: string;
  submitForm: () => void;
}) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    submitForm && submitForm();
  };
  return (
    <form
      className="p-4 grid md:grid-cols-2 justify-center md:justify-normal gap-6"
      onSubmit={handleSubmit}
    >
      {children}
      <div className="grid gap-2 md:justify-self-center">
        <h2 className="text-sm font-medium">
          O valor estimado da parcela será:
        </h2>
        <p className="text-3xl font-bold text-green-500">{installmentValue}</p>
        <Button variant="default" className="w-fit mt-4">
          Simular empréstimo
        </Button>
      </div>
    </form>
  );
};

export { SimulatorForm };
