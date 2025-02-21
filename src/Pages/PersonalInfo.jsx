import { useState } from "react";

export default function PersonalInfo({ nextStep }) {
  const [formData, setFormData] = useState({
    name: "",
    objectives: "",
    idNo: "",
    email: "",
    mobileNo: "",
    address1: "",
    address2: "",
    postalCode: "",
    city: "",
    state: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "This field is required";
    if (!formData.idNo) newErrors.idNo = "This field is required";
    if (!formData.email) newErrors.email = "This field is required";
    if (!formData.mobileNo) newErrors.mobileNo = "This field is required";
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      nextStep(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Personal Information</h2>
      <div className="grid grid-cols-1 gap-6">
        {Object.keys(formData).map((key) => (
          <div key={key}>
            <label className="block text-lg font-semibold text-gray-600">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </label>
            <input
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300"
              placeholder={`Enter your ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
            />
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
            )}
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-300"
      >
        Next
      </button>
    </div>
  );
}
