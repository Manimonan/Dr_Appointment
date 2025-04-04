import React from "react";
import { assets } from "../Assets/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row flex-wrap rounded-lg bg-purple-400 px-6 md:px-10   ">
      {/* ----------- Left Side -------- */}
      <div className="md:w-1/2 flex flex-col gap-4 items-start justify-center py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <p className="text-xl md:text-2xl lg:text-3xl text-black font-semibold">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p className="text-sm text-black font-normal">
            Simply brows through our extensive list of trusted doctors <br />
            shedule your appointment hassle free
          </p>
        </div>
        <a
          href="#speciality"
          className="bg-white text-black font-medium px-4 py-2 rounded-lg flex items-center gap-3"
        >
          Book Appointment
          <img className="w-3" src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* ----------- Right Side -------- */}

      <div className="md:w-1/2 relative">
        <img
          className="w-full md:absolute bottom-0 h-auto rounded-lg "
          src={assets.header_img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
