import React from "react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/switchbuttondarklight";
import Mainsection from "@/app/mainsection";
import "./mainsection.css";
import Navbarshadcn from "@/components/navbar/navbar";

function page() {
  return (
    <main
      className="min-h-screen flex-col container pxpy-4"
      id="mainsectioncss"
    >
      <Navbarshadcn />
      <Mainsection />
    </main>
  );
}

export default page;
