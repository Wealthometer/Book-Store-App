import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from '../assets/logo.png'
import userImg from '../assets/user.png'
import { FaBars, FaBarsStaggered } from "react-icons/fa6"
import { FaSearch } from "react-icons/fa"
import { RiUserLine } from "react-icons/ri"
import Navbar from './Navbar'

const Header = () => {

    const [menuOpened, setmenuOpened] = useState(false)
    const [showSearch, setshowSearch] = useState(false)

    return (
    <header>
      {/* Logo */}
      <div className="flex flex-1">
        <Link to={"/"} className="bold-22 xl:bold-28 flex items-end gap-1">
            <img src={logoImg} alt="logo" className="hidden sm:block h-12" />
            <div  className="sm:relative top-1 5">
                Zibook<span className="text-secondary">a.</span>
            </div>
        </Link>
      </div>

      {/* Navbar for mobile device */}
      <div className="flex-1">
        <Navbar setmenuOpened={setmenuOpened} containerStyles={`${menuOpened ? "flex" : "hidden"}`} />
      </div>
    </header>
  );
};

export default Header;
