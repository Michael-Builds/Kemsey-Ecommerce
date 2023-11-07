// import React from 'react'
import User from '../../../assets/user.jpeg';
import { TbLogout2 } from "react-icons/tb";
import { BsPersonVcardFill, BsFillHeartFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { FaBoxArchive } from 'react-icons/fa6';
import { BsFillCreditCardFill } from 'react-icons/bs';
import Img1 from '../../../assets/products/product7.jpg';
import Img2 from '../../../assets/products/product8.jpg';
import { FaTrash } from 'react-icons/fa';
import React from 'react';


const Main = () => {

    const [wishlist, setWishlist] = React.useState([
        {
            name: 'Sofa',
            availability: 'In Stock',
            price: '$320.00',
            image: Img1,
        },
        {
            name: 'Sofa',
            availability: 'In Stock',
            price: '$320.00',
            image: Img2,
        },
        {
            name: 'Sofa',
            availability: 'Out of Stock',
            price: '$320.00',
            image: Img2,
        },
    ]);

    const deleteItem = (index) => {
        const updatedWishlist = [...wishlist];
        updatedWishlist.splice(index, 1);
        setWishlist(updatedWishlist);
    };

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
                            <Link to='/account' className="relative font-quicksand mb-2 hover:text-primary block font-medium capitalize transition">
                                <span className="absolute -left-8 top-1 text-base">
                                    <BsPersonVcardFill />
                                </span>
                                Manage Account
                            </Link>

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
                            <Link to='/wishlist' className="relative mb-4 font-quicksand text-primary block font-medium capitalize transition flex items-center">
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

                {/* Wishlist Component */}
                <div className="col-span-9 space-y-4">
                    {wishlist.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border md:gap-6 gap-2 p-4 border-gray-200 rounded">
                            <div className="w-28">
                                <img src={item.image} alt={`product ${index + 1}`} className="w-full" />
                            </div>
                            <div className="md:w-1/3">
                                <h2 className="text-gray-800 md:text-xl text-md font-semibold uppercase font-quicksand">
                                    {item.name}
                                </h2>
                                <p className="text-gray-500 text-sm font-quicksand">
                                    Availability:{' '}
                                    <span
                                        className={`text-${item.availability === 'In Stock' ? 'green' : 'red'}-600 font-semibold inline-block`}
                                    >
                                        {item.availability}
                                    </span>
                                </p>
                            </div>
                            <div className="text-primary md:text-lg text-sm md:-ml-6 -ml-2 font-semibold font-quicksand">{item.price}</div>
                            <Link
                                to="/cart"
                                className={`md:px-6 px-4 md:py-2 py-1 text-center font-quicksand text-sm text-white bg-primary border border-primary rounded transition font-medium ${item.availability === 'Out of Stock' ? 'cursor-not-allowed' : ''
                                    }`}
                            >
                                Add to cart
                            </Link>
                            <div className="text-gray-600 md:-ml-6 ml-0 cursor-pointer  hover:text-primary" onClick={() => deleteItem(index)}>
                                <FaTrash />
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Main;