import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../Assets/assets";

function Banner() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center md:flex-row w-full  md:h-[300px] bg-gradient-to-r from-[#FFB6C1] to-[#FF69B4] shadow-lg rounded-lg overflow-hidden">
      {/* ---------- Left Side ---------- */}
      <div className=" w-[60%] h-[280px]  flex flex-col items-center justify-center">
        <div className="text-center text-white font-bold text-4xl">
          Welcome to Our Health Care Platform
        </div>
        <div className="text-center text-white font-medium text-sm mt-2">
          Your health is our priority. Find the best doctors and specialists
          near you.
        </div>

        <button
          onClick={() => navigate("/login")}
          className="bg-amber-100 text-sm sm:text-base md:font-semibold text-blue-700 py-2 px-8 rounded-full mt-4 cursor-pointer hover:bg-amber-200 transition duration-300 ease-in-out"
        >
          Create Account
        </button>
      </div>
      {/* ---------- Right Side ---------- */}
      <div className="w-[40%] h-[280px] flex items-center justify-center">
        <img
          src={assets.appointment_img}
          alt="Health Care"
          className=" h-[280px] bg-no-repeat bg-cover"
        />
      </div>
    </div>
  );
}

export default Banner;
