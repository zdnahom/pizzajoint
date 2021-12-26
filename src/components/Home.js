import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const homeContainerVariant = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 2,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={homeContainerVariant}
      // initial={{ opacity: 0 }}
      initial="initial"
      // animate={{ opacity: 1 }}
      animate="visible"
      // transition={{ delay: 1.5, duration: 2 }}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
