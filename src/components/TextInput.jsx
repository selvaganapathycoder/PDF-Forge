import { motion } from "framer-motion";

const TextInput = ({
  value,
  onChange,
  placeholder = "Type or paste your text here...",
}) => {
  return (
    <div className="relative w-full group">
      <motion.div
        layout
        className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 transition-all duration-300 group-hover:bg-white/10 focus-within:ring-2 focus-within:ring-cyan-400/50 focus-within:border-cyan-400 focus-within:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
      >
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full min-h-[300px] bg-transparent text-white placeholder-gray-400 outline-none resize-none font-sans text-lg leading-relaxed selection:bg-cyan-500/30"
          spellCheck="false"
        />

        <div className="absolute bottom-3 right-4 text-xs font-mono text-gray-500 select-none">
          {value.length} characters
        </div>
      </motion.div>
    </div>
  );
};

export default TextInput;
