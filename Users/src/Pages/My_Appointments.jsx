import React, {useContext} from 'react'
import { AppContext } from "../Context/App Context";

function My_Appointments() {

   const {doctors} = useContext(AppContext)

  return (
    <div>
      <p className='pb-3 mt-12 text-2xl font-semibold text-zinc-700 border-b'>My Appointments</p>
      <div>
        {
          doctors.slice(0,3).map((item,index)=>(
            <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b border-b-gray-300'>
              <div>
              <img className='w-32 h-auto border rounded-full mt-1 bg-indigo-100' src={item.image} alt="" />
              </div>
              
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='font-semibold text-neutral-700'>{item.name}</p>
                <p>{item.speciality}</p>
                <p>{item.experience}  experience</p>
                <p className='text-zinc-700 font-medium mt-1'>Address</p>
                <p>{item.address.line1}</p>
                <p>{item.address.line2}</p>
                <p><span className='text-zinc-700 font-medium mt-1' >Date & Time : </span> 15, April, 2025 | 18:00</p>

              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end' >
                <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-2xl cursor-pointer  hover:bg-blue-800 hover:text-white'>Pay Online</button>
                <button className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-2xl cursor-pointer  hover:bg-blue-800 hover:text-white'>Cancel appointment</button>
              </div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default My_Appointments
