import React from "react";
import "./mainsection.css";

function Mainsection() {
  return (
    <section
      id="mainsectionphoto"
      className="md:py-20 py-10 spacey-10 md:grid md:grid-cols-2
      bg-cover
      md:bg-contain
      bg-no-repeat
      bg-center
      min-h-screen
    "
    >
      <div className="container mx-auto text-center ">
        <div
          className=" 
        text-6xl 
        flex
        justify-center
        font-extrabold
        
        pb-10
        text-gradient
        bg-gradient-to-r
        from-blue-500
        to-green-300
        bg-clip-text
        text-transparent
        
        "
        >
          Jareth web
        </div>
      </div>
    </section>
  );
}

export default Mainsection;
