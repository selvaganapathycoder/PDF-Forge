import React, { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { motion } from "framer-motion";

import GlassCard from "./components/GlassCard";
import TextInput from "./components/TextInput";
import DropZone from "./components/DropZone";
import FileNameInput from "./components/FileNameInput";
import GenerateButton from "./components/GenerateButton";
import generatePDF from "./utils/generatePDF";

const App = () => {
  const [text, setText] = useState("");
  const [fileName, setFileName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Reset success state after a delay
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const handleFileLoaded = (content, name) => {
    setText(content);
    // Use the file name without extension as default PDF name if not set
    if (!fileName) {
      const nameWithoutExt = name.replace(/\.[^/.]+$/, "");
      setFileName(nameWithoutExt);
    }
  };

  const handleGenerate = async () => {
    if (!text.trim()) {
      toast.error("Please enter some text or load a file!");
      return;
    }
    if (!fileName.trim()) {
      toast.error("Please enter a file name for your PDF!");
      return;
    }

    setIsGenerating(true);
    setIsSuccess(false);

    try {
      // Simulate a small delay for better UX (so user sees loading state)
      await new Promise((resolve) => setTimeout(resolve, 800));

      await generatePDF({ text, fileName });

      setIsSuccess(true);
      toast.success("PDF downloaded successfully!", {
        icon: "🚀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0f] text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a1c2e] via-[#0a0a0f] to-[#000000] -z-20" />

      {/* Grid Pattern Overlay (Optional, for tech vibe) */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />

      {/* Floating Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] animate-blob mix-blend-screen pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen pointer-events-none" />
      <div className="fixed top-[20%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-extrabold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              PDF Forge
            </h1>
            <p className="text-gray-400 text-lg mt-2 font-medium">
              Transform your text into professional PDFs instantly.
            </p>
          </div>

          <GlassCard className="space-y-6">
            {/* Drop Zone */}
            <DropZone onFileLoaded={handleFileLoaded} />

            {/* Text Input */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-cyan-300 ml-1 uppercase tracking-wider">
                Content
              </label>
              <TextInput value={text} onChange={setText} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* File Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-purple-300 ml-1 uppercase tracking-wider">
                  Filename
                </label>
                <FileNameInput value={fileName} onChange={setFileName} />
              </div>

              {/* Action Button */}
              <div className="flex items-end">
                <GenerateButton
                  onClick={handleGenerate}
                  isLoading={isGenerating}
                  isSuccess={isSuccess}
                  disabled={!text || !fileName}
                  text="Generate PDF"
                />
              </div>
            </div>
          </GlassCard>

          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} PDF Forge. Built with React &
              Tailwind.
            </p>
          </div>
        </motion.div>
      </div>

      <Toaster position="bottom-center" toastOptions={{ duration: 4000 }} />
    </div>
  );
};

export default App;
