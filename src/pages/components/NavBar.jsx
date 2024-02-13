import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import User from "../home/component/User";
import Sidebar from "./SideBar";
import Logo from "../../assets/logo.png";
import { IoSearchSharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbLayoutGrid } from "react-icons/tb";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);

  const menuItems = [
    { icon: <LuHeart className="h-6 w-6 ml-4" />, text: "Wish Lists" },
    { icon: <GoGift className="h-6 w-6 ml-4" />, text: "Gift Cards" },
    { icon: <AiOutlineUser className="h-6 w-6 ml-2" />, text: "Sign In" },
    {
      icon: <AiOutlineShoppingCart className="h-6 w-6 ml-1" />,
      text: "Cart",
      badge: 3,
    },
  ];

  const navigationItems = [
    {
      label: "Home",
      link: "/",
      children: [],
    },
    { label: "Shop", link: "/shop", children: [] },
    {
      label: "Sell",
      link: "/sell",
      children: [],
    },
    { label: "About Us", link: "/about-us", children: [] },
    { label: "Contact", link: "/contact", children: [] },
    {
      label: "Partner",
      link: "/partner",
      children: [],
    },
  ];
  return (
    <div className="sticky z-50 top-0 inset-x-0">
      {/* Top Bar */}
      <section className="text-white pb-6 pt-6 bg-orange hidden md:block">
        <div className="flex gap-32">
          <div className="font-poppins pl-16 text-3xl whitespace-nowrap">
            <span className="font-bold">Kemsey</span>
            <span className="italic underline">Store+</span>
          </div>

          <div class="flex font-quicksand flex-col items-center">
            <h2 class="text-md whitespace-nowrap">Available 24/7 at</h2>
            <p className="font-bold text-sm whitespace-nowrap">
              +1(800)555-5555
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search the store"
              className="border rounded px-8 font-quicksand py-1 w-[32rem] h-12 rounded-3xl text-gray-600 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center ">
              <IoSearchSharp className="text-orange h-6 w-6 cursor-pointer" />
            </div>
          </div>

          <div className=" flex items-center justify-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="font-quicksand text-center">
                <div className="flex flex-col items-center gap-4 relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-2 text-center left-5 -right-3 bg-white text-orange font-bold rounded-full p-[2px] text-xs">
                      {item.badge}
                    </span>
                  )}
                  <p className="text-sm whitespace-nowrap -mt-3 ">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-white dark:bg-slate-950 dark:text-slate-300 shadow-md">
        <nav className="flex justify-between items-center w-[80%] mx-auto py-5">
          <div className="lg:hidden gap-6 flex justify-center item-center -ml-6">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer "
              onClick={() => setNavToggle(!navToggle)}
            />

            <div className={`drawer ${navToggle ? "show" : ""}`}>
              <IoCloseOutline
                className="text-2xl cursor-pointer absolute top-4 right-4"
                onClick={() => setNavToggle(false)}
              />

              <div className="mt-24 pl-6">
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
                <p>Home</p>
              </div>
            </div>

            <IoSearchOutline className="text-2xl cursor-pointer" />
          </div>

          <Link to="/" className="lg:hidden ">
            <section className="flex justify-between items-center space-x-2 w-full">
              <div className="w-12 h-12 overflow-hidden">
                <img
                  src={Logo}
                  alt=""
                  className="w-full h-full"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              <h1 className="font-bold text-lg font-quicksand">Kemsey Store</h1>
            </section>
          </Link>

          <div className="hidden md:block">
            <div className="flex items-center gap-3 ">
              <TbLayoutGrid className="text-orange" />
              <p className="font-quicksand font-medium text-sm">Categories</p>
              <MdOutlineKeyboardArrowDown className="cursor-pointer" />
            </div>
          </div>

          <div className="hidden md:block pl-48">
            <div className="flex justify-center items-center gap-10 border-l-2 pl-4 border-gray-500">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  <a
                    href={item.link}
                    className="font-quicksand font-medium text-sm navigate"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6 ml-96">
              <div className="flex items-center text-sm gap-2 font-quicksand border-gray-500 border-r-2 pr-4">
                <AiOutlineCustomerService className="text-orange" />
                Help
              </div>

              <div className="flex font-quicksand text-sm font-medium items-center justify-center">
                <p>EN/CHF</p>
                <MdOutlineKeyboardArrowDown className="cursor-pointer" />
              </div>
            </div>
          </div>

          {searchToggle && (
            <ul className="flex items-center lg:hidden lg:flex -mr-6">
              <li className="text-xl ">
                <User />
              </li>
              <Link
                to="/cart"
                className="relative hover:dark:bg-slate-900 hover:bg-slate-100 p-2 rounded-full"
              >
                <PiShoppingCartThin className="text-xl " />
                <div className="absolute -top-2 -right-2 left-5 p-3 h-4 text-xs rounded-full bg-orange text-white flex justify-center items-center">
                  <p className="text-center  justify-center font-quicksand">
                    9
                  </p>
                </div>
              </Link>
            </ul>
          )}
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
