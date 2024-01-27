import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Dropdown = () => {
    const [dropdownOpen, setdropwonOpen] = useState(false);
  return (
    <div>
      <div className="">
        <button
          onClick={() => setdropwonOpen(!dropdownOpen)}
          className="flex items-center gap-1 py-1 px-4 rounded-lg font-medium text-lg lg:text-xl  text-secondary hover:bg-default_soft focus:bg-default_soft    "
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
                    className="flex  items-center px-3   text-slate-400 hover:text-default_dark hover:bg-default_soft_pro focus:bg-default_soft focus:text-default_dark"
                  >
                    Metanote
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown