import React from 'react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: { scale: 0.5, y: 50, opacity: 0 },
        animate: { scale: 1, y: 0, opacity: 1 },
      }}
      transition={{ type: "spring", mass: 3, stiffness: 400, damping: 50 }}
      className={twMerge(
        "rounded-3xl p-6 shadow-3xl transition-colors duration-300 bg-zinc-950 inset-shadow outline outline-0 outline-offset-0 hover:outline hover:outline-1 hover:outline-zinc-700 transition-colors duration-300",
        className
      )}
      {...rest}
    />
  );
};
