import { useState } from "react";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { BiHelpCircle } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { RiFilePaperLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import user from '../../../assets/user.jpeg';
import { IoMdSettings } from 'react-icons/io';


const User = () => {
  const [userToggle, setUserToggle] = useState(false);
  // const history = useHistory();

  const handleLogout = () => {
    // Perform logout logic here, such as clearing user sessions, tokens, or any other necessary cleanup.
    // After the logout logic, navigate to the login page or any other appropriate page.

    // Simulate logout for this example by navigating to the home page.
    // You can replace this with your actual logout logic.
    // history.push('/login');
  };


  return (
    <div className="relative">
      <div
        onClick={() => setUserToggle(!userToggle)}
        className="hover:dark:bg-slate-900 hover:bg-slate-100 p-2 rounded-full  cursor-pointer"
      >
        <AiOutlineUser className="md:text-xl" />
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
              <p className=" truncate md:text-md font-bold font-quicksand">Kabanda Michael</p>
              <p className="text-sm truncate font-quicksand">Ho, Volta Region</p>
            </div>
          </div>
          <section className="py-2 border-b">
            <Link
              to="/account"
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <CiUser className="md:text-xl" />
              </i>
              <p className="font-quicksand text-md">My Account</p>
            </Link>
            <Link
              to="/checkout"
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <RiFilePaperLine className="md:text-xl" />
              </i>
              <p className="font-quicksand text-md">My Order</p>
            </Link>
            <Link
              to="/wishlist"
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                {" "}
                <AiOutlineHeart className="md:text-xl" />
              </i>
              <p className='font-quicksand text-md'>My Wishlist</p>
            </Link>
          </section>

          <section className="py-2">
            <div className="flex items-center justify-between rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3">
              <Link to="" className="flex items-center space-x-3">
                <i>
                  <IoMdSettings className="md:text-xl" />
                </i>
                <p className="font-quicksand text-md">Settings</p>
              </Link>
            </div>
            <Link
              to=""
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100  py-2 px-3"
            >
              <i>
                <BiHelpCircle className="md:text-xl" />
              </i>
              <p className='font-quicksand text-md'>Help</p>
            </Link>
            <Link
              to="#"
              onClick={handleLogout}
              className="flex items-center space-x-3 rounded-lg hover:dark:bg-slate-700 hover:bg-slate-100 py-2 px-3"
            >
              <i>
                <TbLogout2 className="md:text-xl" />
              </i>
              <p className='font-quicksand text-md'>Logout</p>
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
