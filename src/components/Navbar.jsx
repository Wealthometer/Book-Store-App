import React from 'react'
import { IoLibraryOutline } from 'react-icons/io5'
import { PiEnvelopeDuotone } from 'react-icons/pi'
import { TbBrandBlogger, TbHome } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navbar = ({containerStyles, setmenuOpened}) => {

  const navItems = [
    {to : "/", label: "Home", icon : <TbHome />},
    {to : "/shop", label: "Shop", icon : <IoLibraryOutline />},
    {to : "/blog", label: "Blog", icon : <TbBrandBlogger />},
    {to : "malito:infozibooka.com", label: "Contact", icon : <PiEnvelopeDuotone />},
  ]
  return (
    <nav className={{containerStyles, setmenuOpened}}>
      {navItem.map(({to, label, icon}) => (
        <div key={label}>
          <NavLink to={to} className={"flex"}>
            <span className='text-xl'>{icon}</span>
            <span className='medium-16'>{label}</span>
          </NavLink>
        </div>
      ))}
    </nav>
  )
}

export default Navbar