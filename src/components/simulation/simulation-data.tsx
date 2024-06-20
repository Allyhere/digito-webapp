import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

const SimulatorData = () => {
  return (
    <div className="grid columns-2 gap-2">
      <Label className="col-span-2" htmlFor="name">
        Nome completo
        <Input type="text" placeholder="Maria da Silva" name="name" id="name" />
      </Label>
      <Label htmlFor="email" className="col-span-2">
        E-mail
        <Input
          type="email"
          placeholder="exemplo@mail.com"
          id="name"
          name="email"
        />
      </Label>
      <Label htmlFor="cpf">
        CPF
        <Input type="text" placeholder="000.000.000-00" id="cpf" name="cpf" />
      </Label>
      <Label htmlFor="date">
        Data de nascimento
        <Input type="date" id="date" name="date" />
      </Label>
    </div>
  );
};

export { SimulatorData };
