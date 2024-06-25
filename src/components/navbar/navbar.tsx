import React from "react";
import ActionButtons from "@/components/navbar/action-buttons";
import { NavigationBar } from "@/components/navbar/navigation-bar";
import Logo from "@/components/navbar/logo";

function Navbarshadcn() {
  return (
    <header>
      <nav
        className="
    flex
    justify-between
    items-center
    px-10
    border-b
    h-20  
    
    "
      >
        <Logo />
        <NavigationBar />
        <ActionButtons />
      </nav>
    </header>
  );
}

export default Navbarshadcn;
