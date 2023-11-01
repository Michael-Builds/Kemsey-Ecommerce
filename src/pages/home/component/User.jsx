import { useState } from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { RiFilePaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import user from '../../../assets/user.jpeg';


const User = () => {
  const [userToggle, setUserToggle] = useState(false);
 
  return (
    <div className="relative">
      <div
        onClick={() => setUserToggle(!userToggle)}
        className="hover:dark:bg-slate-900 hover:bg-slate-100 p-2 rounded-full  cursor-pointer"
      >
        <AiOutlineUser className="text-2xl " />
      </div>
      {userToggle && (
        <div className="absolute z-10 top-10 right-0 px-3 rounded-xl bg-white shadow-2xl dark:bg-slate-900 w-[250px]">
          <div className=" flex items-center space-x-3 border-b py-5">
            <p className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={user}
                alt=""
                className="w-full h-full object-cover"
              />
            </p>
            <div>
              <p className=" truncate font-bold font-quicksand">Kabanda Michael</p>
              <p className="text-sm truncate font-quicksand">Ho, Volta Region</p>
            </div>
          </div>

          <section className="py-2 border-b">
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <CiUser className="text-2xl" />
              </i>
              <p>My Account</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <RiFilePaperLine className="text-2xl" />
              </i>
              <p>My Order</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                {" "}
                <AiOutlineHeart className="text-2xl" />
              </i>
              <p>My Wishlist</p>
            </Link>
          </section>

          <section className="py-2">
            <div className="flex items-center justify-between rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3">
              <Link to="" className="flex items-center space-x-3">
                <i>
                  <HiOutlineLightBulb className="text-2xl" />
                </i>
                <p>Light Theme</p>
              </Link>
            </div>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <BiHelpCircle className="text-2xl" />
              </i>
              <p>Help</p>
            </Link>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <TbLogout2 className="text-2xl" />
              </i>
              <p>Logout</p>
            </Link>
          </section>
        </div>
      )}
      {userToggle && (
        <div
          onClick={() => setUserToggle(!userToggle)}
          className="fixed inset-0 h-screen w-screen"
        ></div>
      )}
    </div>
  );
};

export default User;
