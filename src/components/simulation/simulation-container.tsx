import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

const SimulatorContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export { SimulatorContainer };
