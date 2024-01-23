import React from 'react'
import { IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { CgMenu } from 'react-icons/cg';
import { GrGrid } from 'react-icons/gr';
import screenshort from '../../assets/screenShort.png';
import { LuCamera } from "react-icons/lu";
import { PiVideoCamera } from "react-icons/pi";
import Sidebar from '../../Shared/Sidebar';

const ListView = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5 bg-default_soft_pro ">
        <div className="flex flex-col gap-2 lg:flex-row  lg:justify-between mt-2">
          <p className="text-xs text-black font-medium">Environment</p>
          <div className="flex items-center gap-2">
            <button className=" w-32 h-7 text-xs text-white px-3 bg-secondary rounded-full">
              + New Evironment
            </button>
            <IoSettingsOutline className="w-8 h-8 p-2 text-secondary rounded-full bg-default_soft_pro" />
            <IoNotificationsOutline className="w-8 h-8 p-2 text-secondary rounded-full bg-default_soft_pro" />
          </div>
        </div>
        {/* Metanote */}
        <div className="flex  justify-between mt-2">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl text-secondary font-medium">Metanote</h2>
            <IoIosArrowForward className="text-xl text-secondary top-1.5 relative rotate-90" />
          </div>
          <div className="flex items-center gap-6">
            <button className=" w-28 h-7 text-xs  text-secondary rounded-sm bg-secondary_soft_btn">
              Manage fields
            </button>
            <button className="w-20 h-7 text-xs  text-secondary rounded-sm bg-secondary_soft_btn">
              Export all
            </button>
            <div className="flex items-center gap-2">
              <CgMenu className="hover:text-secondary " />
              <GrGrid className="hover:text-secondary " />
            </div>
            <div className="text-xs text-default_dark">
              Order by{" "}
              <span className="text-xs text-secondary font-medium">
                Last edit
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 pr-32">
          <h2 className="text-xs text-default_dark -pr-5">Preview</h2>
          <h2 className="text-xs text-default_dark pr-5">Number</h2>
          <h2 className="text-xs text-default_dark pr-5">Request/Type</h2>
          <h2 className="text-xs text-default_dark  ">Description</h2>
          <h2 className="text-xs text-default_dark pr-10">Media</h2>
          <h2 className="text-xs text-default_dark ">Status</h2>
        </div>
        <div className="flex flex-col gap-2  mt-5 h-[calc(100vh-210px)] overflow-y-auto">
          {/* 1 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 5 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 6 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
          {/* 7 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-sm">#1</h3>
            </div>
            <div className="text-sm">Contact form</div>
            <div className="text-sm">Contact form</div>
            <div className="flex gap-4">
              <LuCamera className="text-secondary " />
              <PiVideoCamera />
            </div>
            <div className="w-16 text-center text-warning text-xs pb-1 pt-0.5 rounded-full bg-warning_soft">
              Review
            </div>
            <div className="flex gap-6">
              <p className="text-xs text-secondary font-semibold">Export</p>
              <p className="text-xs text-secondary font-semibold">Details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListView