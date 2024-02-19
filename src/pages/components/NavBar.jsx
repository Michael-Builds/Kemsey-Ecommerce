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
import { MdKeyboardArrowUp } from "react-icons/md";
import Announcement from "../components/Announcement";
import { VscClose } from "react-icons/vsc";
import Automobile from "../../assets/icons/automobile.png";
import Dress from "../../assets/icons/dress.png";
import Jewelery from "../../assets/icons/jewellery.png";
import CellPhone from "../../assets/icons/mobile-phone.png";
import Men from "../../assets/icons/outfit.png";
import Kids from "../../assets/icons/overalls.png";
import Laptops from "../../assets/icons/responsive.png";
import Skin_Care from "../../assets/icons/skin-care.png";
import Sports from "../../assets/icons/sport-wear.png";
import Home_Tools from "../../assets/icons/maintenance.png";

const Navbar = () => {
  const [isArrowUpClicked, setIsArrowUpClicked] = useState(false);

  const handleArrowClick = () => {
    setIsArrowUpClicked((prev) => !prev);
  };

  const [navToggle, setNavToggle] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // const handleSearchToggle = () => {
  //   setSearchToggle((prevSearchToggle) => !prevSearchToggle);
  // };

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

  const categories = [
    {
      image: Dress,
      title: "Women Clothing & Fashion",
      link: "/women-clothing",
    },
    {
      image: Men,
      title: "Men Clothing & Fashion",
      link: "/men-clothing",
    },
    {
      image: Laptops,
      title: "Computer & Accessories",
      link: "/computer-accessories",
    },
    {
      image: Automobile,
      title: "Automobile & Motorcycle",
      link: "/automobile-motorcycle",
    },
    {
      image: Kids,
      title: "Kids & Toys",
      link: "/kids-toys",
    },
    {
      image: Sports,
      title: "Sports & Outdoor",
      link: "/sports-outdoor",
    },
    {
      image: Jewelery,
      title: "Jewelry & Watches",
      link: "/jewelry-watches",
    },
    {
      image: CellPhone,
      title: "Cellphones & Tabs",
      link: "/cellphones-tabs",
    },
    {
      image: Skin_Care,
      title: "Beauty, Health & Hair",
      link: "/beauty-health-hair",
    },
    {
      image: Home_Tools,
      title: "Home Improvement & Tools",
      link: "/home-improvement-tools",
    },
  ];
  //  xl:gap-32 gap-2 items-center justify-center 

  return (
    <div className="sticky z-50 top-0 inset-x-0">
      {/* Announcement */}
      <Announcement />
      {/* Top Bar */}
      <section className="pb-6 flex pt-6 bg-white hidden md:block ">
        <div className="flex justify-center lg:gap-16">
          <div className="flex items-center lg:gap-1 ">
            <img src={Logo} className="lg:h-12 lg:w-12" />
            <p className="text-orange font-quicksand whitespace-nowrap text-2xl font-bold">
              Kemsey Store
            </p>
          </div>

          <div className="flex font-quicksand flex-col items-center lg:-ml-6">
            <h2 className="text-md whitespace-nowrap">Available 24/7 at</h2>
            <p className="font-bold text-sm text-orange whitespace-nowrap">
              +1(800)555-5555
            </p>
          </div>

          <div className="relative lg:mr-24 lg:mt-1">
            <input
              type="text"
              placeholder="Search the store"
              className="border rounded text-sm px-6 font-quicksand py-1 w-[32rem] h-10 rounded-3xl text-gray-600 focus:outline-none"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center lg:mb-1 justify-center ">
              <IoSearchSharp className=" text-gray-500 lg:h-6 lg:w-6 cursor-pointer" />
            </div>
          </div>

          <div className=" md:-ml-24 flex items-center justify-center gap-8 ">
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

      <section className=" md:bg-orange lg:bg-orange md:shadow-xs lg:shadow-xs bg-white shadow-lg text-white ">
        <nav className="flex justify-between items-center w-[90%]  mx-auto py-5">
          <div className="lg:hidden gap-6 flex justify-center item-center ">
            <RxHamburgerMenu
              className="text-2xl cursor-pointer text-gray-600"
              onClick={() => setNavToggle(!navToggle)}
            />

            <div className={`drawer ${navToggle ? "show" : ""}`}>
              <div className="flex p-4 justify-between items-center mb-5 mt-2">

                <h2 className="text-2xl text-gray-500 font-medium font-quicksand">
                  Menu
                </h2>

                <VscClose
                  className="text-2xl rotate-on-hover cursor-pointer absolute right-3 text-orange"
                  onClick={() => setNavToggle(false)}
                />
              </div>
            </div>
{/* 
            <IoSearchOutline
              onClick={handleSearchToggle}
              className="text-2xl cursor-pointer"
            /> */}
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

              <h1 className="font-bold text-gray-600 text-lg font-quicksand">Kemsey Store</h1>
            </section>
          </Link>

          <div className="hidden md:block ">
            <div className="gap-4">
              <div
                className="flex items-center gap-6 relative"
                onClick={handleArrowClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <TbLayoutGrid />

                <p className="font-quicksand font-medium whitespace-nowrap text-sm">
                  Categories (See All)
                </p>

                {isArrowUpClicked && isHovered ? (
                  <MdKeyboardArrowUp className="cursor-pointer arrow-transition" />
                ) : (
                  <MdOutlineKeyboardArrowDown className="cursor-pointer arrow-transition" />
                )}
              </div>
              {isArrowUpClicked && (
                <div className="absolute top-full left-0 bg-white ml-[6rem] p-4  pb-6 shadow-lg">
                  <div className="">
                    {categories.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 lg:mt-3 mt-0 lg:p-0.5 p-2 hover:bg-yellow-100 "
                      >
                        <Link to={item.link}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="lg:w-4 w-4 h-4 lg:h-4"
                          />
                        </Link>
                        <Link to={item.link}>
                          <p className="font-quicksand text-gray-500  text-sm lg:text-md">
                            {item.title}
                          </p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:block justify-center items-center">
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
            <div className="flex items-center gap-6 ">
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
            <ul className="flex items-center lg:hidden lg:flex ">
              <li className="text-xl text-gray-600">
                <User />
              </li>
              <Link to="/cart" className="relative p-2 rounded-full">
                <PiShoppingCartThin className="text-xl text-gray-600 " />
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
