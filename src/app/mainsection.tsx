"use client";
import { motion } from "framer-motion";
import {
  slideIn,
  staggerContainer,
  textVariant,
  navVariants,
} from "@/utils/motion";

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
      z-1
      overflow-hidden
    "
    >
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          variants={slideIn("down", "spring", 1, 1)}
          className={`sm:px-16 px-6 relative py-8`}
        >
          <div className="absolute w-[50%] inset-0 gradient-01"></div>
        </motion.div>
        <motion.div
          variants={slideIn("down", "spring", 1, 1)}
          className="absolute inset-0 flex justify-center items-center z-1"
        >
          <img
            src="jarethwithoutbackground.png"
            alt="Background"
            className=" h-full object-cover "
          />
        </motion.div>
        <div className="container mx-auto text-center absolute z-2 flex gap-4">
          <motion.h1
            className=" 
        text-6xl 
        lg:text-8xl
        flex
        justify-center
        font-extrabold
        pt-20
        md:pl-40
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
          <div></div>
        </div>
      </motion.div>
    </section>
  );
}

export default Mainsection;
