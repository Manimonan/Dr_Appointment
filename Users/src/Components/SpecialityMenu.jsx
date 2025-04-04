import React from "react";
import { Link } from "react-router-dom";
import { specialityData } from "../Assets/assets";

// This component renders a menu of specialities with images and links to respective pages.
// It uses the `specialityData` array to dynamically generate the menu items.
function SpecialityMenu() {
  return (
    <div
      className="flex flex-col items-center gap-4 py-16 text-gray-800"
      id="speciality"
    >
      <h1 className="text-3xl fount-medium">Find by speciality</h1>
      <p className="text-sm text-gray-600 font-normal text-center w-3/4 md:w-1/2">
        Simply brows through our extensive list of trusted doctor,
        <br />
        Shedule your appointments hassle free.
      </p>

      <div className="flex sm:justify-center gap-4 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 "
            to={`/doctors/${item.speciality}`}
            key={index}
          >
            <img className="w-16 sm:w-24 mb-2 " src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenu;
