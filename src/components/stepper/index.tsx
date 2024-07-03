import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { CircleCheck, LoaderCircle } from "lucide-react";
type states = "none" | "ongoing" | "done";

const Stepper = () => {

  const stepVariants = cva(
    "c-stepper__step font-bold grid size-8 place-content-center rounded-full bg-cyan-100 text-cyan-700 relative",
    {
      variants: {
        variant: {
          done: "bg-cyan-700 text-cyan-100",
          ongoing: "bg-cyan-700 text-cyan-100",
          none: "bg-cyan-100 text-cyan-700",
        },
      },
      defaultVariants: {
        variant: "ongoing",
      },
    }
  );

  const steps: Array<{ state: states }> = [
    { state: "done" },
    { state: "ongoing" },
    { state: "none" },
    { state: "none" },
  ];

  const stepToState = (index: number) => ({
    done: <CircleCheck aria-disabled="true" />,
    ongoing: <LoaderCircle aria-disabled="true" className="animate-spin" />,
    none: index,
  });
  return (
    <ol className="flex gap-12" aria-label="Etapas do financiamento">
      {steps.map(({ state }, index) => {
        const currentStep = stepToState(index + 1)[state];
        return (
          <li
            className={cn(stepVariants({ variant: state }))}
            aria-current={state === "ongoing"}
            aria-label={
              index + 1 === steps.length ? "Última etapa" : `Etapa ${index + 1}`
            }
          >
            {currentStep}
          </li>
        );
      })}
    </ol>
  );
};

export { Stepper };
