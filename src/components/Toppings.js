import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
// import { baseContainerVariant } from "./variants/animationVariant";
export const baseContainerVariant = {
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
    },
  },
};



const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div className="toppings container" 
    variants={baseContainerVariant}
    initial="initial"
    animate="final"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.4, originX: 0, color: "yellow" }}
              transition={{type:'spring',stiffness:300}}

            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
