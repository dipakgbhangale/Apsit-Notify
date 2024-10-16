// src/components/AuthSection.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png"; // Adjust path as needed

const AuthSection = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="text-center flex flex-col items-center">
      <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
      <h1 className="text-4xl font-bold text-white mb-4 transition-transform transform hover:scale-105">
        APSIT Notify
      </h1>
      <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl text-center">
        <p className="text-gray-800 mb-4">Your personal calendar awaits!</p>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition"
          onClick={loginWithRedirect}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AuthSection;
