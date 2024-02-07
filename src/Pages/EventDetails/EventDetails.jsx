import React from 'react'
import { FaFile, FaSatelliteDish, FaShieldAlt } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { ImTree } from "react-icons/im";

const EventDetails = () => {
  return (
    <div className="bg-black h-screen p-2">
      <div className=" bg-white  border-t-2 border-cyan-400">
        {/* Event details navbar */}
        <div className="flex justify-between bg-default_soft_pro px-3 py-2 border-b">
          <div className="flex items-center  ">
            <h2 className="flex items-center gap-1">
              <FaFile /> Event details
            </h2>
          </div>
          <button className=" bg-cyan-400 px-1.5 py-2 rounded-[3px]">
            <RxCross2 />
          </button>
        </div>
        {/*  */}
        <div className="px-2 pt-1">
          {/* icon section */}
          <div className="flex flex-col gap-2">
            <button className="w-9 p-2 flex justify-center bg-default rounded-[3px]">
              <ImTree />
            </button>
            <button className="w-9 p-2 flex justify-center bg-default rounded-[3px]">
              <FaShieldAlt />
            </button>
            <button className="w-9 p-2 flex justify-center bg-default rounded-[3px]">
              <FaSatelliteDish />
            </button>
          </div>
          {/* 1 */}
          <div className=""></div>
          {/* 2 */}
          <div className=""></div>
          {/* 3 */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails