// import React from 'react'
import User from '../../../assets/user.jpeg';
import { TbLogout2 } from "react-icons/tb";
import { BsPersonVcardFill, BsFillHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { FaBoxArchive } from 'react-icons/fa6';
import { BsFillCreditCardFill } from 'react-icons/bs';


const Main = () => {
    return (
        <section>
            <div className="container grid md:grid-cols-12 items-start gap-6 pt-4 md:pb-16 pb-2">
                {/* SideBar Component */}
                <div className="col-span-9 md:col-span-3">
                    <div className="px-4 py-3 shadow flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center">
                            <img src={User} alt="profile"
                                className="w-full h-full object-cover"
                                onContextMenu={(e) => e.preventDefault()} />
                        </div>
                        <div className="flex-grow">
                            <p className="text-gray-600 font-quicksand">Hello,</p>
                            <p className=" truncate md:text-md font-bold font-quicksand">Kabanda Michael</p>

                        </div>
                    </div>

                    <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                        <div className="space-y-1 pl-8">
                            <div className="relative font-quicksand mb-2 text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-1 text-base">
                                    <BsPersonVcardFill />
                                </span>
                                Manage Account
                            </div>

                            <Link to="/profile" className="relative font-quicksand hover:text-primary block capitalize transition">
                                Profile information
                            </Link>
                            <Link to="#" className="relative font-quicksand hover:text-primary block capitalize transition">
                                Manage addresses
                            </Link>
                            <Link to="#" className="relative font-quicksand hover:text-primary block capitalize transition">
                                Change password
                            </Link>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <div className="relative mb-2 font-quicksand hover:text-primaryblock font-medium capitalize transition">
                                <span className="absolute -left-8 top-1 text-base">
                                    <FaBoxArchive />
                                </span>
                                My order history
                            </div>
                            <Link to="#" className="relative  font-quicksand hover:text-primary block capitalize transition">
                                My returns
                            </Link>
                            <Link to="#" className="relative font-quicksand  hover:text-primary block capitalize transition">
                                My Cancellations
                            </Link>
                            <Link to="#" className="relative font-quicksand  hover:text-primary block capitalize transition">
                                My reviews
                            </Link>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <a href="#" className="relative font-quicksand mb-2 hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-1 text-base">
                                    <BsFillCreditCardFill />
                                </span>
                                Payment methods
                            </a>
                            <Link to="#" className="relative font-quicksand hover:text-primary block capitalize transition">
                                voucher
                            </Link>
                        </div>

                        <div className="space-y-1 pl-8 pt-4">
                            <Link to='/wishlist' className="relative mb-4 font-quicksand hover:text-primary block font-medium capitalize transition flex items-center">
                                <span className="absolute -left-8 top-1 text-base">
                                    <BsFillHeartFill />
                                </span>
                                My wishlist
                            </Link>

                        </div>

                        <div className="space-y-1 pl-8 pt-4  ">
                            <Link to="#" className="relative font-quicksand mb-4 hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-1 text-base">
                                    <TbLogout2 />
                                </span>
                                Logout
                            </Link>
                        </div>

                    </div>
                </div>


                {/* Main Component */}
                <div className="col-span-9 grid md:grid-cols-3 gap-6">
                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-simbold text-gray-800 text-lg font-quicksand">Personal Profile</h3>
                            <Link to="#" className="text-primary font-quicksand">
                                Edit
                            </Link>
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-gray-700 font-semibold font-quicksand">Kabanda Michael</h4>
                            <p className="text-gray-800 font-quicksand">Ho, Volta Region</p>
                            <p className="text-gray-800 font-quicksand">michaelkpantiramp@gmail</p>
                            <p className="text-gray-800 font-quicksand">+233 54 454 1587</p>
                        </div>
                    </div>

                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 text-lg font-quicksand">Shipping address</h3>
                            <Link href="#" className="text-primary font-quicksand">
                                Edit
                            </Link>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-gray-700 font-medium font-quicksand">Kabanda Michael</h4>
                            <p className="text-gray-800 font-quicksand">Ho, Volta Region</p>
                            <p className="text-gray-800 font-quicksand">Ho-Poly</p>
                            <p className="text-gray-800 font-quicksand">+233 54 454 1587</p>
                        </div>
                    </div>

                    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 text-lg font-quicksand">Billing address</h3>
                            <Link href="#" className="text-primary font-quicksand">
                                Edit
                            </Link>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-gray-700 font-medium font-quicksand">Kabanda Michael</h4>
                            <p className="text-gray-800 font-quicksand">Ho, Volta Region</p>
                            <p className="text-gray-800 font-quicksand">Ho-Poly</p>
                            <p className="text-gray-800 font-quicksand">+233 54 454 1587</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Main;