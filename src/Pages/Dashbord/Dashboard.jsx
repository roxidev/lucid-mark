import React from 'react'
import { IoChatbubbleEllipsesOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import { IoIosArrowForward } from 'react-icons/io';
import { CgMenu } from 'react-icons/cg';
import { GrGrid } from 'react-icons/gr';
import screenShort from '../../assets/screenShort.png';
import user from '../../assets/user.svg';
import { FaRegEye } from 'react-icons/fa';
import Sidebar from '../../Shared/Sidebar';
import Dropdown from "../../Component/Dropdown";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs lg:text-sm text-black font-medium">
            Environment
          </p>
          <div className="flex items-center gap-2">
            <button className=" w-36 h-7 text-xs  lg:text-sm text-white px-3 bg-secondary rounded-full">
              + New Evironment
            </button>
            <button className="w-8 h-8 p-2 text-secondary rounded-full bg-default_soft_pro">
              <IoSettingsOutline />
            </button>
            <button className="w-8 h-8 p-2 text-secondary rounded-full bg-default_soft_pro">
              <IoNotificationsOutline />
            </button>
          </div>
        </div>
        {/* Metanote */}
        <div className="flex flex-col gap-2 lg:flex-row  lg:justify-between mt-2">
          <div className="flex items-center gap-0.5">
            <h2 className="text-3xl  lg:text-5xl text-secondary font-medium 
            dark:text-default_dark">
              Metanote
            </h2>
            <Dropdown />
          </div>
          <div className="flex items-center gap-6 ">
            <button className=" w-28 h-7 text-xs lg:text-sm text-secondary rounded-sm bg-secondary_soft_btn">
              Manage fields
            </button>
            <button className="w-20 h-7 text-xs lg:text-sm  text-secondary rounded-sm bg-secondary_soft_btn">
              Export all
            </button>
            <div className="flex items-center gap-2">
              <button className="hover:text-secondary focus:text-secondary">
                <CgMenu />
              </button>
              <button className="hover:text-secondary focus:text-secondary">
                <GrGrid />
              </button>
            </div>
            <div className="text-xs text-default_dark">
              Order by{" "}
              <span className="text-xs text-secondary font-medium">
                Last edit
              </span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-default_soft gap-5 w-full p-10 rounded-xl mt-10 h-[calc(100vh-200px)] overflow-y-auto">
          {/* card 1 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="bg-white p-5 rounded-xl ">
            <div className="flex gap-2 ">
              <button className=" w-16 h-8  text-xs rounded-lg font-medium bg-warning_soft text-warning">
                Review
              </button>
              <button className=" w-24 h-8  text-xs rounded-lg font-medium bg-primary_soft">
                Development
              </button>
            </div>
            <h2 className="text-lg font-semibold mt-5">
              Comments about Access Management
            </h2>
            <img src={screenShort} alt="" className="mt-4 cursor-pointer" />
            <div className="flex justify-between mt-6">
              <div className="flex">
                <img src={user} alt="" className="w-5 border-2 border-white" />
                <img
                  src={user}
                  alt=""
                  className="w-5 relative right-2.5 border-2 border-white rounded-full"
                />
              </div>
              <div className="flex gap-2">
                <div className="flex items-center justify-center gap-0.5 text-xs text-default_dark  ">
                  3<FaRegEye />
                </div>
                <div className="flex items-center justify-center gap-0.5  text-xs text-default_dark">
                  1<IoChatbubbleEllipsesOutline />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard