import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import Img1 from '../../../assets/products/product7.jpg';
import Img2 from '../../../assets/products/product8.jpg';
import { Link } from "react-router-dom";

const Cart = () => {

    const [cartItems, setCartItems] = useState([
        {
            name: 'Sofa',
            seller: 'Furniture Store A',
            availability: 'In Stock',
            price: '$320.00',
            description: 'This comfortable sofa is perfect for your living room.',
            image: Img1,
            quantity: 1,
        },
        {
            name: 'Chair',
            seller: 'Furniture Store B',
            availability: 'Out of Stock',
            price: '$220.00',
            description: 'A stylish chair for your home office or study.',
            image: Img2,
            quantity: 2,
        },
        {
            name: 'Table',
            seller: 'Furniture Store C',
            availability: 'In Stock',
            price: '$150.00',
            description: 'A sturdy and elegant table for your dining room.',
            image: Img2,
            quantity: 1,
        },
    ]);

    const deleteItem = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };

    const increaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity++;
        setCartItems(updatedCartItems);
    };

    const decreaseQuantity = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity--;
        }
        setCartItems(updatedCartItems);
    };

    return (
        <section>
            <div className="container grid md:grid-cols-12 items-start pb-2 pt-4 gap-6">
                {/* Cart Component */}
                <div className="col-span-8 p-4 rounded border border-gray-200">
                    <p className="font-quicksand">Cart ({cartItems.length} items)</p>
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between  md:gap-6 gap-2 p-4  rounded my-2">
                            <div className="w-28">
                                <img src={item.image} alt={`product ${index + 1}`} className="w-full" />
                            </div>
                            <div className="flex-grow md:w-1/3">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-gray-800 md:text-xl text-sm md:ml-0 ml-2  text-md font-medium uppercase font-quicksand">
                                            {item.name}
                                        </h2>
                                        <p className="font-quicksand md:text-md text-sm md:mt-0 mt-1 md:ml-0 md:mt-1 ml-2">{item.description}</p>
                                    </div>
                                    <div className="text-primary md:text-lg text-sm font-semibold font-quicksand">{item.price}</div>
                                </div>

                                <p className='font-quicksand mt-2 md:ml-0 ml-2 md:text-md text-sm '>Seller: {' '}
                                    <span className='font-semibold'>
                                        {item.seller}
                                    </span>
                                </p>

                                <p className="text-gray-500 text-sm font-quicksand mt-2 md:ml-0 ml-2 ">
                                    Availability:{' '}
                                    <span
                                        className={`text-${item.availability === 'In Stock' ? 'green' : 'red'}-600 font-semibold inline-block`}
                                    >
                                        {item.availability}
                                    </span>
                                </p>

                                <div className="text-primary md:ml-0 ml-2  justify-between flex items-center md:mt-2 gap-2 md:ml-0 ml-0 cursor-pointer hover:text-primary" >
                                    <p onClick={() => deleteItem(index)} className='font-quicksand flex items-center gap-4'>Remove
                                        <span>
                                            <FaTrash />
                                        </span>
                                    </p>
                                    <div className="flex items-center mt-2 justify-center">
                                        <button
                                            onClick={() => decreaseQuantity(index)}
                                            className={`w-8 h-8 text-center font-quicksand text-lg text-white bg-primary border border-primary rounded-l ${item.availability === 'Out of Stock' ? 'cursor-not-allowed' : item.quantity === 1 ? 'bg-red-300 border-red-300 cursor-not-allowed' : ''
                                                }`}
                                        >
                                            -
                                        </button>
                                        <span className="px-3 text-lg font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => increaseQuantity(index)}
                                            className={`w-8 h-8 text-center font-quicksand text-lg text-white bg-primary border border-primary rounded-r ${item.availability === 'Out of Stock' ? 'cursor-not-allowed ' : ''
                                                }`}
                                        >
                                            +
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="col-span-8 md:col-span-4 border border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-6 mt-2 font-bold uppercase font-quicksand">cart summary</h4>

                    <div className="flex mt-2 font-quicksand justify-between border-b border-gray-200  text-gray-800 font-medium py-3 capitalize">
                        <p>subtotal</p>
                        <p className="font-semibold font-quicksand">GHC {calculateTotalPrice(cartItems)}</p>
                    </div>

                    <div className="flex font-quicksand justify-between border-b border-gray-200 mt-2 text-gray-800 font-medium py-3 capitalize">
                        <p>shipping</p>
                        <p className="italic text-primary">Free</p>
                    </div>

                    <div className="flex mt-2 justify-between text-gray-800 font-medium py-3 uppercase font-quicksand">
                        <p className="font-semibold">Total</p>
                        <p className='font-quicksand font-bold '>GHC {calculateTotalPrice(cartItems)}</p>
                    </div>
                    <form >
                        <div className="flex items-center mb-4 mt-2">
                            <input type="checkbox" name="aggrement" id="aggrement"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                            <label className="text-gray-600 ml-3 cursor-pointer text-sm font-quicksand">I agree to the <a href="#"
                                className="text-primary">terms & conditions</a>
                            </label>
                        </div>
                        <Link to="/checkout"
                            className="block w-full  py-3 px-4 text-center font-quicksand text-white bg-primary border border-primary rounded-md transition font-medium">
                            Proceed to Checkout
                        </Link>
                    </form>
                </div>
            </div>
        </section>
    );
};

const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => {
        return total + parseFloat(item.price.substring(1)) * item.quantity;
    }, 0);
};

export default Cart;
