import React from "react";
import { assets } from "../Assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between bg-white p-4 mt-4">
        {/* -----------Left Section ---------- */}
        <div className="flex flex-col items-center justify-center w-full md:w-[40%]">
          <img
            src={assets.logo}
            alt="Logo"
            className="w-[100px] h-[30px] mx-auto mt-4"
          />
          <p className="text-center text-gray-600 text-sm py-2">
            Your health is our priority. Find the best doctors and specialists
            near you.
          </p>
        </div>
        {/* -----------Middle Section ---------- */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[60%] mt-4 md:mt-0">
          <div>
            <p className="text-sm font-semibold underline-offset-1">COMPANY</p>
            <ul className="text-gray-600 text-center text-sm py-2">
              <li className="py-1">Home</li>
              <li className="py-1">About Us</li>
              <li className="py-1">Privacy Policy</li>
              <li className="py-1">Terms of Service</li>
            </ul>
          </div>
          {/* -----------Right Section ---------- */}
          <div>
            <p className="text-sm font-semibold underline-offset-1">
              GET IN TOUCH
            </p>
            <ul className="text-gray-600 text-center text-sm py-2">
              <li className="py-1">Contact Us</li>
              <li className="py-1">Support</li>
              <li className="py-1">FAQ</li>
              <li className="py-1">Feedback</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold underline-offset-1">
              FOLLOW US
            </p>
            <ul className="text-gray-600 text-center text-sm py-2">
              <li className="py-1">Facebook</li>
              <li className="py-1">Twitter</li>
              <li className="py-1">Instagram</li>
              <li className="py-1">LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      {/* -----------Bottom Section ---------- */}
      <p className="text-center text-gray-600 text-sm py-4">
        &copy; 2023 Health Care Platform. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
