import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
const baseContainerVariant = {
  initial: {
    x: "100vw",
    opacity: 0,
  },
  final: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      delay: 0.5,
    },
  },
};
const nextVariant = {
  initial: {
    x: "-100vw",
  },
  final: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={baseContainerVariant}
      initial="initial"
      animate="final"
      // transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.2, originX: 0, color: "yellow" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariant}
          // initial="initial"
          // animate="final"
          // transition={{ type: "spring", stiffness: 120 }}
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
