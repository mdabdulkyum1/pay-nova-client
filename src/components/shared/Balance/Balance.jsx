import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";

const Balance = ({ role, amount }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md w-44 border border-gray-300">
      <h1 className="text-gray-700 text-lg font-semibold">
        {role === "user" ? "Balance" : "Income"}
      </h1>
      <motion.h2
        className="text-lg font-bold cursor-pointer select-none mt-2 px-4 py-2 bg-gray-200 rounded-md"
        onClick={() => setIsVisible(!isVisible)}
        initial={{ opacity: 0.4, filter: "blur(6px)" }}
        animate={{
          opacity: isVisible ? 1 : 0.4,
          filter: isVisible ? "blur(0px)" : "blur(6px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isVisible ? `${amount} BDT` : "••••"}
      </motion.h2>
    </div>
  );
};

Balance.propTypes = {
  role: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Balance;
