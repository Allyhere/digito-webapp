import { ReactNode, SyntheticEvent } from "react";
import { ArrowRight } from "lucide-react";

const SimulatorForm = ({
  children,
  installmentValue,
  submitForm,
  action,
}: {
  children: ReactNode;
  installmentValue?: string;
  submitForm: () => void;
  action: string;
}) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    submitForm && submitForm();
  };
  return (
    <form
      className="grid justify-center md:justify-normal gap-6"
      onSubmit={handleSubmit}
    >
      {children}
      {/* <div className="grid gap-2 md:justify-self-center">
        <h2 className="text-sm font-medium">
          O valor estimado da parcela será:
        </h2>
        <p className="text-3xl font-bold text-green-500">{installmentValue}</p>
        <Button variant="default" className="w-fit mt-4">
          Simular empréstimo
        </Button>
      </div> */}
      <a href="" className="flex gap-2 justify-self-end mt-auto">
        {action}
        <ArrowRight />
      </a>
    </form>
  );
};

export { SimulatorForm };
