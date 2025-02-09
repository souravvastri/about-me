import React, { useState } from "react";

const LinkedInProfile = () => {
  const [profileImage, setProfileImage] = useState("/profile.jpg");
  const [backgroundImage, setBackgroundImage] = useState("/background.jpg");

  const handleProfileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setBackgroundImage(e.target.result);
      reader.readAsDataURL(file);
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div className="font-sans bg-gray-100 flex justify-start items-start min-h-screen px-6">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-72 bg-gray-200">
          <img
            src={backgroundImage}
            alt="Cover"
            className="w-full h-full object-cover object-center"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            aria-label="Upload background image"
          />
        </div>

        {/* Profile Image and Name */}
        <div className="relative flex items-center mt-[-30px] px-6">
          <div className="relative">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md cursor-pointer object-cover object-center"
              onClick={() => document.getElementById("profileInput").click()}
            />
            <input
              type="file"
              id="profileInput"
              accept="image/*"
              onChange={handleProfileUpload}
              className="hidden"
              aria-label="Upload profile image"
            />
          </div>

          {/* Name and Information */}
          <div className="ml-6 mt-6">
            <h1 className="text-4xl font-semibold text-gray-900">Sourav Vastri</h1>
            <p className="text-xl text-gray-600 mt-2">Software Developer at AJSK Software Services</p>
            <p className="text-lg text-gray-500 mt-1">Bhopal, Madhya Pradesh, India</p>
            <p className="text-lg text-gray-500 mt-1">Lakshmi Narain College Of Technology</p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">About Me</h2>
          <p className="text-gray-700 mt-2">
            Passionate about building scalable solutions and always eager to learn new technologies.
          </p>
        </div>

        {/* Experience Section */}
        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
          <div className="mt-2 space-y-2">
            <p><strong>AJSK Software Services</strong> - Software Developer (Feb 2021 – Present)</p>
            <p><strong>VIRIM</strong> - Software Engineer (Jun 2020 – Feb 2021)</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Java", "Spring Boot", "React.js", "Node.js", "PostgreSQL", "Docker", "Kubernetes"].map(skill => (
              <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="px-6 py-4 border-t text-left">
          <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li><strong>Dx26-io:</strong> Cloud-native intelligence insights platform (React, Spring Boot, Postgres)</li>
            <li><strong>Taxi Dispatch System:</strong> Real-time taxi tracking and dispatch (Spring Boot, React.js, PostgreSQL)</li>
            <li><strong>MMStex:</strong> Garment management system (Spring Boot, Angular, MySQL)</li>
          </ul>
        </div>

        {/* Footer */}
        <div className="bg-gray-900 text-white py-4 text-center mt-6">
          <p>&copy; 2025 Sourav Vastri. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LinkedInProfile;
