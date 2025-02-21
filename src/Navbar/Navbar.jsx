import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import doc_logo from "../assets/doc_logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleMyResumeClick = () => {
    const savedResume = JSON.parse(localStorage.getItem("savedResume"));
    if (savedResume && savedResume.templateId) {
      navigate("/my-resume");
    } else {
      alert("No saved resume found. Please create one first.");
    }
  };

  return (
    <nav className="bg-blue-500 text-white p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img className="h-10 w-10" src={doc_logo} alt="Logo" />
          <h1 className="text-2xl font-bold">Resume Builder</h1>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-5 text-lg">
          <li>
            <Link to="/" className="hover:text-black transition cursor-pointer">
              Resume Templates
            </Link>
          </li>
          <li>
            <button
              onClick={handleMyResumeClick}
              className="hover:text-black transition cursor-pointer"
            >
              My Resume
            </button>
          </li>
          <li>
            <Link to="/about" className="hover:text-black transition cursor-pointer">
              About Us
            </Link>
          </li>
        </ul>
      </div>

     
      
      {isOpen && (
  <ul className="md:hidden flex flex-col space-y-2 mt-3 text-center bg-white text-gray-800 py-4 px-4 rounded-xl shadow-xl transition-all duration-300 ease-in-out w-3/4 mx-auto">
    <li 
      onClick={() => setIsOpen(false)} 
      className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300 p-2"
    >
      <Link
        to="/"
        className="block p-3 rounded-lg hover:text-blue-600 transition duration-300"
      >
        Resume Templates
      </Link>
    </li>
    <li 
      onClick={() => setIsOpen(false)} 
      className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300 p-2"
    >
      <button
        onClick={handleMyResumeClick}
        className="block p-3 w-full rounded-lg hover:text-blue-600 transition duration-300"
      >
        My Resume
      </button>
    </li>
    <li 
      onClick={() => setIsOpen(false)} 
      className="border border-gray-200 rounded-lg hover:shadow-md transition duration-300 p-2"
    >
      <Link
        to="/about"
        className="block p-3 rounded-lg hover:text-blue-600 transition duration-300"
      >
        About Us
      </Link>
    </li>
  </ul>
)}



    </nav>
  );
}
