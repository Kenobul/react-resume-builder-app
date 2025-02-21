import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import ResumeTemplate from "./Templates/Template1";
import ResumeTemplate2 from "./Templates/Template2";
import ResumeTemplate3 from "./Templates/Templates3";

const templates = [ResumeTemplate, ResumeTemplate2, ResumeTemplate3];

export default function GenerateCV() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData =
    location.state || JSON.parse(localStorage.getItem("savedResume")) || {};

  const cvRef = useRef(null); // Reference to the CV section

  useEffect(() => {
    if (formData.templateId) {
      localStorage.setItem("savedResume", JSON.stringify(formData));
    }
  }, [formData]);

  if (!formData.templateId) {
    navigate("/"); // Redirect if templateId is missing
    return null;
  }

  const SelectedTemplate = templates[formData.templateId] || ResumeTemplate;

  // Function to handle PDF Download
  const handleDownload = async () => {
    const element = cvRef.current;

    if (element) {
      const canvas = await html2canvas(element, {
        scale: 2, // Increase resolution
        useCORS: true, // Handles cross-origin images
      });

      const imageData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imageData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imageData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("GeneratedCV.pdf");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
        ref={cvRef} // Reference to the CV section
      >
        
        <SelectedTemplate formData={formData} />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-6 bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300"
      >
        Download as PDF
      </button>
    </div>
  );
}
