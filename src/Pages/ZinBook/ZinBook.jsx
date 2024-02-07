import React from 'react'
import { FaCheck, FaFilter, FaHistory, FaPlus, FaSatelliteDish, FaSearch, FaThList } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp, IoMdArrowDropdown } from 'react-icons/io';
import { MdMonitor } from 'react-icons/md';
import { SiWindows10 } from "react-icons/si";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ZinBook = () => {
  return (
    <div className="bg-black h-auto lg:h-screen">
      <div className="p-2 flex flex-row gap-2">
        {/* left div */}
        {/* automate navbar */}
        <div className="w-full bg-white border-t-2 border-cyan-300 rounded-[3px]">
          <div className="flex items-center gap-1 py-2 px-4 bg-default_soft_pro border-b  ">
            <MdMonitor className="text-lg " />
            <h3 className="text-base  ">Nucleon-ZenBook-ABO</h3>
          </div>
          {/* Domain */}
          <div className="grid grid-cols-6 px-3 pb-2 pt-8">
            <h3 className="col-span-1 text-sm ">Domain</h3>
            <h3 className="col-span-2 text-sm  font-bold">N/A</h3>
            <h3 className="col-span-1 text-sm ">Status</h3>
            <div className="col-span-2 border rounded-[3px] flex items-center justify-between px-1 py-0.5">
              <div className="flex items-center gap-1 text-sm font-bold">
                <FaCheck className="text-green-800" /> Enabled
              </div>
              <IoMdArrowDropdown className="text-xs" />
            </div>
          </div>
          {/* OS */}
          <div className="grid grid-cols-6 px-3 pb-2">
            <h3 className="col-span-1 text-sm ">OS</h3>
            <h3 className="col-span-2 text-sm  font-bold flex items-center gap-1">
              <SiWindows10 /> Windows 10 Home 22631 x64
            </h3>
            <h3 className="col-span-1 text-sm ">Policy</h3>
            <div className="col-span-2 border rounded-[3px] flex items-center justify-between  pl-2 pr-1 py-1">
              <div className=" text-xs  ">Protection</div>
              <IoIosArrowDown className="text-xs" />
            </div>
          </div>
          {/* Seen */}
          <div className="grid grid-cols-6 px-3 pb-2">
            <h3 className="col-span-1 text-sm md:text-base">Seen</h3>
            <h3 className="col-span-2 text-sm  font-bold ">
              24/01/2024 18:16:03
            </h3>
            <h3 className="col-span-1 text-sm ">Debug</h3>
            <div className="col-span-2 border rounded-[3px] flex items-center justify-between pl-2 pr-1 py-1">
              <div className=" text-xs  ">Enabled</div>
              <IoIosArrowDown className="text-xs" />
            </div>
          </div>
          {/* Ip address */}
          <div className="grid grid-cols-6 px-3 pb-2">
            <h3 className="col-span-1 text-sm ">Ip address</h3>
            <h3 className="col-span-2 text-sm  font-bold ">10.109.97.171</h3>
            <h3 className="col-span-1 text-sm ">Upgrade</h3>
            <div className="col-span-2 border rounded-[3px] flex items-center justify-between pl-2 pr-1 py-1">
              <div className=" "></div>
              <IoIosArrowDown className="text-xs" />
            </div>
          </div>
          {/* Version */}
          <div className="grid grid-cols-6 px-3 pb-7">
            <h3 className="col-span-1 text-sm ">Version</h3>
            <h3 className="col-span-2 text-sm  font-bold ">4.7.1</h3>
            <h3 className="col-span-1 text-sm "></h3>
            <div className="col-span-2 "></div>
          </div>
          {/* 3 Button */}
          <div className="flex justify-between px-6 pb-6">
            <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-sm text-error border border-error ">
              <RiDeleteBin5Fill /> Delete
            </button>
            <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-sm bg-default border   ">
              <FaHistory /> History
            </button>
            <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-sm bg-default border   ">
              <FaCheck /> Apply
            </button>
          </div>
        </div>
        {/* Right div */}
        {/* Remote actions navbar */}
        <div className="w-full bg-white border-t-2 border-cyan-300 rounded-[3px]">
          <div className="flex items-center gap-1 py-2 px-4 bg-default_soft_pro border-b  ">
            <FaSatelliteDish className="text-lg " />
            <h3 className="text-base ">Remote actions</h3>
          </div>
          {/* Button */}
          <div className="flex flex-wrap gap-2 justify-between px-2 pt-2">
            {/* New action */}
            <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-xs bg-default_soft border   ">
              <FaPlus /> New action
            </button>
            <div className="flex gap-2">
              {/* Search */}
              <button className="flex items-center gap-1 px-3 py-1 rounded-[3px] text-xs bg-cyan-300   ">
                <FaSearch /> Search
              </button>
              <span className="flex gap-1">
                {/* results */}
                <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-xs bg-default_soft border ">
                  0/0 results
                </button>{" "}
                {/* Add filter */}
                <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-xs bg-default_soft border   ">
                  <FaFilter /> Add filter
                </button>{" "}
                {/* Columns */}
                <button className="flex items-center gap-1 px-1.5 py-1 rounded-[3px] text-xs bg-default border   ">
                  <FaThList /> Columns
                  <IoMdArrowDropdown />
                </button>
              </span>
            </div>
          </div>
          {/* Request date */}
          <div className="grid grid-cols-11  px-5 pb-2 pt-4 ">
            <h3 className="col-span-3 text-sm text-slate-400 ">Request date</h3>
            <h3 className="col-span-2 text-sm text-slate-400 ">Type</h3>
            <h3 className="col-span-3 text-sm text-slate-400  pl-2">
              Parameter
            </h3>
            <h2 className="col-span-2 text-slate-400 pl-5 ">Status</h2>
          </div>
          <div className=" mx-2 border-b"></div>
          <div className="flex justify-center">
            <IoIosArrowUp className='text-slate-400'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZinBook