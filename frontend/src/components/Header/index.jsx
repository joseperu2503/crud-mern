import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = ({children}) => {
    const linkActive = (isActive) => ("hover:text-blue-500 " + (isActive ? "text-blue-500 font-semibold" : "text-slate-400"))
  return (
    <div>
        <div className='w-full bg-slate-50 h-20 flex justify-center items-center'>
            <div className='flex gap-5 text-lg text-slate-700'>
                <NavLink to="/" className={({ isActive }) => linkActive(isActive)} end>Home</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => linkActive(isActive)}>Blogs</NavLink>
            </div>

        </div>
        {children}
    </div>
  )
}

export default Header
