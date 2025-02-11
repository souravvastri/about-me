import React, { useState, useEffect } from "react";

const LinkedInProfile = () => {
  const profileImage = `${process.env.PUBLIC_URL}/profile.jpg`;
  const backgroundImage = `${process.env.PUBLIC_URL}/background.jpg`;
  
  console.log("Profile Image Path:", profileImage);
  console.log("Background Image Path:", backgroundImage);
  
  useEffect(() => {
    if (profileImage !== localStorage.getItem("profileImage")) {
      localStorage.setItem("profileImage", profileImage);
    }
  }, [profileImage]);

  useEffect(() => {
    if (backgroundImage !== localStorage.getItem("backgroundImage")) {
      localStorage.setItem("backgroundImage", backgroundImage);
    }
  }, [backgroundImage]);

  const skills = [
    "Java",
    "Spring Boot",
    "React.js",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Angular",
  ];

  return (
    <div className="font-sans bg-gray-100 flex justify-center items-center min-h-screen px-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative h-60 bg-gray-200">
          <img
            src={backgroundImage}
            alt="Cover"
            className="w-full h-full object-cover"
            onError={(e) => (e.target.src = "/fallback-bg.jpg")}
          />
        </div>
        <div className="relative flex flex-col sm:flex-row items-center px-6 mt-[-30px] sm:mt-[-40px]">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-md"
              onError={(e) => (e.target.src = "/fallback.jpg")}
            />
          </div>

          <div className="text-center sm:text-left sm:ml-6 mt-4 sm:mt-8">
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
              Sourav Vastri
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mt-2">
              Software Developer at AJSK Software Services
            </p>
            <p className="text-gray-500 mt-1">Bhopal, Madhya Pradesh, India</p>
            <p className="text-gray-500 mt-1">Lakshmi Narain College of Technology</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">About Me</h2>
          <p className="w-full mt-2 p-2 text-gray-700">
            Passionate about building scalable solutions and always eager to learn new technologies.
          </p>
        </div>

        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <div className="mt-2 space-y-2">
            <p>
              <strong>AJSK Software Services</strong> - Software Developer (Feb 2021 – Present)
            </p>
            <p>Designed, developed, and maintained high-performance web and backend applications.</p>
            <p>Development of cloud-native applications using Spring Boot and React.js.</p>
            <p>Reduced system downtime by 15% through efficient bug fixes.</p>
            <p>Worked closely with cross-functional teams.</p>
            <p>
              <strong>VIRIM</strong> - Software Engineer (Jun 2020 – Feb 2021)
            </p>
            <p>Designed a secure online voting system using Spring Boot and PostgreSQL.</p>
            <p>Optimized data integrity and implemented real-time result processing.</p>
          </div>
        </div>

        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition-transform transform hover:scale-110"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Connect with Me</h2>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://github.com/souravvastri"
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/sourav-vastri-5b23bb34b"
              target="_blank"
              className="text-blue-600 font-medium hover:underline"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="bg-gray-900 text-white py-4 text-center mt-6">
          <p>&copy; 2025 Sourav Vastri. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
