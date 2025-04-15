import React from 'react'
import { assets } from "../Assets/assets";

function Abouts() {
  return (
    <div>
      <h1 className='text-4xl text-center font-bold'>About Us</h1>
      <div className='flex flex-col md:flex-row gap-10 items-center justify-center py-16'>
        <img className='w-full max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500'>      
          <p>welcome to our clinic, your trusted partner in maneging your helthcare need conveniantly and efficiently.</p>
          <p>At [Your Website Name], we believe that accessing quality healthcare should be simple and convenient. We connect you with trusted doctors and specialists, allowing you to easily browse profiles, check availability, and book appointments online. Our goal is to streamline the healthcare process, saving you time and ensuring you get the care you need, when you need it.</p>
          <b className='text-gray-800 font-semibold'>Our vision</b>
          <p>[Your Website Name] is dedicated to revolutionizing the way you manage your healthcare. We provide a user-friendly platform where you can discover and book appointments with a wide range of experienced doctors and medical professionals. We understand the importance of your health and strive to make the process of finding the right care as seamless and efficient as possible. From general practitioners to specialized consultants, we empower you to take control of your health journey.</p>
        </div>
      </div>
      <div>
        <p className='text-gray-800 font-semibold text-2xl mt-4 mb-3'>WHY CHOOSE US</p>

      </div>
      <div className='flex flex-col md:flex-row  items-center justify-center  mb-15'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] bg-amber-50 hover:bg-blue-400 hover:text-amber-50 transition-all duration-300'>
          <p className=' font-semibold text-xl'>Convenience</p>
          <p className='text-sm '>Our platform allows you to book appointments from the comfort of your home or on the go. No more waiting in long lines or making phone calls.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] bg-amber-50 hover:bg-blue-400 hover:text-amber-50 transition-all duration-300'>
          <p className=' font-semibold text-xl'> Specialists</p>
          <p className='text-sm '>We offer access to a diverse network of doctors and specialists, ensuring you can find the right healthcare professional for your needs.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-6 text-[15px] bg-amber-50 hover:bg-blue-400 hover:text-amber-50 transition-all duration-300'>
          <p className=' font-semibold text-xl'>Friendly Interface</p>
          <p className='text-sm '>Our website is designed to be intuitive and easy to navigate, making it simple for you to find the information you need.</p>
        </div>
       
      </div>
    </div>
  )
}

export default Abouts
