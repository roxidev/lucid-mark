import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import { BiGridAlt } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaRegClipboard } from "react-icons/fa";
// import ToggleBtn from "../Component/ToggleBtn";
import { LuLogIn } from "react-icons/lu";
import LiamDropdown from "../Component/LiamDropdown";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
    console.log("Rashadul");
  };
  return (
    <div className="md:block flex-col w-[295px] h-screen rounded-s-2xl dark:bg-black hidden ">
      {/* -------top section  */}
      <div className="flex items-center  gap-2 px-8 pt-5 mb-1">
        <img src={logo} alt="" className="w-[23px] h-[19px]" />
        <h3 className="text-secondary font-SpaceGrotesk text-lg    lg:text-xl">
          Lucidmark.
        </h3>
      </div>
      {/* button */}
      <div className="flex items-center justify-center mt-7 px-8">
        <button className="w-full py-3 rounded-full bg-secondary_soft_btn">
          <p className="text-xs lg:text-sm text-secondary font-SpaceGrotesk">
            + New Environment
          </p>
        </button>
      </div>
      {/*------------ middle--------- */}
      <div className="flex flex-col  mt-10   ">
        {/*Dashboard  */}
        <NavLink
          to="/"
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500 active:text-secondary 
         focus:text-secondary
         focus:border-secondary "
        >
          <BiGridAlt />

          <p className="text-xs lg:text-sm  font-medium ">Dashboard</p>
        </NavLink>
        {/* Environment */}
        <NavLink
          to="/environment                   "
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary
           focus:text-secondary
         focus:border-secondary 
         duration-500  "
        >
          <CgBox />

          <p className="text-xs lg:text-sm font-medium ">Environment</p>
        </NavLink>
        {/* Tasks */}
        <NavLink
          to="/tasks"
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         focus:text-secondary
         focus:border-secondary
         duration-500  "
        >
          <FaRegClipboard />

          <p className="text-xs lg:text-sm font-medium ">Tasks</p>
        </NavLink>
        {/* Teams */}
        <NavLink
          to="/teams"
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary
           focus:text-secondary
         focus:border-secondary 
         duration-500  "
        >
          <GoPeople />

          <p className="text-xs lg:text-sm font-medium ">Teams</p>
        </NavLink>
        {/* Admin */}
        <NavLink
          to="/admin"
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary
           focus:text-secondary
         focus:border-secondary 
         duration-500  "
        >
          <IoSettingsOutline />

          <p className="text-xs lg:text-sm font-medium ">Admin</p>
        </NavLink>
        {/* Login */}
        <NavLink
          to="/login"
          className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary
           focus:text-secondary
         focus:border-secondary 
         duration-500  "
        >
          <LuLogIn />

          <p className="text-xs lg:text-sm font-medium ">Login</p>
        </NavLink>
      </div>
      <div className="w-full flex px-10" onClick={toggleTheme}>
        {/* <ToggleBtn /> */}
      </div>
      {/* -------------bottom section--------- */}
      <div className="px-10 mt-14 lg:mt-16 space-y-4">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img className="w-8 h-8" src={user} alt="" />
            <p className="text-xs lg:text-sm font-medium">Liam Trampota</p>
          </div>
          <LiamDropdown />
        </div>
        <div className="flex items-center gap-1">
          <IoNotificationsOutline className="w-8 h-8 rounded-full bg-secondary text-white p-2" />
          <p className="text-xs lg:text-sm font-medium">Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
