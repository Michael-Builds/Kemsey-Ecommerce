import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { useState } from "react";
import User from "../home/component/User";
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
import { MdKeyboardArrowUp } from "react-icons/md";
import Announcement from "../components/Announcement";
import Profile from "../../assets/user.jpeg";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    { icon: <LuHeart className="h-5 w-5 " />, text: "Wish Lists" },
    { icon: <GoGift className="h-5 w-5 " />, text: "Gift Cards" },
    { icon: <AiOutlineUser className="h-5 w-5 " />, text: "Sign In" },
    {
      icon: <AiOutlineShoppingCart className="h-5 w-5 " />,
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
      {/* Announcement */}
      <Announcement />
      {/* Top Bar */}
      <section className=" pb-6 flex  pt-6 bg-white hidden md:block">
        <div className="flex gap-32 items-center justify-center ">
          <div className="flex items-center gap-4">
            <img src={Logo} className="h-12 w-12" />
            <p className="text-orange font-quicksand whitespace-nowrap text-2xl font-bold">
              Kemsey Store
            </p>
          </div>

          <div class="flex font-quicksand flex-col items-center">
            <h2 class="text-md whitespace-nowrap">Available 24/7 at</h2>
            <p className="font-bold text-sm text-orange whitespace-nowrap">
              +1(800)555-5555
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search the store"
              className="border rounded px-8 font-quicksand py-1 w-[32rem] h-10 rounded-3xl text-gray-600 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center ">
              <IoSearchSharp className=" text-gray-500 h-6 w-6 cursor-pointer" />
            </div>
          </div>

          <div className=" flex items-center justify-center gap-8 ">
            {menuItems.map((item, index) => (
              <div key={index} className="font-quicksand text-center ">
                <div className="flex flex-col items-center gap-4 relative">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-2 text-center left-5 -right-4 bg-orange text-white font-bold rounded-full p-[2px] text-xs">
                      {item.badge}
                    </span>
                  )}
                  <p className="text-xs whitespace-nowrap -mt-3 ">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className=" bg-orange text-white">
        <nav className="flex justify-between items-center w-[80%] mx-auto py-5">
          <div className="lg:hidden gap-6 flex justify-center item-center -ml-6">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer "
              onClick={() => setNavToggle(!navToggle)}
            />
            {/* Drawer */}
            <div className={`drawer ${navToggle ? "show" : ""}`}>
              <div className="flex p-4 justify-between items-center mb-5 mt-2">
                {/* <div className="w-16 h-16 rounded-full overflow-hidden"> */}
                  {/* <img
                    src={Profile}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  /> */}
                  <h2 className="text-2xl text-gray-500 font-medium font-quicksand">Menu</h2>
                {/* </div> */}

                <VscClose
                  className="text-2xl rotate-on-hover cursor-pointer absolute right-3 text-orange"
                  onClick={() => setNavToggle(false)}
                />
              </div>
            </div>

            <IoSearchOutline
              onClick={() => setNavToggle(!navToggle)}
              className="text-2xl cursor-pointer"
            />
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

          {/* Categories */}
          <div className="hidden md:block">
            <div className="gap-3">
              <div
                className="flex items-center gap-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <TbLayoutGrid className="text-white" />
                <p className="font-quicksand font-medium whitespace-nowrap text-sm">
                  Categories (See All)
                </p>
                {isHovered ? (
                  <MdKeyboardArrowUp className="cursor-pointer" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="cursor-pointer" />
                )}
              </div>
            </div>
          </div>

          <div className="hidden md:block pl-48">
            <div className="flex justify-center  items-center gap-10 border-l-2 pl-4 border-white">
              {navigationItems.map((item, index) => (
                <div key={index} className="relative">
                  <a
                    href={item.link}
                    className="font-quicksand font-medium whitespace-nowrap text-sm navigate"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center gap-6 ml-96">
              <div className="flex items-center text-sm gap-2 font-quicksand border-white border-r-2 pr-4">
                <AiOutlineCustomerService className="text-white" />
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
              <li className="text-xl">
                <User />
              </li>
              <Link to="/cart" className="relative p-2 rounded-full">
                <PiShoppingCartThin className="text-xl " />
                <div className="absolute -top-2 -right-2 left-5 p-3 h-4 text-xs rounded-full bg-white text-orange flex justify-center items-center">
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
