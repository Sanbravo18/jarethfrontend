"use client";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";

function Mainsection() {
  return (
    <section
      className="md:py-20 py-10 space-y-10 md:grid md:grid-cols-2
      bg-cover
      md:bg-contain
      bg-no-repeat
      bg-center
      min-h-screen
      mainsectioncss
      relative
    "
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={slideIn("down", "spring", 1.25, 1)}
          className="absolute inset-0 flex justify-center items-center z-0"
        >
          <img
            src="jarethwithoutbackground.png"
            alt="Background"
            className=" h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            className=" 
        text-6xl 
        flex
        justify-center
        font-extrabold
        pt-40
        pb-10
        text-gradient
        bg-gradient-to-r
        from-blue-500
        to-green-300
        bg-clip-text
        text-transparent
        "
            variants={textVariant(0.25)}
            viewport={{ once: false, amount: 0.25 }}
          >
            Jareth web
          </motion.h1>
        </div>
      </motion.div>
    </section>
  );
}

export default Mainsection;
