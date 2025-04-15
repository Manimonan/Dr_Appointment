import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/App Context";

function Doctors() {
  const navigate = useNavigate();
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter doctors based on the selected speciality
  const applyFilter = () => {
    if (speciality) {
      const filtered = doctors.filter(
        (doctor) => doctor.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilteredDoctors(filtered);
    } else {
      setFilteredDoctors(doctors);
    }
  };
  // Call the filter function when the component mounts or when the speciality changes
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  // If no speciality is selected, show all doctors

  return (
    <div className="">
      <p className="text-gray-700">Browse through the doctors specialists</p>
      <div className="flex flex-col sm:flex-row items-start gap-20 py-16 mx-4">
        <button
          className={`py-1 px-3 border rounded text-xl transition-all cursor-pointer sm:hidden ${
            showFilters ? "bg-blue-600 text-white" : ""
          }`}
          onClick={() => setShowFilters((priv) => !priv)}
        >
          Filters
        </button>
        <div className={` flex flex-col text-sm text-gray-800 gap-4  ${showFilters ? "flex" : "hidden sm:flex"}`}>
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "General physician"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            General Physicion
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "Gynecologist"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "Dermatologist"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "Pediatricians"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "Neurologist"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologist")
            }
            className={`w-[90vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-500 rounded transition-all cursor-pointer hover:bg-blue-50 hover:text-gray-800 ${
              speciality === "Gastroenterologist"
                ? "bg-blue-50 text-gray-800 font-semibold"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 pt-4 gap-y-6 px-3 sm:px-0 ">
          {/* Map through the filtered doctors array and display each doctor's information */}
          {filteredDoctors.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointments/${item._id}`)}
              // Navigate to the doctor's profile page when clicked
              className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
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
      </div>
    </div>
  );
}

export default Doctors;
