import React, { Fragment, useState } from "react";

import user from "../../assets/user.svg";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Sidebar from "../../Shared/Sidebar";
import Modal from "../../Component/Modal";
import Navbar from "../../Shared/Navbar";

const Teams = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="flex ">
        <Sidebar />
        <div className="w-full p-3 lg:p-5">
          <Navbar />
          <div className="md:h-[calc(100vh-170px)] overflow-y-auto">
            {" "}
            {/* ----------users---------- */}
            <div className="flex flex-col  justify-between lg:flex-row  w-full">
              {/* left */}
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="font-medium">Users</h2>
                <button className="flex items-center justify-center w-32 h-7 p-2 mb-2 rounded-md text-xs text-secondary font-medium bg-secondary_soft_btn hover:bg-default">
                  Invite new user
                </button>
              </div>
              {/* right */}

              <div className="flex flex-col lg:w-8/12 gap-2">
                {/* 1 */}
                <div className="flex justify-between w-full px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className="flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-2  md:gap-4">
                    <button className="flex items-center justify-center gap-2 md:gap-6 text-secondary md:px-6  py-2 text-xs px-2 bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <button className="text-secondary hover:text-error">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex justify-between w-full px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className="flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-2  md:gap-4">
                    <button className="flex items-center justify-center gap-2 md:gap-6 text-secondary md:px-6  py-2 text-xs px-2 bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <button className="text-secondary hover:text-error">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex justify-between w-full px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className="flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-2  md:gap-4">
                    <button className="flex items-center justify-center gap-2 md:gap-6 text-secondary md:px-6  py-2 text-xs px-2 bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <button className="text-secondary hover:text-error">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
                {/* 4 */}
                <div className="flex justify-between w-full px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className="flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-2  md:gap-4">
                    <button className="flex items-center justify-center gap-2 md:gap-6 text-secondary md:px-6  py-2 text-xs px-2 bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <button className="text-secondary hover:text-error">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
                {/* 5 */}
                <div className="flex justify-between w-full px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className="flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-2  md:gap-4">
                    <button className="flex items-center justify-center gap-2 md:gap-6 text-secondary md:px-6  py-2 text-xs px-2 bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <button className="text-secondary hover:text-error">
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-1 md:my-3 lg:my-4" />
            {/* -------Pending Invites------- */}
            <div className="flex flex-col justify-between lg:flex-row">
              <button
                className=" font-medium mb-2 bg-default_soft p-2 rounded-md lg:h-10 hover:text-secondary hover:bg-default "
                onClick={() => setShowModal(true)}
              >
                Pending Invites
              </button>

              <div className="flex flex-col gap-2 lg:w-8/12 ">
                {/* 1*/}
                <div className="flex justify-between w-full  px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className=" md:flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                    <button className="px-3 py-1 rounded-full text-xs text-secondary bg-secondary_soft_btn hover:bg-default">
                      Pending
                    </button>
                  </div>
                  <div className=" flex flex-col md:flex-row justify-around md:gap-4">
                    <button className="px-3 py-1.5 md:py-0 text-secondary   text-xs bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                    </button>
                    <button className="px-3 py-1.5 md:py-0 text-xs text-error rounded-md border border-error hover:bg-warning_soft">
                      Revoke invite
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex justify-between w-full  px-2 md:px-6 py-2 rounded-md bg-default_soft">
                  <div className=" md:flex gap-4 items-center">
                    <img className="w-8 md:w-10 " src={user} alt="" />
                    <p className="text-sm md:text-base">Liam Trampota</p>
                    <button className="px-3 py-1 rounded-full text-xs text-secondary bg-secondary_soft_btn hover:bg-default">
                      Pending
                    </button>
                  </div>
                  <div className=" flex flex-col md:flex-row justify-around md:gap-4">
                    <button className="px-3 py-1.5 md:py-0 text-secondary   text-xs bg-secondary_soft_btn rounded-md hover:bg-default">
                      Administrator
                    </button>
                    <button className="px-3 py-1.5 md:py-0 text-xs text-error rounded-md border border-error hover:bg-warning_soft">
                      Revoke invite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};

export default Teams;
