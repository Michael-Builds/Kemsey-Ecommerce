import User from '../../../assets/user.jpeg';
import { TbLogout2 } from "react-icons/tb";
import { BsPersonVcardFill, BsFillHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { FaBoxArchive } from 'react-icons/fa6';
import { BsFillCreditCardFill } from 'react-icons/bs';
import PersonalInfo from './PersonaIInfo';
import ShippingAddress from './Shiping';
import BillingAddress from './Billing';

const Main = () => {

    return (
        <section>
            <div className="container grid md:grid-cols-12 items-start md:gap-6 gap-8 pt-4 md:pb-16 pb-2">
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
                    {/* Personal Info */}
                    <PersonalInfo />

                    {/* Shipping Address */}
                    <ShippingAddress />

                    {/* Billing Address */}
                    <BillingAddress />
                </div>

            </div>
        </section>
    )
}

export default Main;