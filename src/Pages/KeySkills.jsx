import { useState, useEffect } from "react";

export default function KeySkills({ nextStep, prevStep, formData, setFormData }) {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState(formData.skills || []);

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, skills }));
  }, [skills, setFormData]);

  const addSkill = () => {
    if (skill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkill("");
    }
  };

  const removeSkill = (index) => {
    setSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log("Final formData before submission:", formData);
    nextStep();
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Key Skills</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter a skill"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addSkill}
          className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600"
        >
          Add Skill
        </button>
      </div>
      <ul className="mt-4">
        {skills.map((s, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-200 p-2 rounded mt-2">
            {s}
            <button
              onClick={() => removeSkill(index)}
              className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded hover:cursor-pointer hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-600">
          Generate CV
        </button>
      </div>
    </div>
  );
}
