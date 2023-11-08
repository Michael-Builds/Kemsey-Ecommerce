import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCartThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import User from "../home/component/User";
import Sidebar from "./SideBar";
import Logo from '../../assets/logo.png';


const Navbar = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [searchToggle, setSearchToggle] = useState(true);

    return (
        <section className="sticky z-50 top-0 inset-x-0 bg-white dark:bg-slate-950 dark:text-slate-300 shadow-md">
            <nav className="flex justify-between items-center w-[90%] 2xl:w-[1440px] mx-auto py-5">
                <div onClick={() => setNavToggle(!navToggle)} className="lg:hidden">
                    <RxHamburgerMenu className="text-2xl" />
                </div>
                <Link to="/">
                    <section className="flex justify-between items-center space-x-2 w-full">
                        <div
                            className="w-12 h-12 overflow-hidden">
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

                {searchToggle && (
                    <ul className="hidden lg:flex items-center font-quicksand text-md font-medium">
                        <Link
                            to="/"
                            className="hover:dark:bg-slate-900 md:text-md  hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[100px] h-[40px] flex items-center justify-center"
                        >
                            Home
                        </Link>
                        <Link
                            to="/shop"
                            className="hover:dark:bg-slate-900 md:text-md  hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[100px] h-[40px] flex items-center justify-center"
                        >
                            Shop
                        </Link>
                        <Link
                            to="/sell"
                            className="hover:dark:bg-slate-900 md:text-md hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[100px] h-[40px] flex items-center justify-center"
                        >
                            Sell
                        </Link>
                        <Link
                            to="/products"
                            className="hover:dark:bg-slate-900 flex items-center md:text-md hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[120px] h-[40px] flex items-center justify-center"
                        >
                            About Us
                        </Link>
                        <Link
                            to="/products"
                            className="hover:dark:bg-slate-900 md:text-md hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[100px] h-[40px] flex items-center justify-center"
                        >
                            Contact
                        </Link>
                        <Link
                            to="/blog"
                            className="hover:dark:bg-slate-900 md:text-md font-quicksand hover:bg-primary hover:text-white py-2 px-5 rounded-md w-[100px] h-[40px] flex items-center justify-center"
                        >
                            Partner
                        </Link>
                    </ul>
                )}

                {searchToggle && (
                    <ul className="flex items-center">
                        <li
                            onClick={() => setSearchToggle(!searchToggle)}
                            className="hidden lg:block hover:dark:bg-slate-900 hover:bg-slate-100 p-2 rounded-full"
                        >
                            <CiSearch className="md:text-xl cursor-pointer" />
                        </li>
                        <li className="">
                            <User />
                        </li>
                        <Link to="/cart" className="relative hover:dark:bg-slate-900 hover:bg-slate-100 p-2 rounded-full">
                            <PiShoppingCartThin className="md:text-xl" />
                            <div className="absolute top-0 right-0 p-1 h-4 text-xs text-center rounded-full bg-primary text-white flex justify-center items-center">
                                <p className="text-center justify-center font-quicksand">9</p>
                            </div>
                        </Link>
                    </ul>
                )}
                {!searchToggle && (
                    <input
                        type="text"
                        className="py-2 px-3 w-1/2 rounded-md font-quicksand text-gray-600 border border-gray-500 focus:outline-none"
                        placeholder="Search items ..."
                    />
                )}
                {!searchToggle && (
                    <button
                        onClick={() => setSearchToggle(!searchToggle)}
                        className="hover:dark:bg-slate-900 -ml-[25%] hover:bg-primary hover:text-white py-2 px-5 rounded-md bg-slate-200 font-quicksand "
                    >
                        Cancel
                    </button>
                )}
            </nav>
            {navToggle && (
                <div
                    onClick={() => setNavToggle(!navToggle)}
                    className="lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-lg w-full h-full"
                ></div>
            )}
            {navToggle && <Sidebar setNavToggle={setNavToggle} />}
        </section>
    );
};



export default Navbar;
