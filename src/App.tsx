import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import digitoLogo from "@/assets/logo-digitocred.svg";

function App() {
  const [loan, setLoan] = useState("");
  const onCurrencyChange = (value: string) => {
    setLoan(value);
  };
  return (
    <main className="grail gap-y-4 text-gray-800 px-4 md:px-8">
      <Navbar />
      <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 py-12">
        <header className="max-w-[500px] grid gap-4 auto-rows-min">
          <h1 className="text-4xl">
            Faça sua cotação rapidamente em alguns cliques!
          </h1>
          <p className="">
            Você pode ter seu empréstimo pessoal em algumas horas na sua conta
            bancária.
          </p>
          <Button variant="default" className="w-fit">
            Fazer uma simulação
          </Button>
        </header>
        <img src="https://placehold.co/400x200" alt="" className="w-full" />
      </section>
      <Separator className="max-w-80 justify-self-center my-8" />
      <section className="grid">
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Empréstimo pessoal nunca foi tão simples
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            earum quas aperiam sed minus consequatur exercitationem perferendis
            molestiae vel est?
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-between py-8">
          <Card className="basis-[250px] grow">
            <CardHeader>
              <CardTitle>Passo 1</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              eligendi nostrum dolore enim quia odit unde quam aliquam sunt!
              Vel!
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-fit">
                Fazer uma simulação
              </Button>
            </CardFooter>
          </Card>
          <Card className="basis-[250px] grow">
            <CardHeader>
              <CardTitle>Passo 2</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              eligendi nostrum dolore enim quia odit unde quam aliquam sunt!
              Vel!
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-fit">
                Fazer uma simulação
              </Button>
            </CardFooter>
          </Card>
          <Card className="basis-[250px] grow-[100] md:grow">
            <CardHeader>
              <CardTitle>Passo 3</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              eligendi nostrum dolore enim quia odit unde quam aliquam sunt!
              Vel!
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-fit">
                Fazer uma simulação
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      <Separator className="max-w-80 justify-self-center my-8" />
      <section>
        <div className="flex flex-wrap w-full mb-8 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Faça uma cotação e comprove
          </h1>
        </div>
        <Card>
          <CardContent className="p-4 grid md:grid-cols-2 justify-center md:justify-normal gap-6">
            <div className="grid w-full max-w-[300px] items-center gap-1.5">
              <Label htmlFor="number">Qual valor quer simular?</Label>
              <Input
                type="text"
                id="loan"
                placeholder="R$ 500"
                value={loan}
                onChange={(event) =>
                  onCurrencyChange(event.currentTarget.value)
                }
              />
              <small className="text-gray-500 ">
                O valor precisa estar entre R$500 e R$15.000
              </small>
            </div>
            <div className="grid gap-2 col-start-1 row-start-2">
              <h2 className="text-sm font-medium">
                Em quantas parcelas vai dividir?
              </h2>
              <RadioGroup defaultValue="3x" className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="3x" id="r1" />
                  <Label htmlFor="r1">3x</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="6x" id="r2" />
                  <Label htmlFor="r2">6x</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="9x" id="r3" />
                  <Label htmlFor="r3">9x</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="12x" id="r3" />
                  <Label htmlFor="r3">12x</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid gap-2 md:justify-self-center">
              <h2 className="text-sm font-medium">
                O valor estimado da parcela será:
              </h2>
              <p className="text-3xl font-bold text-green-500">503,90</p>
              <Button variant="default" className="w-fit mt-4">
                Solicitar empréstimo
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
      <footer className="grid justify-center gap-8 text-white bg-cyan-700 full-bled -mx-4 p-8">
        <img
          src={digitoLogo}
          alt="voltar pra home"
          width={200}
          height={42}
          className="justify-self-center"
        />
        <p className="text-balance text-center">
          Nos cálculos financeiros, os juros são usados para estimar custos de
          empréstimos ou retornos de investimentos, com métodos como juros
          simples e compostos. Os modelos matemáticos e as condições reais podem
          variar devido a fatores adicionais e flutuações nas taxas de juros.
        </p>
        <small className="text-balance text-center">
          &copy; Copyright 2023 | Todos os direitos reservados
        </small>
      </footer>
    </main>
  );
}

export default App;
