import React,{useContext}from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/App Context.jsx'
import { assets } from '../Assets/assets.js';

function Appointment() {

  const { docId } = useParams();


  const {doctors} = useContext(AppContext);

  const [doctorInfo ,setDoctorInfo] = React.useState(null);


  // Find the doctor with the matching docId
  const fatchDocinfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDoctorInfo(docInfo);
   
  };
  
  
  // Call the function to fetch doctor information when the component mounts
  React.useEffect(() => {
    fatchDocinfo();
  }, [docId, doctors]);

  // Display the doctor's information


  return doctorInfo && (
    <div>
      {/* ----------Dr details ---------- */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-16">
        <div>
          <img className="bg-blue-300 w-full sm:max-w-72  rounded-lg" src={doctorInfo.image} alt="" />
        </div>
        
        <div className='flex-1 border border-gray-400 rounded-lg p-5 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 '>
            <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{doctorInfo.name} 
              <img className='w-3' src={assets.verified_icon} alt="" /></p>
            <div className='flex items-center gap-2 text-sm text-gray-500 '>
              <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
              <p className='py-0.5 px-2 border text-xs rounded-4xl'>{doctorInfo.experience}</p>
            </div>
            <div>
              <p className='flex item-center gap-2 text-sm font-medium text-gray-900 mt-3'>About 
                <img className='w-3' src={assets.info_icon} alt="" /></p>
              <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{doctorInfo.about}</p>
            </div>
            <p>
              Appointment Fee: <span className='text-lg font-semibold text-gray-900'>{doctorInfo.fees}</span>
            </p>

        </div>
      </div>
    </div>
  )
}

export default Appointment
