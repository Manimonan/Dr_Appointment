import React from 'react'
import {assets} from '../Assets/assets'

function Header() {
  return (
    <div className='flex  flex-col md:flex-row flex-wrap items-center justify-between gap-4 bg-white py-4 mb-5 '>
      {/* ----------- Left Side -------- */}
      <div className='md:w-1/2  flex flex-col gap-4 items-start justify-center py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-black font-semibold'>  Book Appointment <br /> With Trusted Doctors</p>
        <div>
            <img src={assets.group_profiles} alt="" />
            <p>Simply brows through our extensive list of trusted doctors <br />shedule your appointment hassle free</p>
        </div>
        <a href="">
            Book Appointment <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

        {/* ----------- Right Side -------- */}

        <div className='md:w-1/2 relative'> 
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" /> 
        </div>
    </div>
  )
}

export default Header
