import React from 'react'
import {assets} from '../Assets/assets'
import { NavLink , useNavigate } from 'react-router-dom'

function Navbar() {
  
    const navigate = useNavigate()

    // const[showMenu,setShowMenu] = React.useState(false)
    const [token,setToken] = React.useState(true)

  return (
    <div className='flex  items-center justify-between text-sm  gap-4 bg-white  py-4 mb-5 border-b border-b-gray-400'> 
      <img className='w-44 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden md:flex items-start gap-5 '>
        <NavLink to='/'>
            <li className='py-1 text-md font-semibold'>HOME</li>
            <hr  className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1 text-md font-semibold'> ALL DOCTORS</li>
            <hr  className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1 text-md font-semibold'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1 text-md font-semibold'>CONTACT</li>
            <hr  className='border-none outline-none h-0.5 bg-blue-400 w-3/5 m-auto hidden'/>  
        </NavLink>
      </ul>

      <div className='flex items-center gap-4'>
        {
            token ? 
            <div className='flex items-center gap-4  cursor-pointer relative group '>
               <img className='w-8 rounded-full' src={assets.profile_pic}  alt="" />
               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
               <div className={`absolute top-0 right-0 pt-14 text-base  w-40 z-20 hidden group-hover:block`}>
                <div className=' min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
               </div>
            </div>
            :
            <button onClick={()=>navigate("/login")} className='bg-blue-400 text-white px-8 py-3  rounded-full font-light hidden md:block cursor-pointer'>Create Account</button>
        }
        
      </div>
    </div>
  )
}

export default Navbar
