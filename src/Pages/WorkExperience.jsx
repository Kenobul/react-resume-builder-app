import { useState } from "react";

export default function WorkExperience({ nextStep, prevStep, formData, setFormData }) {
  const [experiences, setExperiences] = useState(formData.workExperience || [
    { company: "", role: "", startDate: "", endDate: "", description: "" }
  ]);

  const handleChange = (index, field, value) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index][field] = value;
    setExperiences(updatedExperiences);
  };

  const addExperience = () => {
    setExperiences([...experiences, { company: "", role: "", startDate: "", endDate: "", description: "" }]);
  };

  const removeExperience = (index) => {
    if (experiences.length > 1) {
      const updatedExperiences = experiences.filter((_, i) => i !== index);
      setExperiences(updatedExperiences);
    }
  };

  const handleNext = () => {
    setFormData({ ...formData, workExperience: experiences });
    nextStep();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Work Experience</h2>

      {experiences.map((experience, index) => (
        <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Company Name</label>
            <input
              type="text"
              value={experience.company}
              onChange={(e) => handleChange(index, "company", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Role</label>
            <input
              type="text"
              value={experience.role}
              onChange={(e) => handleChange(index, "role", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="mb-3 w-1/2">
              <label className="block text-gray-700 font-semibold">Start Date</label>
              <input
                type="date"
                value={experience.startDate}
                onChange={(e) => handleChange(index, "startDate", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-3 w-1/2">
              <label className="block text-gray-700 font-semibold">End Date</label>
              <input
                type="date"
                value={experience.endDate}
                onChange={(e) => handleChange(index, "endDate", e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-semibold">Job Description</label>
            <textarea
              value={experience.description}
              onChange={(e) => handleChange(index, "description", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="3"
            />
          </div>

          {experiences.length > 1 && (
            <button
              onClick={() => removeExperience(index)}
              className="bg-red-500 cursor-pointer text-white px-3 py-2 rounded-md text-sm"
            >
              Delete
            </button>
          )}
        </div>
      ))}

      <button
        onClick={addExperience}
        className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md mb-4"
      >
        + Add Another Experience
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
