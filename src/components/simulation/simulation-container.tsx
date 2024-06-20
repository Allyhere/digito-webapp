import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const SimulatorContainer = ({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description?: string;
}) => {
  return (
    <Card>
      <CardTitle className="px-6 pt-6 pb-3 text-2xl font-bold">
        {title}
      </CardTitle>
      {description ? (
        <CardDescription className="max-w-[60ch] px-6 pb-6">{description}</CardDescription>
      ) : null}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { SimulatorContainer };
