import React, { useState } from 'react'
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import screenShort from '../../assets/screenShort.png';
import user from '../../assets/user.svg';
import { FaRegEye } from 'react-icons/fa';
import Sidebar from '../../Shared/Sidebar';
import Navbar from '../../Shared/Navbar';
import RightSidebar from '../../Component/RightSidebar';



const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex ">
      <Sidebar />
      <RightSidebar isVisible={showModal} onClose={() => setShowModal(false)} />
      <div className="w-full p-5">
        <Navbar />
        {/* card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-default_soft gap-5 w-full p-10 rounded-xl mt-10 h-[calc(100vh-200px)] overflow-y-auto">
          {/* card 1 */}
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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
          <div
            className="bg-white p-5 rounded-xl "
            onClick={() => setShowModal(true)}
          >
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