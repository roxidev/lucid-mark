import React, { useState } from "react";
import { FaEnvelopeOpenText, FaUser } from "react-icons/fa";
import { PiUserListFill } from "react-icons/pi";
import { HiOutlineMinus } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";



const Account = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="w-10/12  md:w-8/12 lg:w-6/12 mx-auto bg-white rounded-[4px] border-t-2 border-cyan-400">
        {/* Account */}
        <div className="flex items-center gap-1 py-2 px-4 bg-default_soft_pro border-b">
          <FaUser className="text-lg " />
          <h3 className="text-base md:text-lg font-semibold">Update account</h3>
        </div>
        {/* profile & Notification */}
        <div className="flex items-center p-3 ">
          <div className="w-full flex items-center gap-1.5 border border-b-transparent px-4 py-2 rounded-md">
            <div className="bg-black px-0.5 rounded-[3px]">
              <PiUserListFill className="text-xs md:text-sm text-white" />
            </div>
            <h2 className="text-xs md:text-sm text-default_dark">Profil</h2>
          </div>
          <div className="flex items-center gap-1.5 w-full bg-black px-4 py-2 rounded-md border-y">
            <div className=" ">
              <FaEnvelopeOpenText className="text-xs md:text-sm text-white" />
            </div>
            <h3 className="text-white text-xs md:text-sm">Notifications</h3>
          </div>
        </div>
        {/* Input */}
        <div className="flex flex-col gap-1 p-3">
          {/* 1 */}
          <div className="flex items-center justify-between">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">Email</h3>
            <input
              className="w-8/12 border py-0.5 px-2 rounded-[3px] text-xs md:text-sm placeholder:text-default_dark hover:bg-default_soft outline-none"
              type="email"
              placeholder="demo@nucleon-security.com"
            />
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">
              First name
            </h3>
            <input
              className="w-8/12 border py-0.5 px-2 rounded-[3px] text-xs md:text-sm placeholder:text-default_dark hover:bg-default_soft outline-none"
              type="text"
              placeholder="Demo"
            />
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">
              Last name
            </h3>
            <input
              className="w-8/12 border py-0.5 px-2 rounded-[3px] text-xs md:text-sm placeholder:text-default_dark hover:bg-default_soft outline-none"
              type="email"
              placeholder="Nucleon"
            />
          </div>
        </div>
        {/* Authoriz */}
        <div className="px-3 ">
          <div className="flex items-center  text-xs md:text-sm py-2 text-slate-400 border-b">
            <HiOutlineMinus />
            Authorizations
          </div>
        </div>
        {/* Entities */}
        <div className="flex items-center p-3">
          <div className="w-4/12 text-xs md:text-sm font-semibold">
            Entities
          </div>
          <div className="w-8/12 flex flex-wrap gap-0.5 border rounded-[3px] p-0.5">
            {/* 1 */}
            <div className="flex items-center text-default_dark text-xs md:text-sm bg-default_soft px-2 rounded-[3px]">
              <RxCross2 className="text-xs" />
              Nucleon-Demo
            </div>
            {/* 2 */}
            <div className="flex items-center text-default_dark text-xs md:text-sm bg-default_soft px-2 rounded-[3px]">
              <RxCross2 className="text-xs" />
              Training
            </div>
            {/* 3 */}
            <div className="flex items-center text-default_dark text-xs md:text-sm bg-default_soft px-2 rounded-[3px]">
              <RxCross2 className="text-xs" />
              Nucleon-Demo CMAR
            </div>
            {/* 4 */}
            <div className="flex items-center text-default_dark text-xs md:text-sm bg-default_soft px-2 rounded-[3px]">
              <RxCross2 className="text-xs" />
              Nucleon-Demo ACH
            </div>
            {/* 5 */}
            <div className="flex items-center text-default_dark text-xs md:text-sm bg-default_soft px-2 rounded-[3px]">
              <RxCross2 className="text-xs" />
              Nucleon-Demo BED
            </div>
          </div>
        </div>
        {/* Authoriz */}
        <div className="px-3 ">
          <div className="flex items-center  text-xs md:text-sm py-2 text-slate-400 border-b">
            <HiOutlineMinus />
            Authorizations
          </div>
        </div>
        {/* Input-Password */}
        <div className="flex flex-col gap-1 p-3">
          {/* 1 */}
          <div className="flex items-center justify-between">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">
              Password
            </h3>
            <input
              className="w-8/12 border py-0.5 px-2 rounded-[3px]  hover:bg-default_soft outline-none"
              type="password"
            />
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">
              Confirm Password
            </h3>
            <input
              className="w-8/12 border py-0.5 px-2 rounded-[3px] hover:bg-default_soft outline-none"
              type="text"
            />
          </div>
        </div>
        {/* one Time Pass */}
        <div className="flex flex-col px-3 ">
          <div className="flex items-center justify-between border-b pb-5">
            <h3 className="w-4/12 text-xs md:text-sm font-semibold">
              One Time Password
            </h3>
            {/* Toggle Btn */}
            <div className="flex items-center w-9 h-5 bg-gray-400 rounded-full border-2 border-gray-400">
              <span className="h-4 w-4 bg-white rounded-full"></span>
            </div>
          </div>
        </div>
        {/* 3 btn */}
        <div className="flex justify-between px-3 py-2">
          <button className="text-error text-xs md:text-sm px-1.5 py-0.5 border border-error rounded-[3px]">
            Delete
          </button>
          <div className="flex items-center gap-1">
            <button className="text-default_dark text-xs md:text-sm px-1.5 py-0.5 bg-default border  rounded-[3px]">
              Update
            </button>
            <button className="text-default_dark text-xs md:text-sm px-1.5 py-0.5 bg-default border  rounded-[3px]">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
