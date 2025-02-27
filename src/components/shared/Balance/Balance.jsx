import { useState } from "react";
import { motion } from "framer-motion";
import { FaDollarSign } from "react-icons/fa";
import  PropTypes  from 'prop-types';

const Balance = ({amount}) => {
 
  const [isVisible, setIsVisible] = useState(false);

  // Toggle function with timeout logic
  const toggleVisibility = () => {
    setIsVisible(true); // Show the amount immediately

    // After 2 seconds, revert back to "Tap to Reveal"
    setTimeout(() => {
      setIsVisible(false);
    }, 2000); // 2000ms = 2 seconds
  };

  return (
    <motion.div
      className="flex items-center justify-between px-4 py-2 w-64 rounded-full shadow-lg cursor-pointer select-none relative overflow-hidden"
      onClick={toggleVisibility}
      animate={{
        backgroundColor: isVisible ? "##1e2939" : "#1e2939", // purple-700 to green
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Smooth Text Animation */}
      <motion.span
        className="text-white font-bold text-lg ml-10"
        initial={{ opacity: 0.5, filter: "blur(4px)" }}
        animate={{
          opacity: isVisible ? 1 : 1,
          filter: isVisible ? "blur(0px)" : "blur(0px)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {isVisible ? ` ${amount} BDT` : "Tap to Reveal"}
      </motion.span>
      {/* Moving Dollar Icon */}
      <motion.div
        className="w-8 h-8 flex items-center justify-center bg-white bg-opacity-30 rounded-full absolute left-4"
        animate={{
          x: isVisible ? 180 : 0, // Moves from left to right (adjust 180 as needed)
          scale: isVisible ? 1.2 : 1, // Scales up slightly when visible
        }}
        transition={{
          x: { duration: 0.5, type: "spring", stiffness: 120 },
          scale: { duration: 0.3, ease: "easeInOut" },
        }}
      >
        <FaDollarSign className="text-black w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};

Balance.propTypes = {
  amount: PropTypes.number
}
export default Balance;


