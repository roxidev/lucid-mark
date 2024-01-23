import logo from "../../assets/black-logo.svg";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="flex bg-secondary  ">
      {/* right section*/}
      <div className="flex bg-gradient-to-r from-[#091a3f] to-[#0E4FDA] w-full backdrop-blur-sm bg-white opacity-30 border-4 border-red-500 ">
        <div className=" relative w-4/12 h-screen bg-secondary_dark bg-cover ">
          <div className=" absolute w-12 h-12 bg-black md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full -left-4 bottom-48"></div>
        </div>

        <div className="flex items-center justify-center w-full h-[80vh] bg-[#304a83] bg-cover">
          <div className=" w-12 h-12 rounded-full md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-r from-[#588ffd] to-[#2b22ad]"></div>
        </div>
        <div className="w-full h-[80vh] bg-gradient-to-tr "></div>
      </div>

      {/* left section*/}

      <div className="w-3/6 h-screen p-5">
        <div className="flex flex-col justify-between items-center w-full h-full bg-white rounded-2xl pt-10  pb-5">
          {/* --------top------ */}
          <div className="flex flex-col items-center">
            <img src={logo} alt="" className="w-7 " />
            <h2 className="text-3xl mt-4">Welcome</h2>
            <p className="text-base text-default_dark mt-2">
              Please enter your details
            </p>
          </div>
          {/* ----------middle-------- */}
          <div className=" flex flex-col px-5 ">
            {/* input */}
            <div className="space-y-2">
              <input
                type="text"
                className="w-full px-5 py-2 rounded-sm placeholder:text-black border outline-none"
                placeholder="Email"
              />
              <div className="flex items-center justify-between w-full px-5 py-2 rounded-sm  border ">
                <input
                  type="password"
                  placeholder="Password"
                  className="placeholder:text-black outline-none"
                />
                <FaRegEye className="text-default_dark text-lg" />
              </div>
              <p className="flex flex-row justify-end  text-default_dark text-xs ">
                forgot Password?
              </p>
            </div>
            {/* btn */}
            <div className="flex flex-col gap-2 mt-5">
              <button className="w-full px-5 py-2 rounded-md bg-secondary text-base text-white font-medium hover:bg-secondary_dark">
                Log In
              </button>
              <button className="flex items-center gap-2 w-full px-5 py-2 rounded-md bg-default_soft text-base hover:bg-default">
                <FcGoogle className="text-xl font-medium" />
                <span className="text-base font-medium">
                  Log in with Google
                </span>
              </button>
            </div>
          </div>
          {/* ----------buttom---------- */}
          <div className="text-xs">
            Don´t have an account?{" "}
            <span className="text-base font-medium">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
