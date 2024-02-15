import { Link, useLocation } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { MdSell } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import { IoSearchOutline } from "react-icons/io5";
import { CiGrid41 } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";

const BottomTabNavigator = () => {
  const location = useLocation();

  const isCurrentRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 pl-2 pr-2  bg-white border-t border-orange shadow-md bottom_tap">
      <div className="flex justify-between mx-auto max-w-screen-xl p-2 pt-3 ">
        <Link
          to="/"
          className={`flex font-quicksand font-medium flex-col items-center text-sm ${
            isCurrentRoute("/") ? "text-orange" : "text-gray-600"
          } hover:text-orange`}
        >
          <TiHomeOutline className="text-xl mb-1" />
          Home
        </Link>
        <Link
          to="/shop"
          className={`flex flex-col font-quicksand font-medium  items-center text-sm ${
            isCurrentRoute("/shop") ? "text-orange" : "text-gray-600"
          } hover:text-orange`}
        >
          <IoSearchOutline className="text-xl mb-1" />
          Search
        </Link>
        <Link
          to="/sell"
          className={`flex flex-col font-quicksand font-medium  items-center text-sm ${
            isCurrentRoute("/search") ? "text-orange" : "text-gray-600"
          } hover:text-orange`}
        >
          <CiGrid41 className="text-xl mb-1" />
          Collection
        </Link>
        <Link
          to="/partner"
          className={`flex flex-col font-quicksand font-medium items-center text-sm ${
            isCurrentRoute("/search") ? "text-orange" : "text-gray-600"
          } hover:text-orange`}
        >
          <GoPerson className="text-xl mb-1" />
          Account
        </Link>
        <Link
          to="/contact"
          className={`flex flex-col font-quicksand font-medium items-center text-sm ${
            isCurrentRoute("/search") ? "text-orange" : "text-gray-600"
          } hover:text-orange`}
        >
          <IoCartOutline className="text-xl mb-1" />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default BottomTabNavigator;
