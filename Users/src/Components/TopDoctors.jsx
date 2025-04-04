import React from "react";
import { doctors } from "../Assets/assets";

function TopDoctors() {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Top doctors to book </h1>
      <p className="w-1/3 sm:w-1/2 md:w-full text-center text-sm">
        Simpli browse through our extensiv list of trusted doctors.
      </p>
      <div className="grid grid-col-[repeat(auto-fill, minmax(200px,_1fr))] gap-5 pt-4 gap-y-6 px-3 sm:px-0 ">
        {/* Map through the doctors array and display each doctor's information */}
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            {/* Display doctor's image, availability, name, and speciality */}
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>

              <h1 className="">{item.name}</h1>
              <p className="">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button>More</button>
    </div>
  );
}

export default TopDoctors;
