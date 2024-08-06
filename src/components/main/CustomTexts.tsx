"use client";

import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

// Define las interfaces para los props
interface TypingTextProps {
  title: string | React.ReactNode;
  textStyles?: string;
}

interface TitleTextProps {
  title: string | React.ReactNode;
  textStyles?: string;
}

// Component TypingText
export const TypingText: React.FC<TypingTextProps> = ({
  title,
  textStyles,
}) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-white ${textStyles}`}
  >
    {typeof title === "string"
      ? Array.from(title).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))
      : React.Children.map(title, (child, index) => (
          <motion.span variants={textVariant2} key={index}>
            {child}
          </motion.span>
        ))}
  </motion.p>
);

// Component TitleText
export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
