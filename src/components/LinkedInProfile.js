import React, { useState, useEffect } from "react";

const LinkedInProfile = () => {
  // Define fallback images
  const fallbackImage = process.env.PUBLIC_URL + "/assets/profile.jpg";
  const fallbackBgImage = process.env.PUBLIC_URL + "/assets/background.jpg";

  // ✅ Define state for images
  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || fallbackImage
  );
  const [backgroundImage, setBackgroundImage] = useState(
    localStorage.getItem("backgroundImage") || fallbackBgImage
  );

  // ✅ Set images in localStorage when they change
  useEffect(() => {
    localStorage.setItem("profileImage", profileImage);
  }, [profileImage]);

  useEffect(() => {
    localStorage.setItem("backgroundImage", backgroundImage);
  }, [backgroundImage]);

  const skills = [
    "Java", "Spring Boot", "React.js", "Node.js",
    "PostgreSQL", "Docker", "Kubernetes", "Angular",
  ];

  return (
    <div className="font-sans bg-gray-100 flex justify-center items-center min-h-screen px-4 sm:px-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Background Image */}
        <div className="relative h-48 sm:h-60 bg-gray-200">
          <img
            src={backgroundImage}
            alt="Cover"
            className="w-full h-full object-cover"
            onError={() => setBackgroundImage(fallbackBgImage)}
          />
        </div>

        {/* Profile Section */}
        <div className="relative flex flex-col sm:flex-row items-center px-4 sm:px-6 -mt-16 sm:-mt-20">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md"
              onError={() => setProfileImage(fallbackImage)}
            />
          </div>

          <div className="text-center sm:text-left sm:ml-6 mt-4 sm:mt-8">
            <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
              Sourav Vastri
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-1">
              Software Developer at AJSK Software Services
            </p>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">Bhopal, Madhya Pradesh, India</p>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">
              Lakshmi Narain College of Technology
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="px-4 sm:px-6 py-4 border-t text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">About Me</h2>
          <p className="mt-2 text-gray-700 text-sm sm:text-base">
            Passionate about building scalable solutions and always eager to learn new technologies.
          </p>
        </div>

        {/* Experience Section */}
        <div className="px-4 sm:px-6 py-4 border-t text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Experience</h2>
          <div className="mt-2 space-y-2 text-sm sm:text-base">
            <p><strong>AJSK Software Services</strong> - Software Developer (Feb 2021 – Present)</p>
            <p>Developed scalable cloud-native applications using Spring Boot and React.js.</p>
            <p>Reduced system downtime by 15% through efficient bug fixes.</p>
            <p><strong>VIRIM</strong> - Software Engineer (Jun 2020 – Feb 2021)</p>
            <p>Developed a secure online voting system using Spring Boot and PostgreSQL.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-4 sm:px-6 py-4 border-t text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md transition-transform transform hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connect Section */}
        <div className="px-4 sm:px-6 py-4 border-t text-left">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Connect with Me</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
            <a
              href="https://github.com/souravvastri"
              target="_blank"
              className="text-blue-600 font-medium hover:underline text-sm sm:text-base"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sourav-vastri-5b23bb34b"
              target="_blank"
              className="text-blue-600 font-medium hover:underline text-sm sm:text-base"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white py-3 text-center text-sm sm:text-base mt-6">
          <p>&copy; 2025 Sourav Vastri. All rights reserved.</p>
        </div>

      </div>
    </div>
  );
};

export default LinkedInProfile;
