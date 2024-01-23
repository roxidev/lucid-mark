import React, { Fragment, useState } from "react";

import user from "../../assets/user.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import Sidebar from "../../Shared/Sidebar";
import Modal from "../../Component/Modal";

const Teams = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="flex ">
        <Sidebar />
        <div className="w-full p-10">
          <div className="flex items-center justify-between">
            <p className="text-xs text-black font-medium">Environment</p>
            <IoSettingsOutline className="w-10 h-10 p-2 text-secondary rounded-md bg-secondary_soft_btn" />
          </div>
          {/* Metanote */}
          <div className="flex items-center gap-4">
            <h2 className="text-4xl text-secondary font-medium">Metanote</h2>
            <IoIosArrowForward className="text-2xl text-secondary rotate-90" />
          </div>
          <div className="md:h-[calc(100vh-160px)] overflow-y-auto">
            {" "}
            {/* ----------users---------- */}
            <div className="flex flex-col  justify-between lg:flex-row  w-full">
              {/* left */}
              <div className="flex flex-col gap-2 mt-4">
                <h2 className="font-medium">Users</h2>
                <button className="flex items-center justify-center w-32 h-7 p-2 mb-2 rounded-md text-xs text-secondary font-medium bg-secondary_soft_btn">
                  Invite new user
                </button>
              </div>
              {/* right */}

              <div className="flex flex-col lg:w-8/12 gap-2">
                {/* 1 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-36 h-8 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <RiDeleteBin6Line className="text-secondary" />
                  </div>
                </div>
                {/* 2 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-36 h-8 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <RiDeleteBin6Line className="text-secondary" />
                  </div>
                </div>
                {/* 3 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-36 h-8 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <RiDeleteBin6Line className="text-secondary" />
                  </div>
                </div>
                {/* 4 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-36 h-8 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <RiDeleteBin6Line className="text-secondary" />
                  </div>
                </div>
                {/* 5 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-36 h-8 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                      <IoIosArrowForward className="rotate-90 text-xs" />
                    </button>
                    <RiDeleteBin6Line className="text-secondary" />
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6" />
            {/* -------Pending Invites------- */}
            <div className="flex flex-col justify-between lg:flex-row">
              <button
                className="relative lg:top-1 font-medium mb-2 bg-default_soft p-2 rounded-md lg:h-10 hover:text-secondary hover:bg-default "
                onClick={() => setShowModal(true)}
              >
                Pending Invites
              </button>

              <div className=" lg:w-8/12 space-y-2">
                {/* 1*/}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                    <button className="flex items-center justify-center w-15 h-5 p-3 rounded-full text-xs text-secondary bg-secondary_soft_btn">
                      Pending
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-24 h-7 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                    </button>
                    <button className="flex items-center justify-center gap-6  w-24 h-7 text-xs text-error rounded-md border border-error">
                      Revoke invite
                    </button>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex justify-between w-full px-6 py-2 rounded-md bg-default">
                  <div className="flex gap-4 items-center">
                    <img className="w-10 h-10" src={user} alt="" />
                    <p className="">Liam Trampota</p>
                    <button className="flex items-center justify-center w-15 h-5 p-3 rounded-full text-xs text-secondary bg-secondary_soft_btn">
                      Pending
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="flex items-center justify-center gap-6 text-secondary w-24 h-7 text-xs bg-secondary_soft_btn rounded-md">
                      Administrator
                    </button>
                    <button className="flex items-center justify-center gap-6  w-24 h-7 text-xs text-error rounded-md border border-error">
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
