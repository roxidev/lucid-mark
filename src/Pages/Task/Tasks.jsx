import React from "react";

import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import scrinshort from "../../assets/screenShort.png";
import user from "../../assets/user.svg";
import { FiPaperclip } from "react-icons/fi";
import { GrChat } from "react-icons/gr";
import Sidebar from "../../Shared/Sidebar";

const Tasks = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full p-5 bg-default_soft_pro">
        <div className="flex items-center justify-between">
          <p className="text-xs text-black font-medium">Environment</p>
          <IoSettingsOutline className="w-10 h-10 p-2 text-secondary rounded-md bg-secondary_soft_btn" />
        </div>
        {/* Metanote */}
        <div className="flex items-center gap-4">
          <h2 className="text-4xl text-secondary font-medium">Metanote</h2>
          <IoIosArrowForward className="text-2xl text-secondary rotate-90" />
        </div>
        {/* Search */}
        <div className="flex justify-between mt-6">
          <button className="flex items-center gap-2 w-56 rounded-sm px-4 py-1.5 text-secondary bg-default">
            <IoSearchOutline /> Search
          </button>
          <button className="w-20 rounded-sm px-4 py-1.5 bg-secondary_soft_btn ">
            Filter
          </button>
        </div>
        {/* To do */}
        <div className="flex mt-8 mb-6 ">
          <h2 className="w-1/4 text-xs lg:text-lg font-semibold">To do</h2>
          <h2 className="w-1/4 text-xs lg:text-lg font-semibold">
            In progress
          </h2>
          <h2 className="w-1/4 text-xs lg:text-lg font-semibold">In review</h2>
          <h2 className="w-1/4 text-xs lg:text-lg font-semibold">Done</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 h-[calc(100vh-280px)] overflow-auto">
          {/* --------todo---------- */}
          <div className="w-full p-4 rounded-md bg-default h-auto ">
            <div className="w-full p-3 rounded-md bg-white mb-4">
              <div className="flex gap-2">
                <button className="w-16 text-xs font-medium rounded-sm text-warning bg-warning_soft px-2 py-1">
                  Medium
                </button>
                <button className="w-12 text-xs rounded-sm text-primary font-medium bg-primary_soft px-2 py-1">
                  Dev
                </button>
              </div>
              <p className="text-xs font-medium mt-2">
                Not able to manage default access
              </p>
              <img src={scrinshort} alt="" className="mt-2" />
              {/* icons */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-default_dark">
                    <FiPaperclip /> <span>4</span>
                  </div>
                  <div className="flex items-center gap-2 text-default_dark">
                    <GrChat /> <span>6</span>
                  </div>
                </div>
                <div className="flex">
                  <img src={user} alt="" className="w-5 relative -right-2" />
                  <img src={user} alt="" className="w-5 " />
                </div>
              </div>
            </div>
            <div className="w-full p-3 rounded-md bg-white mb-4">
              <div className="flex gap-2">
                <button className="w-16 text-xs font-medium rounded-sm text-warning bg-warning_soft px-2 py-1">
                  Medium
                </button>
                <button className="w-12 text-xs rounded-sm text-primary font-medium bg-primary_soft px-2 py-1">
                  Dev
                </button>
              </div>
              <p className="text-xs font-medium mt-2">
                Not able to manage default access
              </p>
              <img src={scrinshort} alt="" className="mt-2" />
              {/* icons */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-default_dark">
                    <FiPaperclip /> <span>4</span>
                  </div>
                  <div className="flex items-center gap-2 text-default_dark">
                    <GrChat /> <span>6</span>
                  </div>
                </div>
                <div className="flex">
                  <img src={user} alt="" className="w-5 relative -right-2" />
                  <img src={user} alt="" className="w-5 " />
                </div>
              </div>
            </div>
          </div>
          {/* In progress */}
          <div className="w-full p-4 rounded-md bg-default h-auto"></div>
          {/* in review */}
          <div className="w-full p-4 rounded-md bg-default h-auto">
            <div className="w-full p-3 rounded-md bg-white mb-4">
              <div className="flex gap-2">
                <button className="w-16 text-xs font-medium rounded-sm text-warning bg-warning_soft px-2 py-1">
                  Medium
                </button>
                <button className="w-12 text-xs rounded-sm text-primary font-medium bg-primary_soft px-2 py-1">
                  Dev
                </button>
              </div>
              <p className="text-xs font-medium mt-2">
                Not able to manage default access
              </p>
              <img src={scrinshort} alt="" className="mt-2" />
              {/* icons */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-default_dark">
                    <FiPaperclip /> <span>4</span>
                  </div>
                  <div className="flex items-center gap-2 text-default_dark">
                    <GrChat /> <span>6</span>
                  </div>
                </div>
                <div className="flex">
                  <img src={user} alt="" className="w-5 relative -right-2" />
                  <img src={user} alt="" className="w-5 " />
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="w-full p-3 rounded-md bg-white mb-4">
              <div className="flex gap-2">
                <button className="w-16 text-xs font-medium rounded-sm text-warning bg-warning_soft px-2 py-1">
                  Medium
                </button>
                <button className="w-12 text-xs rounded-sm text-primary font-medium bg-primary_soft px-2 py-1">
                  Dev
                </button>
              </div>
              <p className="text-xs font-medium mt-2">
                Not able to manage default access
              </p>
              <img src={scrinshort} alt="" className="mt-2" />
              {/* icons */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-default_dark">
                    <FiPaperclip /> <span>4</span>
                  </div>
                  <div className="flex items-center gap-2 text-default_dark">
                    <GrChat /> <span>6</span>
                  </div>
                </div>
                <div className="flex">
                  <img src={user} alt="" className="w-5 relative -right-2" />
                  <img src={user} alt="" className="w-5 " />
                </div>
              </div>
            </div>
          </div>
          {/* Done */}
          <div className="w-full p-4 rounded-md bg-default h-auto">
            <div className="w-full p-3 rounded-md bg-white mb-4">
              <div className="flex gap-2">
                <button className="w-16 text-xs font-medium rounded-sm text-warning bg-warning_soft px-2 py-1">
                  Medium
                </button>
                <button className="w-12 text-xs rounded-sm text-primary font-medium bg-primary_soft px-2 py-1">
                  Dev
                </button>
              </div>
              <p className="text-xs font-medium mt-2">
                Not able to manage default access
              </p>
              <img src={scrinshort} alt="" className="mt-2" />
              {/* icons */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-default_dark">
                    <FiPaperclip /> <span>4</span>
                  </div>
                  <div className="flex items-center gap-2 text-default_dark">
                    <GrChat /> <span>6</span>
                  </div>
                </div>
                <div className="flex">
                  <img src={user} alt="" className="w-5 relative -right-2" />
                  <img src={user} alt="" className="w-5 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
