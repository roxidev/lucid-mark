
import screenshort from "../../assets/screenShort.png";
import { LuCamera } from "react-icons/lu";
import { PiVideoCamera } from "react-icons/pi";
import Sidebar from "../../Shared/Sidebar";
import Navbar from "../../Shared/Navbar";

const Environment = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full p-5 bg-default_soft_pro ">
        <Navbar />
        <div className="grid grid-cols-6 pr-32 mt-2">
          <h2 className="text-xs text-default_dark -pr-5 ">Preview</h2>
          <h2 className="text-xs text-default_dark pr-5">Number</h2>
          <h2 className="text-xs text-default_dark pr-5">Request/Type</h2>
          <h2 className="text-xs text-default_dark  ">Description</h2>
          <h2 className="text-xs text-default_dark pr-10">Media</h2>
          <h2 className="text-xs text-default_dark ">Status</h2>
        </div>
        <div className="flex flex-col gap-2  mt-5 h-[calc(100vh-210px)] overflow-y-auto">
          {/* 1 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary" />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 5 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 6 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
          {/* 7 */}
          <div className="flex items-center justify-between bg-default px-5 py-2 rounded-md">
            <div className="flex items-center gap-6">
              <img className="w-24 rounded-lg" src={screenshort} />
              <h3 className="text-base">#1</h3>
            </div>
            <div className="text-base">Contact form</div>
            <div className="text-base">Contact form</div>
            <div className="flex gap-4">
              <button>
                <LuCamera className="text-secondary " />
              </button>
              <button>
                <PiVideoCamera />
              </button>
            </div>
            <button className="w-16 text-center text-warning text-sm pb-1 pt-0.5 rounded-full bg-warning_soft hover:border-">
              Review
            </button>
            <div className="flex gap-6">
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Export
              </button>
              <button className="text-sm text-secondary font-semibold border-b-2 border-default  hover:border-b-2 hover:border-secondary">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Environment;
