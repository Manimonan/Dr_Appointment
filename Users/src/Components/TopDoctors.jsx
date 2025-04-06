import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/App Context.jsx";

function TopDoctors() {
  const { doctors } = useContext(AppContext); // Import the doctors data from context
  const navigate = useNavigate();

  // This component displays a list of top doctors with their images, availability, names, and specialities.
  // It uses a grid layout to show the doctors in a responsive manner.
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800 md:mx-10">
      <h1 className="text-3xl font-medium">Top doctors to book </h1>
      <p className="w-1/3 sm:w-1/2 md:w-full text-center text-sm">
        Simpli browse through our extensiv list of trusted doctors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5 pt-4 gap-y-6 px-3 sm:px-0 ">
        {/* Map through the doctors array and display each doctor's information */}
        {doctors.slice(0, 12).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointments/${item._id}`)}
            // Navigate to the doctor's profile page when clicked
            className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 h-[320px] w-[200px]"
          >
            {/* Display doctor's image, availability, name, and speciality */}
            <img className="bg-blue-50" src={item.image} alt="" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>

              <h1 className="text-gray-900 text-lg font-medium ">
                {item.name}
              </h1>
              <p className="text-gray-600 text-sm ">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-50 text-gray-700 font-semibold px-12 py-3 rounded-full mt-10 cursor-pointer border border-gray-300 hover:bg-blue-100 transition-all duration-500"
        onClick={() => {
          navigate("/doctors");
          scrolTo(0, 0);
        }}
        // Navigate to the doctors page when clicked
      >
        More
      </button>
    </div>
  );
}

export default TopDoctors;
