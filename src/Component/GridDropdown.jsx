import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const GridDropdown = () => {
  const [dropdownOpen, setdropwonOpen] = useState(false);
  return (
    <div>
      <div className="">
        <button
          onClick={() => setdropwonOpen(!dropdownOpen)}
          className="flex items-center   rounded-lg font-medium text-sm lg:text-base  text-default_dark hover:bg-default_soft focus:bg-default_soft    "
        >
          {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
        <div>
          {dropdownOpen && (
            <div className=" ">
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-xs  text-default_dark   hover:text-black hover:bg-default_soft_pro focus:bg-default_soft focus:text-black"
                  >
                    Not Shared
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

export default GridDropdown;
