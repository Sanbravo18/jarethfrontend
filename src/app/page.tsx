import React from "react";

import Mainsection from "@/app/mainsection";
import "./mainsection.css";
import Navbarshadcn from "@/components/navbar/navbar";

function page() {
  return (
    <div>
      <Navbarshadcn />

      <main className="min-h-screen flex-col " id="mainsectioncss">
        <Mainsection />
      </main>
    </div>
  );
}

export default page;
