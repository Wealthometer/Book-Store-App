import React from 'react'
import { IoLibraryOutline } from 'react-icons/io5'
import { PiEnvelopeDuotone } from 'react-icons/pi'
import { TbBrandBlogger, TbHome } from 'react-icons/tb'
import { NavLink } from 'react-router-dom' 
import '../index.css' 

const Navbar = (containerStyles) => { 
 
  const navItems = [
    {to : "/", label: "Home", icon : <TbHome />},
    {to : "/shop", label: "Shop", icon : <IoLibraryOutline />},
    {to : "/blog", label: "Blog", icon : <TbBrandBlogger />},
    {to : "malito:infozibooka.com", label: "Contact", icon : <PiEnvelopeDuotone />},
  ]
  return (
    <nav className={containerStyles}>
      {navItems.map(({to, label, icon}) => (
        <div key={label}>
          <NavLink to={to} className={({isActive}) => `${isActive ? "bg-white ring-1 ring-slate-900" : ""} flexCenter gap-x-2 px-3 py-1.5 rounded-b-full`}>
            <span className='text-xl'>{icon}</span>
            <span className='medium-16'>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar