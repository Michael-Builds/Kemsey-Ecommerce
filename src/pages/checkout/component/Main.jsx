


const Main = () => {
    return (
        <section>
            <div className="container grid md:grid-cols-12 items-start pb-2 pt-4 gap-6">

                {/* Checkout Form */}
                <div className="col-span-8 border border-gray-200 p-4 rounded">
                    <h3 className="text-xl font-bold capitalize font-quicksand mb-6 mt-2">Checkout</h3>

                    <form className="space-y-4 mb-8">

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="fname"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    First Name
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="lname"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Last Name
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="company"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Company
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder=" Company"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="country"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Country/Region
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Country/Region"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="street"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Street address
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder=" Street address"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="city"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    City
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="City"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="space-y-1">
                                <label
                                    htmlFor="tel"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Phone Number
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="space-y-1">
                                <label
                                    htmlFor="email"
                                    className="block font-quicksand md:text-md text-gray-600 font-medium">
                                    Email address
                                </label>
                                <input
                                    required
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Email address"
                                />
                            </div>
                        </div>

                    </form>


                </div>

                {/* Order Summary */}
                <div className="col-span-8 md:col-span-4 border border-gray-200 p-4 rounded">
                    <h4 className="text-gray-800 text-lg mb-6 mt-2 font-bold uppercase font-quicksand">order summary</h4>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-semibold font-quicksand">Italian shape sofa</h5>
                                <p className="text-sm text-gray-600 font-quicksand">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-bold font-quicksand">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-semibold font-quicksand">Italian shape sofa</h5>
                                <p className="text-sm text-gray-600 font-quicksand">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-bold font-quicksand">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-semibold font-quicksand">Italian shape sofa</h5>
                                <p className="text-sm text-gray-600 font-quicksand">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-bold font-quicksand">$320</p>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <h5 className="text-gray-800 font-semibold font-quicksand">Italian shape sofa</h5>
                                <p className="text-sm text-gray-600 font-quicksand">Size: M</p>
                            </div>
                            <p className="text-gray-600">
                                x3
                            </p>
                            <p className="text-gray-800 font-bold font-quicksand">$320</p>
                        </div>
                    </div>

                    <div className="flex mt-2 font-quicksand justify-between border-b border-gray-200  text-gray-800 font-medium py-3 uppercas">
                        <p>subtotal</p>
                        <p className="font-bold ">$1280</p>
                    </div>

                    <div className="flex font-quicksand justify-between border-b border-gray-200 mt-2 text-gray-800 font-medium py-3 uppercas">
                        <p>shipping</p>
                        <p className="italic">Free</p>
                    </div>

                    <div className="flex mt-2 justify-between text-gray-800 font-medium py-3 uppercase font-quicksand">
                        <p className="font-semibold">Total</p>
                        <p>$1280</p>
                    </div>

                    <div className="flex items-center mb-4 mt-2">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                        <label className="text-gray-600 ml-3 cursor-pointer text-sm font-quicksand">I agree to the <a href="#"
                            className="text-primary">terms & conditions</a>
                        </label>
                    </div>

                    <a href="#"
                        className="block w-full py-3 px-4 text-center font-quicksand text-white bg-primary border border-primary rounded-md hover:bg-transparent hover:text-primary transition font-medium">Place
                        order</a>
                </div>

            </div>
        </section>
    )
}
export default Main;