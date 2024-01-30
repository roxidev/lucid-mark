import React from 'react'
import { CgMenu } from "react-icons/cg";
import { GrGrid } from "react-icons/gr";
import Dropdown from '../Component/Dropdown';
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-between">
        <p className="text-xs lg:text-sm text-black font-medium">Environment</p>
        <div className="flex items-center justify-between gap-2">
          <button className="  text-xs  lg:text-sm text-white px-3 py-1 bg-secondary rounded-full hover:bg-primary">
            + New Evironment
          </button>
          <div className="flex gap-1">
            <button
              className=" p-2 text-secondary rounded-full bg-default_soft_pro
           hover:bg-default"
            >
              <IoSettingsOutline />
            </button>
            <button
              className=" p-2 text-secondary rounded-full bg-default_soft_pro
          hover:bg-default"
            >
              <IoNotificationsOutline />
            </button>
          </div>
        </div>
      </div>
      {/* Metanote */}
      <div className="flex flex-col gap-2 lg:flex-row  lg:justify-between mt-2">
        <div className="flex items-center gap-0.5">
          <button
            className="text-3xl  lg:text-5xl text-secondary font-medium 
            dark:text-default_dark"
          >
            Metanote
          </button>
          <Dropdown />
        </div>
        <div className="flex items-center justify-between gap-2 lg:gap-6 ">
          <button className=" w-28 h-7 text-xs lg:text-sm text-secondary rounded-sm bg-secondary_soft_btn hover:bg-primary_soft">
            Manage fields
          </button>
          <button className="w-20 h-7 text-xs lg:text-sm  text-secondary rounded-sm bg-secondary_soft_btn hover:bg-primary_soft">
            Export all
          </button>
          <div className="flex items-center gap-2">
            <Link to="environment">
              <button className="hover:text-secondary focus:text-secondary">
                <CgMenu />
              </button>
            </Link>
            <Link to="gridview">
              <button className="hover:text-secondary focus:text-secondary">
                <GrGrid />
              </button>
            </Link>
          </div>
          <div className="text-xs text-default_dark">
            Order by{" "}
            <button className="text-xs text-secondary font-medium border-b-2 border-white  hover:border-b-2 hover:border-secondary">
              Last edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar