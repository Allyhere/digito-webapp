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
import { SimulationModule } from "@/modules/SimulationModule";

import digitoLogo from "@/assets/logo-digitocred.svg";
import { Stepper } from "./components/stepper";

function App() {
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
              <CardTitle>Solicitação</CardTitle>
            </CardHeader>
            <CardContent>
              Inclua o valor e a quantidade de parcelas do seu empréstimo
              pessoal, oferecemos ótimas condições para empréstimos de R$ 500 a
              R$15.000.
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-fit">
                Quero saber mais sobre a simulação
              </Button>
            </CardFooter>
          </Card>
          <Card className="basis-[250px] grow grid">
            <CardHeader>
              <CardTitle>Cadastro</CardTitle>
            </CardHeader>
            <CardContent>
              Ao realizar o cadastro coletamos as informações necessárias para a
              simulação e envio das informações.
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="default" className="w-fit">
                Ver política de dados
              </Button>
            </CardFooter>
          </Card>
          <Card className="grid basis-[250px] grow-[100] md:grow">
            <CardHeader>
              <CardTitle>Devolutiva</CardTitle>
            </CardHeader>
            <CardContent>
              Você recebe sua simulação diretamente no seu e-mail, sem spam!
            </CardContent>
            <CardFooter className="mt-auto">
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
      </section>
      <SimulationModule />
      <Stepper/>
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
