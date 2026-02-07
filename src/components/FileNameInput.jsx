import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const FileNameInput = ({ value, onChange, className }) => {
  return (
    <div className={cn("relative group", className)}>
      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="relative bg-white/5 backdrop-blur-md rounded-xl p-1 transition-all duration-300 group-hover:bg-white/10 focus-within:ring-2 focus-within:ring-cyan-400/50 focus-within:border-cyan-400 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.3)] shadow-inner"
      >
        <div className="flex items-center px-4 py-3">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter PDF file name"
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none font-medium text-lg min-w-0"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="text-gray-500 font-mono text-sm ml-2 bg-white/5 px-2 py-1 rounded">
            .pdf
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default FileNameInput;
