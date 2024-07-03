import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

const SimulatorIncome = () => {
  return (
    <div className="grid columns-2 gap-2">
      <Label className="col-span-2" htmlFor="occupation">
        Empresa em que trabalha
        <Input type="text" placeholder="Empresa X" name="occupation" id="occupation" />
      </Label>
      <Label htmlFor="admission-date">
       Data de admissão
        <Input type="date" id="admission-date" name="admission-date" />
      </Label>
      <Label htmlFor="telephone">
        Telefone pessoal
        <Input type="tel" placeholder="(99) 99999-9999" id="telephone" name="telephone" />
      </Label>
    </div>
  );
};

export { SimulatorIncome };
