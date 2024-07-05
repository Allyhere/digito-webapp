import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useWindowSize } from "@uidotdev/usehooks";
import digitoLogo from "@/assets/logo-digitocred.svg";
import { Separator } from "@radix-ui/react-separator";

const Navbar = () => {
  const { width } = useWindowSize();
  const MAX_WIDTH = 840;

  return (
    <nav className="flex justify-between items-center py-4 px-2 full-bled flex-wrap">
      <img src={digitoLogo} alt="voltar pra home" width={200} height={42} />
      {width && width <= MAX_WIDTH ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button className="w-fit">Menu</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <img
                  src={digitoLogo}
                  alt="voltar pra home"
                  width={150}
                  height={32}
                />
              </SheetTitle>
            </SheetHeader>
            <ul className="grid auto-rows-min gap-y-6 mt-8 h-full">
              <li>Área do cliente</li>
              <li>Perguntas frequentes</li>
              <li>
                <Separator className="mt-4 h-1 border-t border-gray-200" />
              </li>
              <li>
                <Button variant="outline" className="w-fit">
                  Simule seu empréstimo
                </Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      ) : (
        <ul className="flex gap-4 items-center">
          <li>Área do cliente</li>
          <li>Perguntas frequentes</li>
          <li>
            <Button variant="outline" className="w-fit">
              Simule seu empréstimo
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export { Navbar };
