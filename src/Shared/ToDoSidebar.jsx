import React from "react";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import { BiGridAlt } from "react-icons/bi";
import { CgBox } from "react-icons/cg";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegClipboard } from "react-icons/fa";


const ToDoSidebar = () => {
  return (
    <div className="flex flex-col w-[295px] h-screen  rounded-s-2xl bg-default_soft justify-between">
      {/* logo */}
      <div className="">
        <div className="flex items-center  gap-2 p-10">
          <img src={logo} alt="" className="w-[23px] h-[19px]" />
          <h3 className="text-secondary font-SpaceGrotesk text-lg">
            Lucidmark.
          </h3>
        </div>
        {/* button */}
        <div className="flex items-center justify-center">
          <button className=" px-8 py-3 rounded-md bg-secondary_soft_btn">
            <p className="text-xs  text-secondary font-SpaceGrotesk">
              + Create Environment
            </p>
          </button>
        </div>
        {/* icon section */}
        <div className="flex flex-col  mt-10   ">
          {/*Dashboard  */}
          <div
            className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500  "
          >
            <BiGridAlt />

            <p className="text-xs  font-medium ">Dashboard</p>
          </div>
          {/* Environment */}
          <div
            className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500  "
          >
            <CgBox />

            <p className="text-xs  font-medium ">Environment</p>
          </div>
          {/* Tasks */}
          <div
            className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500  "
          >
            <FaRegClipboard />

            <p className="text-xs  font-medium ">Tasks</p>
          </div>
          {/* Teams */}
          <div
            className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500  "
          >
            <GoPeople />

            <p className="text-xs  font-medium ">Teams</p>
          </div>
          {/* Admin */}
          <div
            className="flex items-center gap-3 pl-8 py-4 border-l-4 border-default_soft   hover:text-secondary  hover:border-l-4 hover:border-primary 
         duration-500  "
          >
            <IoSettingsOutline />

            <p className="text-xs  font-medium ">Admin</p>
          </div>
        </div>
      </div>
      {/* Notification */}
      <div className=" px-10 space-y-4 pb-6">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img className="w-8 h-8" src={user} alt="" />
            <p className="text-xs font-medium">Liam Trampota</p>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="flex items-center gap-1">
          <IoNotificationsOutline className="w-8 h-8 rounded-full bg-secondary text-white p-2" />
          <p className="text-xs font-medium">Notifications</p>
        </div>
      </div>
    </div>
  );
};

export default ToDoSidebar;
