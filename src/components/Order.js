import { motion } from "framer-motion";
import React from "react";
// import { baseContainerVariant } from "./variants/animationVariant";
const baseContainerVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "spring",
      stiffness: 120,
    //   delay: 0.5,
    
    // higher mass refers it moves slower and lower mass refers it moves faster
    mass:0.8,

    //higer daming means a lower oscilation
    damping:8,
    staggerChildren:1
    },
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  final: {
    opacity: 1,
    
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={baseContainerVariant}
      initial="initial"
      animate="final"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants} >
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
