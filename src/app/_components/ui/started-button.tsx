"use client";

import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      data-oid="k28rw06"
    >
      <a
        href="https://form.typeform.com/to/zstMkPH7"
        rel="noopener noreferrer"
        className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
        data-oid="q8hfa0_"
      >
        Get Started
      </a>
    </motion.button>
  );
};

export default GetStarted;
