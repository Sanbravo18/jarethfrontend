import React from "react";
import ActionButtons from "@/components/navbar/action-buttons";
import { NavigationBar } from "@/components/navbar/navigation-bar";
import Logo from "@/components/navbar/logo";

function Navbarshadcn() {
  return (
    <div
      className="
    flex
    justify-between
    items-center
    px-10
    border-b
    "
    >
      <Logo />
      <NavigationBar />
      <ActionButtons />
    </div>
  );
}

export default Navbarshadcn;
