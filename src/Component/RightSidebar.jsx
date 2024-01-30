import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiPencilSimple } from "react-icons/pi";
import user from "../assets/user.svg";
import screenshort from '../assets/screenShort.png'

const RightSidebar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "roxy") onClose();
  };
  return (
    <div
      className="fixed bg-black opacity-80 h-screen inset-0  flex justify-end indent-0"
      id="roxy"
      onClick={handleClose}
    >
      <div className=" w-5/6  md:w-[400px] p-5 bg-white">
        <div className="flex justify-between">
          <button
            className="flex items-center text-xs text-default_dark
          bg-default_soft rounded-sm px-2 py-0.5 hover:bg-default"
            onClick={() => onClose()}
          >
            {" "}
            <IoIosArrowDown className="-rotate-90" /> Back
          </button>
          <div className="flex gap-2 text-default_dark">
            <IoShareSocialOutline />
            <PiPencilSimple />
          </div>
        </div>
        <button className="text-sm bg-primary_btn px-2 py-1 rounded-md md:mt-4 hover:bg-primary">
          Development
        </button>
        <h2 className="text-xl md:2xl md:3xl font-semibold md:mt-3">
          Comments about <br /> Access Management
        </h2>
        <p className="text-sm text-default_dark md:mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos vitae
          animi nihil, molestias tempora sit possimus ipsam, non magni
          voluptate, corrupti natus vel in? Deserunt.
        </p>
        {/* Assigned */}
        <div className="flex justify-between lg:mt-4">
          <p className="text-xs md:text-sm text-default_dark top-0">Assigned</p>
          <div className="grid grid-cols-2  md:gap-4">
            {/* 1 */}
            <div className="flex items-center gap-2">
              <img src={user} className="w-7 md:w-8" />
              <h3 className="text-xs md:text-sm font-medium">Liam Trampota</h3>
            </div>
            {/* 2 */}
            <div className="flex items-center gap-2">
              <img src={user} className="w-7 md:w-8" />
              <h3 className="text-xs md:text-sm font-medium">Liam Trampota</h3>
            </div>
            {/* 3 */}
            <div className="flex items-center gap-2">
              <img src={user} className="w-7 md:w-8" />
              <h3 className="text-xs md:text-sm font-medium">Liam Trampota</h3>
            </div>
            {/* 4 */}
            <div className="flex items-center gap-2">
              <img src={user} className="w-7 md:w-8" />
              <h3 className="text-xs md:text-sm font-medium">Liam Trampota</h3>
            </div>
          </div>
        </div>
        {/* Created */}
        <div className="flex gap-2 lg:gap-5 lg:mt-3">
          <p className="text-xs md:text-sm text-default_dark ">Created</p>
          <input
            type="text"
            placeholder="Nov 2,2023"
            className="placeholder:text-dark_black font-medium text-sm"
          />
        </div>
        {/* Status Review Button */}
        <div className="flex gap-5 mt-1 lg:mt-3">
          <button className="text-sm text-default_dark px-2 py-0.5 rounded-md hover:bg-default_soft">
            Status
          </button>
          <button className="text-sm text-warning px-2 py-0.5 rounded-md bg-warning_soft hover:bg-yellow-100 ">
            Review
          </button>
        </div>
        <div className="flex items-end gap-5 border-b-2 ">
          <button className="text-sm text-secondary font-medium border-b-2 border-white hover:border-secondary ">
            Preview
          </button>
          <button className="flex items-center gap-1 text-sm text-secondary font-medium border-b-2 border-white hover:border-secondary lg:mt-3 bottom-0 ">
            Attachmets <span className="px-1.5 bg-default rounded-full">2</span>
          </button>
        </div>
        <img src={screenshort} alt="" className="mt-3" />
      </div>
    </div>
  );
};

export default RightSidebar;
