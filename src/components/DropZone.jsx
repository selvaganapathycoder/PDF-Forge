import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, FileText, X } from "lucide-react";
import toast from "react-hot-toast";

const DropZone = ({ onFileLoaded }) => {
  const [file, setFile] = useState(null);

  const onDrop = async (acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    const uploadedFile = acceptedFiles[0];
    if (uploadedFile.type !== "text/plain") {
      toast.error("Only .txt files are supported!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      onFileLoaded(reader.result, uploadedFile.name);
      setFile(uploadedFile);
      toast.success(`${uploadedFile.name} loaded!`);
    };
    reader.readAsText(uploadedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "text/plain": [".txt"] },
    multiple: false,
    noClick: !!file, // Disable click if file is loaded to prevent accidental re-upload on click unless explicitly clearing
  });

  const clearFile = (e) => {
    e.stopPropagation();
    setFile(null);
    onFileLoaded("", "");
  };

  return (
    <div
      {...getRootProps()}
      className={`relative w-full overflow-hidden transition-all duration-300 rounded-xl border-2 border-dashed
        ${isDragActive ? "border-cyan-400 bg-cyan-400/10" : "border-white/20 hover:border-white/40 bg-white/5"}
        min-h-[120px] flex flex-col items-center justify-center cursor-pointer group`}
    >
      <input {...getInputProps()} />

      <AnimatePresence mode="wait">
        {!file ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center gap-2 text-center p-6"
          >
            <div
              className={`p-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 mb-2 transition-transform duration-300 group-hover:scale-110 ${isDragActive ? "animate-pulse" : ""}`}
            >
              <Upload className="w-8 h-8 text-cyan-300" />
            </div>
            <p className="text-gray-300 font-medium">
              Drag & Drop your .txt file here
            </p>
            <p className="text-gray-500 text-sm">Or click to browse</p>
          </motion.div>
        ) : (
          <motion.div
            key="file"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-4 w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 shadow-lg relative"
          >
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <FileText className="w-6 h-6 text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white truncate">{file.name}</p>
              <p className="text-xs text-gray-400">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>
            <button
              onClick={clearFile}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-gray-400 hover:text-red-400"
              title="Remove file"
            >
              <X size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isDragActive ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute inset-0 bg-cyan-500/5 blur-xl" />
      </div>
    </div>
  );
};

export default DropZone;
