import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';
import { CgMenu } from 'react-icons/cg';
import { GrGrid } from "react-icons/gr";
import { IoChatbubbleEllipsesOutline, IoNotificationsOutline, IoSettingsOutline } from 'react-icons/io5';
import scrinShort from '../../assets/screenShort.png'
import user from '../../assets/user.svg'
import { LuCamera } from 'react-icons/lu';
import { FaRegEye } from 'react-icons/fa';

import Sidebar from '../../Shared/Sidebar';

const GridView = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="w-full p-5 bg-default_soft_pro">
        <div className="flex items-center justify-between">
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
        <div className="flex flex-col gap-2 lg:flex-row  lg:justify-between ">
          <div className="flex items-center gap-4">
            <h2 className="text-4xl text-secondary font-medium mb-">
              Metanote
            </h2>
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
              <CgMenu className="text-default_dark hover:text-secondary " />
              <GrGrid className="text-default_dark hover:text-secondary " />
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 h-[calc(100vh-170px)] overflow-y-auto">
          {/* card 1 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7 " />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 4 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 5 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 6 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 7 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 8 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 9 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 10 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 11 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
          {/* card 12 */}
          <div className="relative rounded-2xl border border-default">
            <img src={scrinShort} alt="" className="w-full rounded-t-2xl " />
            <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-white text-secondary top-2  left-2 p-1.5">
              <LuCamera />
            </div>
            <div className="px-3 py-1">
              <h3 className="text-sm font-medium ">
                Comments about Access Management
              </h3>
              <div className="flex justify-between mt-3">
                <div className="flex gap-1 ">
                  <img src={user} className="w-7" />
                  <p className="text-xs">Liam Trampota</p>
                </div>
                <div className="flex gap-1">
                  <p className="text-xs text-[#B2B2B2]">Not Shared</p>
                  <IoIosArrowForward className="rotate-90 text-default_dark" />
                </div>
              </div>
              {/*  */}
              <div className="flex justify-between m-2">
                <div className="flex gap-1">
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    3<FaRegEye />
                  </div>
                  <div className="flex items-center justify-center gap-0.5 w-8  bg-secondary_soft_btn rounded-full text-xs text-secondary">
                    1<IoChatbubbleEllipsesOutline />
                  </div>
                </div>
                <span className="text-xs text-[#B2B2B2]">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GridView