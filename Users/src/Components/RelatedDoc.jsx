import React,{useEffect, useContext} from 'react'
import { AppContext } from '../Context/App Context';
import { useNavigate } from 'react-router-dom';

function RelatedDoc({ docId,speciality }) {

    const { doctors } = useContext(AppContext);
    const navigate = useNavigate();

    const [relatedDoctors, setRelatedDoctors] = React.useState([]);

    useEffect(() => {
        // Filter the doctors array to find doctors with the same speciality
        const filteredDoctors = doctors.filter((doctor) => doctor.speciality === speciality && doctor._id !== docId);
        setRelatedDoctors(filteredDoctors);
    }
    , [docId, speciality, doctors]);

   
  return (
    <div className=" flex flex-col sm:flex-row  gap-5 pt-4 gap-y-6 px-3 sm:px-0 mt-10 ml-10 sm:ml-0">
    {/* Map through the doctors array and display each doctor's information */}
    {relatedDoctors.slice(0,4).map((item, index) => (
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
  )
}

export default RelatedDoc;
