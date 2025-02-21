import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PersonalInfo from "./Pages/PersonalInfo";
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";
import KeySkills from "./Pages/KeySkills.jsx";

export default function MultiStepForm() {
  const { templateId } = useParams(); // Get templateId from the URL
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ templateId }); // Store templateId in formData
  const navigate = useNavigate();

  const nextStep = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data })); // Update formData with new data
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Submitting formData:", formData); // Debugging
    navigate("/generate-cv", { state: { ...formData } }); // Pass all form data
  };
  
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        {step === 1 && <PersonalInfo nextStep={nextStep} formData={formData} setFormData={setFormData} />}
        {step === 2 && <WorkExperience nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
        {step === 3 && <Education nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
        {step === 4 && <KeySkills nextStep={handleSubmit} prevStep={prevStep} formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  );
}
