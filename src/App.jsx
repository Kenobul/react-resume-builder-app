import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar/Navbar";
import AboutUs from "./components/AboutUs";
import MultiStepForm from "./MultiStepForm";
import GenerateCV from "./GenerateCV";
import back from "./assets/back.png";
import next from "./assets/next.png";
import ResumeTemplate from "./Templates/Template1";
import ResumeTemplate2 from "./Templates/Template2";
import ResumeTemplate3 from "./Templates/Templates3"; // Fixed typo
import ErrorBoundary from "./Boundaries"; // Ensure correct import

const templates = [ResumeTemplate, ResumeTemplate2, ResumeTemplate3];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length);
  };

  const handleBack = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + templates.length) % templates.length
    );
  };

  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          {/* Home Page - Template Selection */}
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-gray-100 py-10">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                  Choose Your Template
                </h1>
                <div className="container mx-auto px-4">
                  {/* Mobile View - Show One Template at a Time */}
                  <div className="md:hidden flex justify-center items-center relative overflow-hidden w-full px-4">
                    {/* Back Button */}
                    <motion.button
                      onClick={handleBack}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute left-6 z-10 bg-white/50 p-2 rounded-full shadow-lg"
                    >
                      <img src={back} alt="Back" className="w-10 h-10" />
                    </motion.button>

                    <div className="relative cursor-pointer group bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full max-w-xs">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentIndex}
                          initial={{ x: 100, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -100, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {(() => {
                            const SelectedTemplate = templates[currentIndex];
                            return <SelectedTemplate />;
                          })()}
                        </motion.div>
                      </AnimatePresence>

                      {/* Always Visible on Mobile */}
                      <motion.button
                        onClick={() =>
                          (window.location.href = `/form/${currentIndex}`)
                        }
                        className="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg transition-opacity duration-300 cursor-pointer w-full text-center"
                        whileTap={{ scale: 0.9 }}
                      >
                        Use This Template
                      </motion.button>
                    </div>

                    {/* Next Button */}
                    <motion.button
                      onClick={handleNext}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute right-6 z-10 bg-white/50 p-2 rounded-full shadow-lg"
                    >
                      <img src={next} alt="Next" className="w-10 h-10" />
                    </motion.button>
                  </div>

                  {/* Desktop View - Show All Templates */}
                  <div className="hidden md:grid grid-cols-3 gap-6">
                    {templates.map((Template, index) => (
                      <div
                        key={index}
                        className="relative cursor-pointer group bg-white p-4 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                      >
                        <Template />
                        <motion.button
                          onClick={() =>
                            (window.location.href = `/form/${index}`)
                          }
                          className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                          whileHover={{ y: 4 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Use This Template
                        </motion.button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* Form Page */}
          <Route path="/form/:templateId" element={<MultiStepForm />} />

          {/* CV Generation Page */}
          <Route path="/generate-cv" element={<GenerateCV />} />

          {/* My Resume Page */}
          <Route path="/my-resume" element={<GenerateCV />} />

          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}
