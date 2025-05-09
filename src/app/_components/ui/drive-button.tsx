"use client";

import { motion } from "framer-motion";

interface TestDriveProps {
  handleSubmit: () => void;
}

const TestDrive: React.FC<TestDriveProps> = ({ handleSubmit }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => console.log("hover started!")}
      onClick={handleSubmit}
      className="rounded-xl bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
    >
      Test Drive Kyron
    </motion.button>
  );
};

export default TestDrive;
