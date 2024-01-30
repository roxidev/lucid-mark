import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const LiamDropdown = () => {
  const [dropdownOpen, setdropwonOpen] = useState(false);
  return (
    <div className="">
      <div className="fixed">
        <button
          onClick={() => setdropwonOpen(!dropdownOpen)}
          className=" rounded-lg   
         hover:bg-default_soft focus:bg-default_soft  "
        >
          {dropdownOpen ? (
            <IoIosArrowUp className=" -rotate-90" />
          ) : (
            <IoIosArrowDown className="-rotate-90 " />
          )}
        </button>
        <div>
          {dropdownOpen && (
            <div className=" ">
              <ul>
                <li>
                  <a
                    href="#"
                    className="flex  items-center    text-slate-400 hover:text-default_dark hover:bg-default_soft_pro focus:bg-default_soft focus:text-default_dark"
                  >
                    Liam Trampota
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiamDropdown;
