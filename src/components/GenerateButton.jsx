import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Download, Check } from "lucide-react";
import { cn } from "../utils/cn";

const GenerateButton = ({
  onClick,
  isLoading,
  isSuccess,
  disabled,
  text,
  className,
}) => {
  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : {}}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : {}}
      onClick={!disabled && !isLoading ? onClick : undefined}
      disabled={disabled || isLoading}
      className={cn(
        "relative w-full py-3 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 isolate group cursor-pointer",
        disabled
          ? "bg-gray-700/50 text-gray-400 cursor-not-allowed border border-gray-600/50"
          : "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(56,189,248,0.5)] border border-cyan-400/50 hover:shadow-[0_0_40px_rgba(56,189,248,0.8)]",
        className,
      )}
    >
      <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-overlay" />

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2"
          >
            <Loader2 className="animate-spin w-6 h-6" />
            Generating...
          </motion.div>
        ) : isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center justify-center gap-2 text-green-300"
          >
            <Check className="w-6 h-6" />
            Success!
          </motion.div>
        ) : (
          <motion.div
            key="default"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center gap-3"
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            {text || "Generate PDF"}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Neon Glow Overlay */}
      {!disabled && !isLoading && (
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
    </motion.button>
  );
};

export default GenerateButton;
