import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const GlassCard = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
      className={cn(
        "relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg p-6",
        className,
      )}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
