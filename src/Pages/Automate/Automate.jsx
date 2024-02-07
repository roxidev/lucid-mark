import React from "react";
import { FaFileDownload, FaPlus, FaPowerOff } from "react-icons/fa";
import { MdFormatListNumbered } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const Automate = () => {
  return (
    <div className="bg-black h-screen ">
      <div className="w-10/12  md:w-8/12 lg:w-6/12 mx-auto bg-white rounded-[4px] border-t-2 border-cyan-400">
        {/* automate */}
        <div className="flex items-center gap-1 py-2 px-4 bg-default_soft_pro border-b">
          <MdFormatListNumbered className="text-lg " />
          <h3 className="text-base md:text-lg font-semibold">
            Create automated actions
          </h3>
        </div>
        <div className="px-6">
          <p className="text-xs py-2">
            1 endpoint selected for the following remote actions
          </p>
          {/* left sight,s 3 icons */}
          <div className="flex px-0.5">
            <div className=" flex flex-col  w-0 h-auto border border-cyan-400 pt-4">
              <div className="flex items-center flex-col gap-52 relative">
                <button className="flex items-center justify-center w-7 h-7 border border-cyan-400 rounded-full bg-white ">
                  <FaPowerOff className="text-[10px]" />
                </button>
                <button className="flex items-center justify-center w-7 h-7 border border-cyan-400 rounded-full bg-white p-2 ">
                  <FaFileDownload className="text-[10px]" />
                </button>
                <button className="flex items-center justify-center w-7 h-7 border border-cyan-400 rounded-full bg-white ">
                  <FaPlus className="text-[10px]" />
                </button>
              </div>
            </div>
            <div className="w-full mb-5">
              {/* Shutdown div */}
              <div className="border  w-full mx-2 rounded-sm mb-3">
                <div className="p-2">
                  {/* Shutdown host */}
                  <div className="flex">
                    <h2 className="w-4/12 text-xs font-bold">Type</h2>
                    <div className="w-8/12 flex items-center justify-between border pl-3 py-1 rounded-[3px]">
                      <h3 className="text-xs text-default_dark  ">
                        Shutdown host
                      </h3>
                      <IoIosArrowDown className="text-xs" />
                    </div>
                  </div>
                  {/* Notification */}
                  <div className="flex mb-3">
                    <h2 className="flex items-center gap-0.5 w-4/12 text-xs font-bold">
                      Notification{" "}
                      <div className="flex items-center justify-center  w-3 h-3 rounded-full text-white text-[10px] bg-black">
                        i
                      </div>
                    </h2>
                    <div className="w-8/12 flex items-center justify-between   py-1 rounded-[3px]">
                      {/* Toggle Btn */}
                      <div className="flex items-center w-9 h-5 bg-gray-400 rounded-full border-2 border-gray-400">
                        <span className="h-4 w-4 bg-white rounded-full"></span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* p tag */}
                  <div className="flex items-center gap-0.5 mt-3">
                    <AiOutlineMinus className="text-default_dark" />
                    <p className="text-xs text-default_dark">
                      Host will be shutdown, and rebooted if the option is set
                    </p>
                  </div>
                  {/* Reboot */}
                  <div className="flex mt-3">
                    <h2 className="flex items-center gap-0.5 w-4/12 text-xs font-bold">
                      Reboot
                    </h2>
                    <div className="w-8/12 flex items-center justify-between   py-1 rounded-[3px]">
                      {/* Toggle Btn */}
                      <div className="flex items-center w-9 h-5 bg-gray-400 rounded-full border-2 border-gray-400">
                        <span className="h-4 w-4 bg-white rounded-full"></span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between ">
                    <div></div>
                    <button className="text-error text-xs md:text-sm px-1.5 py-0.5 border border-error rounded-[3px] ">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
              {/* Download div */}
              <div className="border  w-full mx-2 rounded-sm">
                <div className="p-2 ">
                  {/* Download file */}
                  <div className="flex ">
                    <h2 className="w-4/12 text-xs font-bold">Type</h2>
                    <div className="w-8/12 flex items-center justify-between border pl-3 py-1 rounded-[3px]">
                      <h3 className="text-xs text-default_dark  ">
                        Download file
                      </h3>
                      <IoIosArrowDown className="text-xs" />
                    </div>
                  </div>
                  {/* Notification */}
                  <div className="flex mb-3">
                    <h2 className="flex items-center gap-0.5 w-4/12 text-xs font-bold">
                      Notification{" "}
                      <div className="flex items-center justify-center  w-3 h-3 rounded-full text-white text-[10px] bg-black">
                        i
                      </div>
                    </h2>
                    <div className="w-8/12 flex items-center justify-between   py-1 rounded-[3px]">
                      {/* Toggle Btn */}
                      <div className="flex items-center w-9 h-5 bg-gray-400 rounded-full border-2 border-gray-400">
                        <span className="h-4 w-4 bg-white rounded-full"></span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  {/* p tag */}
                  <div className="flex items-center gap-0.5 mt-3">
                    <AiOutlineMinus className="text-default_dark" />
                    <p className="text-xs text-default_dark">
                      Requested files will be downloaded from the selected
                      endpoint
                    </p>
                  </div>
                  {/* file path */}
                  <div className="flex mt-3">
                    <h2 className="flex items-center gap-0.5 w-4/12 text-xs font-bold">
                      File path
                    </h2>
                    <div className="w-8/12 flex items-center justify-between   py-1 rounded-[3px]">
                      {/* Text area */}
                      <textarea
                        name=""
                        id=""
                        cols=""
                        rows="5"
                        className="border w-full"
                        placeholder="C:\User\Admin\file_1.txt
                        "
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full flex justify-between py-2">
                    <div></div>
                    <button className="text-error text-xs md:text-sm px-1.5 py-0.5 border border-error rounded-[3px] ">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Automate;
