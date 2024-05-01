import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import digitoLogo from "./assets/logo-digitocred.svg";

function App() {
  return (
    <main className="grail gap-y-4 text-gray-800 px-4">
      <nav className="flex justify-between items-center py-4 px-2 full-bled flex-wrap">
        <img src={digitoLogo} alt="voltar pra home" width={200} height={42} />
        <ul className="flex gap-4 items-center">
          <li>Área do cliente</li>
          <li>Perguntas frequentes</li>
          <li>
            <Button variant="outline" className="w-fit">
              Simule seu empréstimo
            </Button>
          </li>
        </ul>
      </nav>
      <section className="flex flex-wrap justify-evenly py-12">
        <header className="max-w-[350px] grid gap-4 auto-rows-min">
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
        <img src="https://placehold.co/400x300" alt="" />
      </section>
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
        <div className="flex flex-wrap gap-4 justify-center py-8">
          <Card className="max-w-[350px]">
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
          <Card className="max-w-[350px]">
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
          <Card className="max-w-[350px] grow-1">
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
      <footer className="grid justify-center gap-8 text-white bg-cyan-700 full-bled -mx-4 p-8">
        <img src={digitoLogo} alt="voltar pra home" width={200} height={42} className="justify-self-center"/>
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
