import { ReactNode, SyntheticEvent } from "react";
import { ArrowRight } from "lucide-react";

const SimulatorForm = ({
  children,
  submitForm,
  action,
}: {
  children: ReactNode;
  submitForm: (event: SyntheticEvent) => void;
  action: string;
}) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    submitForm && submitForm(event);
  };
  return (
    <form
      className="grid justify-center md:justify-normal gap-6"
      onSubmit={handleSubmit}
    >
      {children}
      <button className="flex gap-2 justify-self-end mt-auto">
        {action}
        <ArrowRight />
      </button>
    </form>
  );
};

export { SimulatorForm };
