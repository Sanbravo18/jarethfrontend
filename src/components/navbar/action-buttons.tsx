import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";

import Link from "next/link";

function ActionButtons() {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Jareth Web</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10">
                  <SheetClose asChild>
                    <Link href="/signIn">Ingresar</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/getStarted">Registrate</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/series">Series</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/blog">Blog</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/prices">Precios</Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/about">Acerca de</Link>
                  </SheetClose>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Link href="/signIn">
          <Button className="text-md" variant="ghost">
            Ingresar
          </Button>
        </Link>
        <Link href="/getStarted">
          <Button className="text-md">Registrate</Button>
        </Link>
      </div>
    </div>
  );
}

export default ActionButtons;
