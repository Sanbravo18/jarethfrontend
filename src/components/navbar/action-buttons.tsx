import { Button } from "@/components/ui/button";
import {
  Sheet,
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
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                description
                <div className="flex flex-col space-y-4 items-start w-full text-lg mt-10">
                  <Link href="/">Ingresar</Link>
                  <Link href="/">Registrate</Link>
                  <Link href="/">Series</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">Precios</Link>
                  <Link href="/">Acerca de</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-4">
        <Button className="text-md" variant="ghost">
          Ingresar
        </Button>
        <Button className="text-md">Registrate</Button>
      </div>
    </div>
  );
}

export default ActionButtons;
