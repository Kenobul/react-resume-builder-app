import { useNavigate } from "react-router-dom";

export default function AboutUs() {
    const navigate = useNavigate();
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-3 text-lg max-w-3xl mx-auto">
            Empowering professionals with beautifully crafted resumes to land their dream jobs.
          </p>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="mt-4 text-lg max-w-4xl mx-auto">
            At Resume Builder, our goal is to simplify the resume-building process by providing easy-to-use templates and AI-powered guidance to help users create outstanding resumes effortlessly.
          </p>
        </section>
        
        {/* Features Section */}
        <section className="bg-white py-16 px-6 md:px-16 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">User-Friendly Templates</h3>
              <p className="mt-2">Choose from a variety of professional resume templates.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">AI-Powered Assistance</h3>
              <p className="mt-2">Get personalized recommendations for optimizing your resume.</p>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Instant Downloads</h3>
              <p className="mt-2">Export your resume in multiple formats in seconds.</p>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="text-center py-16 px-6 md:px-16">
          <h2 className="text-3xl font-semibold">Start Building Your Resume Today!</h2>
          <p className="mt-4 text-lg">Join thousands of professionals using Resume Builder to land their dream jobs.</p>
          <button onClick={() => navigate("/")} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </section>
      </div>
    );
  }
  