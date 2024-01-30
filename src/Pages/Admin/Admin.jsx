
import Sidebar from '../../Shared/Sidebar'
import visa from "../../assets/Visa_Inc._logo 1.svg"
import pdf from "../../assets/pdf.svg"
import icon from "../../assets/icn1.svg"
import Navbar from '../../Shared/Navbar';


const Admin = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5 ">
        <Navbar />
        <h3 className="text-xl md:text-2xl text-dark_black font-medium mt-4  ">
          Admin
        </h3>

        <div className="lg:w-8/12 flex justify-between mt-4 ">
          <p className="text-sm text-dark_black font-medium">
            Personal information
          </p>
          <span className="flex items-center gap-4 lg:gap-20">
            <button className="text-sm text-secondary font-medium border-b-2 border-white hover:border-secondary">
              Edit
            </button>
            <p className="text-sm text-dark_black font-medium pr-10">
              Intergration
            </p>
          </span>
        </div>
        <div className="md:h-[calc(100vh-220px)] overflow-y-scroll  ">
          {/* input */}
          <div className="flex flex-col gap-20 mt-3 lg:flex-row ">
            <div className="w-full lg:w-6/12 grid grid-cols-1 gap-2 lg:grid lg:grid-cols-2 ">
              {/* 1 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">First Name</p>
                <input
                  className="border pl-4 py-2 rounded-md outline-none w-full placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 2 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">First Name</p>
                <input
                  className="border pl-4 py-2 rounded-md outline-none w-full placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 3 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">First Name</p>
                <input
                  className="border pl-4 py-2 rounded-md outline-none w-full placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              {/* 4 */}
              <div>
                <p className="text-xs text-default_dark mb-1 ">First Name</p>
                <input
                  className="border pl-4 py-2 rounded-md outline-none w-full placeholder:text-black"
                  type="text"
                  placeholder="First Name"
                />
              </div>
            </div>
            <input
              placeholder=""
              className="w-full lg:w-6/12 h-40 bg-default rounded-md outline-none"
            ></input>
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-sm font-medium">Plan</p>
            <p className="text-sm pl-40 font-medium">Billing</p>
            <p className="text-sm text-secondary pr-10 font-medium  hover:text-secondary_dark">
              Edit
            </p>
          </div>
          {/* card */}
          <div className="flex flex-col lg:flex-row gap-20 mt-5">
            {/* left */}
            <div className="w-full lg:w-6/12   rounded-lg p-5 bg-gradient-to-t from-[#3876FE] to-[#032673]">
              <div className="flex justify-between">
                <h2 className="text-white text-xl tracking-tighter">
                  Business PRO
                </h2>
                <button className=" text-center text-white text-xs p-2 rounded-md shadow-md bg-secondary_soft">
                  Manage plan
                </button>
              </div>
              <p className=" text-white text-xs ">Includes up to 20 users</p>
              <div className="mt-6 p-4 rounded-lg bg-secondary_soft_pro">
                <div className="flex justify-between">
                  <p className="text-white text-xs font-medium">payment</p>
                  <button className="px-2 py-1 text-white text-xs bg-secondary_soft flex items-center justify-center rounded-md">
                    Change
                  </button>
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
                <button className="rounded-md hover:bg-default_soft_pro">
                  <img src={icon} alt="" />
                </button>
              </div>
              {/* 2 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <button className="rounded-md hover:bg-default_soft_pro">
                  <img src={icon} alt="" />
                </button>
              </div>
              {/* 3 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <button className="rounded-md hover:bg-default_soft_pro">
                  <img src={icon} alt="" />
                </button>
              </div>
              {/* 4 */}
              <div className="flex items-center justify-between bg-default px-6 py-4 rounded-md">
                <div className="flex items-center gap-4">
                  <img src={pdf} alt="" />
                  <p className="text-sm font-medium">Invoice #13245</p>
                  <p className="text-xs ">06/01/2023</p>
                </div>
                <button className="rounded-md hover:bg-default_soft_pro">
                  <img src={icon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin