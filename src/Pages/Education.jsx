import { useState } from "react";

export default function Education({ nextStep, prevStep, formData, setFormData }) {
  const [education, setEducation] = useState(formData.education || [
    { institution: "", degree: "", field: "", startDate: "", endDate: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const addEducation = () => {
    setEducation([...education, { institution: "", degree: "", field: "", startDate: "", endDate: "" }]);
  };

  const removeEducation = (index) => {
    if (education.length > 1) {
      const updatedEducation = education.filter((_, i) => i !== index);
      setEducation(updatedEducation);
    }
  };

  const handleNext = () => {
    setFormData({ ...formData, education });
    nextStep();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Education</h2>

      {education.map((edu, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Institution Name</label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) => handleChange(index, "institution", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Degree/Diploma</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => handleChange(index, "degree", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Field of Study</label>
            <input
              type="text"
              value={edu.field}
              onChange={(e) => handleChange(index, "field", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex gap-4">
            <div className="mb-3 w-1/2">
              <label className="block text-gray-700 font-semibold">Start Date</label>
              <input
                type="date"
                value={edu.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-3 w-1/2">
              <label className="block text-gray-700 font-semibold">End Date</label>
              <input
                type="date"
                value={edu.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {education.length > 1 && (
            <button
              onClick={() => removeEducation(index)}
              className="bg-red-500 cursor-pointer hover:bg-red-400 text-white px-3 py-2 rounded-md text-sm"
            >
              Delete
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addEducation}
        className="bg-green-500 cursor-pointer  text-white px-4 py-2 rounded-md mb-4"
      >
        + Add Another Education
      </button>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevStep}
          className="bg-gray-400 cursor-pointer text-white px-4 py-2 rounded-md"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
