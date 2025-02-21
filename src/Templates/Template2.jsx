import React, { useEffect } from "react";

export default function Template2({ formData = {} }) {
  useEffect(() => {
    console.log("Received formData in Template2:", formData);
  }, [formData]); // Logs whenever formData updates

  return (
    <div
      className="max-w-4xl mx-auto"
      style={{
        backgroundColor: "#1f2937", // Gray-900 in HEX
        color: "#ffffff", // White in HEX
        boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        borderRadius: "8px",
        padding: "32px",
      }}
    >
      {/* Header Section */}
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            color: "#fbbf24", // Yellow-400 in HEX
          }}
        >
          {formData.name || "Your Name"}
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#fbbf24", // Yellow-400 in HEX
          }}
        >
          {formData.objectives || "Your Title/Objective"}
        </p>
        <p style={{ color: "#d1d5db" }}>
          {formData.email || "your.email@example.com"} |{" "}
          {formData.mobileNo || "(000) 000-0000"}
        </p>
        <p style={{ color: "#d1d5db" }}>
          {formData.address1 || "Street Address"}, {formData.address2 || ""}
        </p>
        <p style={{ color: "#d1d5db" }}>
          {formData.city || "City"}, {formData.state || "State"},{" "}
          {formData.postalCode || "00000"}
        </p>
        <p style={{ color: "#d1d5db" }}>
          ID No: {formData.idNo || "N/A"}
        </p>
      </div>

      {/* Experience Section */}
      <div style={{ marginTop: "24px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            borderBottom: "2px solid #fbbf24",
            paddingBottom: "4px",
          }}
        >
          Experience
        </h2>
        {formData.workExperience && formData.workExperience.length > 0 ? (
          formData.workExperience.map((exp, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                backgroundColor: "#374151", // Gray-800 in HEX
                color: "#e5e7eb", // Gray-200 in HEX
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                {exp.role || "Job Title"}
              </h3>
              <p style={{ color: "#9ca3af" }}>
                {exp.company || "Company Name"} |{" "}
                {exp.startDate || "Start Date"} - {exp.endDate || "End Date"}
              </p>
              <p style={{ marginTop: "8px" }}>
                {exp.description || "Job description goes here."}
              </p>
            </div>
          ))
        ) : (
          <div
            style={{
              marginTop: "16px",
              backgroundColor: "#374151",
              color: "#e5e7eb",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
              Software Engineer
            </h3>
            <p style={{ color: "#9ca3af" }}>Tech Corp | 2020 - 2023</p>
            <p style={{ marginTop: "8px" }}>
              Worked on cutting-edge web applications and optimized performance.
            </p>
          </div>
        )}
      </div>

      {/* Education Section */}
      <div style={{ marginTop: "24px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            borderBottom: "2px solid #fbbf24",
            paddingBottom: "4px",
          }}
        >
          Education
        </h2>
        {formData.education && formData.education.length > 0 ? (
          formData.education.map((edu, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                backgroundColor: "#374151",
                color: "#e5e7eb",
                padding: "16px",
                borderRadius: "8px",
              }}
            >
              <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
                {edu.degree || "Degree Name"} in{" "}
                {edu.field || "Field of Study"}
              </h3>
              <p style={{ color: "#9ca3af" }}>
                {edu.institution || "Institution Name"} |{" "}
                {edu.startDate || "Start Date"} - {edu.endDate || "End Date"}
              </p>
            </div>
          ))
        ) : (
          <div
            style={{
              marginTop: "16px",
              backgroundColor: "#374151",
              color: "#e5e7eb",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <h3 style={{ fontSize: "20px", fontWeight: "600" }}>
              Bachelor of Science in Computer Science
            </h3>
            <p style={{ color: "#9ca3af" }}>
              University of Technology | 2016 - 2020
            </p>
          </div>
        )}
      </div>

      {/* Skills Section */}
      <div style={{ marginTop: "24px" }}>
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "600",
            borderBottom: "2px solid #fbbf24",
            paddingBottom: "4px",
          }}
        >
          Skills
        </h2>
        {formData.skills && formData.skills.length > 0 ? (
          <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#fbbf24",
                  color: "#1f2937",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p style={{ color: "#d1d5db", marginTop: "16px" }}>
            No skills added yet.
          </p>
        )}
      </div>
    </div>
  );
}
