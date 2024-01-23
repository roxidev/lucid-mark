
import Sidebar from '../../Shared/Sidebar'
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import visa from "../../assets/Visa_Inc._logo 1.svg"
import pdf from "../../assets/pdf.svg"
import icon from "../../assets/icn1.svg"


const Admin = () => {
  return (
    <div className="flex">
        <Sidebar />
      <div className="w-full p-5 ">
        <div className="flex items-center justify-between">
          <p className="text-xs text-black font-medium">Environment</p>
          <IoSettingsOutline className="w-10 h-10 p-2 text-secondary rounded-md bg-secondary_soft_btn" />
        </div>
        {/* Metanote */}
        <div className="flex items-center gap-4">
          <h2 className="text-4xl text-secondary font-medium">Metanote</h2>
          <IoIosArrowForward className="text-2xl text-secondary rotate-90" />
        </div>
        <h3 className="text-2xl text-dark_black font-medium mt-4  ">Admin</h3>

        <div className="lg:w-8/12 lg:flex justify-between mt-4 ">
          <p className="text-sm text-dark_black font-medium">
            Personal information
          </p>
          <span className="flex gap-4 lg:gap-20">
            <p className="text-sm text-secondary font-medium">Edit</p>
            <p className="text-sm text-dark_black font-medium pr-10">
              Intergration
            </p>
          </span>
        </div>
        <div className="md:h-[calc(100vh-205px)] overflow-y-auto lg:overflow-scroll ">
          {/* input */}
          <div className="flex flex-col gap-20 mt-3 lg:flex-row ">
            <div className="w-full lg:w-6/12 grid grid-cols-1 gap-2 lg:grid lg:grid-cols-2 ">
              {/* 1 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">First Name</p>
                <input
                  className="border pl-4 py-2 rounded-sm outline-none w-full placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 2 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">Password</p>
                <input
                  className="w-full border pl-4 py-2 rounded-sm placeholder:text-black outline-none"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 3 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">Last Name</p>
                <input
                  className="w-full border pl-4 py-2 rounded-sm placeholder:text-black outline-none"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 4 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">Email</p>
                <input
                  className="w-full border pl-4 py-2 rounded-sm placeholder:text-black outline-none"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="w-full lg:w-6/12 h-40 bg-default rounded-md"></div>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-sm font-medium">Plan</p>
            <p className="text-sm pl-40 font-medium">Billing</p>
            <p className="text-sm text-secondary pr-10 font-medium">Edit</p>
          </div>
          {/* card */}
          <div className="flex flex-col lg:flex-row gap-20 mt-5">
            {/* left */}
            <div className="w-full lg:w-6/12 h-[215px]  rounded-lg p-5 bg-gradient-to-t from-[#3876FE] to-[#032673]">
              <div className="flex justify-between">
                <h2 className="text-white text-xl tracking-tighter">
                  Business PRO
                </h2>
                <span className="w-24 h-8 text-center text-white text-xs p-2 rounded-sm shadow-md bg-secondary_soft">
                  Manage plan
                </span>
              </div>
              <p className="absolute text-white text-xs -mt-2">
                Includes up to 20 users
              </p>
              <div className="mt-6 p-4 rounded-lg bg-secondary_soft_pro">
                <div className="flex justify-between">
                  <p className="text-white text-xs font-medium">payment</p>
                  <span className="w-16 h-7 text-white text-xs bg-secondary_soft flex items-center justify-center rounded-sm">
                    Change
                  </span>
                </div>
                <div className="flex items-center justify-center w-16 h-8 p-2 mt-1 rounded-md bg-white">
                  <img src={visa} />
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-white text-xs font-thin">
                    Visa ending in <span className="font-medium">5325</span>
                  </p>
                  <p className="text-white text-xs font-thin">
                    billing@billing.com
                  </p>
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="flex flex-col gap-2  lg:w-6/12 h-[calc(100vh-432px)] overflow-y-auto">
              {/* 1 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <img src={icon} alt="" />
              </div>
              {/* 2 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <img src={icon} alt="" />
              </div>
              {/* 3 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <img src={icon} alt="" />
              </div>
              {/* 4 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <img src={icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin