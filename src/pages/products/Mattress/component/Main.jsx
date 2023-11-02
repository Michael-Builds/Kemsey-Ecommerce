
import Img1 from '../../../../assets/products/product1.jpg';
import Img2 from '../../../../assets/products/product2.jpg';
import Img3 from '../../../../assets/products/product3.jpg';
import Img4 from '../../../../assets/products/product4.jpg';
import Img5 from '../../../../assets/products/product5.jpg';
import Img6 from '../../../../assets/products/product6.jpg';
import Img7 from '../../../../assets/products/product7.jpg';
import Img8 from '../../../../assets/products/product8.jpg';
import { useState } from 'react';
import { BsStarFill, BsGridFill } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';

const products = [
    {
        imgSrc: Img1,
        title: 'Guyer Chair',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Furniture',
    },
    {
        imgSrc: Img2,
        title: 'Bed King Size',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Bedroom',
    },
    {
        imgSrc: Img3,
        title: 'Couple Sofa',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Furniture',
    },
    {
        imgSrc: Img4,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Bedroom',
    },
    {
        imgSrc: Img5,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Bedroom',
    },
    {
        imgSrc: Img6,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Furniture',
    },
    {
        imgSrc: Img7,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Furniture',
    },
    {
        imgSrc: Img8,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        category: 'Bedroom',
    },
];

const Main = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const showMore = () => {
        setVisibleProducts(visibleProducts + 4);
    };
    const [activeView, setActiveView] = useState('grid'); // 'grid' or 'list'

    const switchToGrid = () => {
        setActiveView('grid');
    };

    const switchToList = () => {
        setActiveView('list');
    };

    const [selectedCategories, setSelectedCategories] = useState(new Set());

    // Function to handle category checkbox changes
    const handleCategoryChange = (category) => {
        const updatedCategories = new Set(selectedCategories);
        if (updatedCategories.has(category)) {
            updatedCategories.delete(category);
        } else {
            updatedCategories.add(category);
        }
        setSelectedCategories(updatedCategories);
    };

    // Function to check if a category is selected
    const isCategorySelected = (category) => {
        return selectedCategories.has(category);
    };

    // Function to filter products based on selected categories
    const getFilteredProducts = () => {
        if (selectedCategories.size === 0) {
            return products; // If no category is selected, show all products.
        } else {
            return products.filter((product) => selectedCategories.has(product.category));
        }
    };

    const [searchQuery, setSearchQuery] = useState('');

    const getFilteredProductsBySearch = () => {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        if (normalizedQuery === '') {
            return getFilteredProducts();
        } else {
            return getFilteredProducts().filter((product) => {
                return (
                    product.title.toLowerCase().includes(normalizedQuery) ||
                    product.category.toLowerCase().includes(normalizedQuery)
                );
            });
        }
    };

    const [cartItems, setCartItems] = useState([]);

    // Function to add a product to the cart
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    // Function to check if a product is already in the cart
    const isProductInCart = (product) => {
        return cartItems.some((item) => item.title === product.title);
    };


    return (
        <div className="container grid md:grid-cols-4 grid-cols-2 gap-6 pt-4 md:pb-8 items-start">
            {/* SideBar Component */}
            <div className="col-span-1 bg-white px-4 pb-6 shadow-lg rounded overflow-hidden hidden md:block">
                <div className="divide-y divide-gray-200 space-y-5 mt-4">
                    <div>
                        <h3 className="md:text-lg text-gray-800 mb-3 font-quicksand uppercase font-semibold">Categories</h3>
                        <div className="space-y-2 font-quicksand">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="Furniture"
                                    id="cat-Furniture"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    checked={isCategorySelected("Furniture")}
                                    onChange={() => handleCategoryChange("Furniture")}
                                />
                                <label className="text-gray-600 ml-3 cursor-pointer">Furniture</label>
                                <div className="ml-auto text-gray-600 text-sm">
                                    ({products.filter((product) => product.category === "Furniture").length})
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="Bedroom"
                                    id="cat-Bedroom"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    checked={isCategorySelected("Bedroom")}
                                    onChange={() => handleCategoryChange("Bedroom")}
                                />
                                <label className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                <div className="ml-auto text-gray-600 text-sm">
                                    ({products.filter((product) => product.category === "Bedroom").length})
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="Outdoor"
                                    id="cat-Outdoor"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    checked={isCategorySelected("Outdoor")}
                                    onChange={() => handleCategoryChange("Outdoor")}
                                />
                                <label className="text-gray-600 ml-3 cursor-pointer">Outdoor</label>
                                <div className="ml-auto text-gray-600 text-sm">
                                    ({products.filter((product) => product.category === "Outdoor").length})
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="Office"
                                    id="cat-Office"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    checked={isCategorySelected("Office")}
                                    onChange={() => handleCategoryChange("Office")}
                                />
                                <label className="text-gray-600 ml-3 cursor-pointer">Office</label>
                                <div className="ml-auto text-gray-600 text-sm">
                                    ({products.filter((product) => product.category === "Office").length})
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="Sofa"
                                    id="cat-Sofa"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                    checked={isCategorySelected("Sofa")}
                                    onChange={() => handleCategoryChange("Sofa")}
                                />
                                <label className="text-gray-600 ml-3 cursor-pointer">Sofa</label>
                                <div className="ml-auto text-gray-600 text-sm">
                                    ({products.filter((product) => product.category === "Sofa").length})
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="md:text-lg text-gray-800 mb-3 font-quicksand uppercase font-semibold">Brands</h3>
                        <div className="space-y-2 font-quicksand ">
                            <div className="flex items-center ">
                                <input type="checkbox" name="brand-1" id="brand-1"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label className="text-gray-600 ml-3 cursor-pointer">Cooking Color</label>
                                <div className="ml-auto text-gray-600 text-sm">(15)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-2" id="brand-2"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label className="text-gray-600 ml-3 cursor-pointer">Magniflex</label>
                                <div className="ml-auto text-gray-600 text-sm">(9)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-3" id="brand-3"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label className="text-gray-600 ml-3 cursor-pointer">Ashley</label>
                                <div className="ml-auto text-gray-600 text-sm">(21)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-4" id="brand-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label className="text-gray-600 ml-3 cursor-pointer">M&D</label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="brand-5" id="brand-5"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label className="text-gray-600 ml-3 cursor-pointer">Olympic</label>
                                <div className="ml-auto text-gray-600 text-sm">(10)</div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="md:text-lg text-gray-800 mb-3 font-quicksand uppercase font-semibold">Price</h3>
                        <div className="mt-4 flex items-center">
                            <input type="text" name="min" id="min"
                                className="w-full border border-gray-800 focus:outline-none font-quicksand rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="min" />
                            <span className="mx-3 text-gray-500">-</span>
                            <input type="text" name="max" id="max"
                                className="w-full border border-gray-800 focus:outline-none rounded font-quicksand focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                                placeholder="max" />
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="md:text-lg text-gray-800 mb-3 font-quicksand uppercase font-semibold">size</h3>
                        <div className="flex items-center gap-2">
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xs" className="hidden" />
                                <label
                                    className="text-xs font-quicksand border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XS</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-sm" className="hidden" />
                                <label
                                    className="text-xs font-quicksand border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-m" className="hidden" />
                                <label
                                    className="text-xs font-quicksand border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-l" className="hidden" />
                                <label
                                    className="text-xs font-quicksand border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>
                            <div className="size-selector">
                                <input type="radio" name="size" id="size-xl" className="hidden" />
                                <label
                                    className="text-xs font-quicksand border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">XL</label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="md:text-lg text-gray-800 mb-3 font-quicksand uppercase font-semibold">Color</h3>
                        <div className="flex items-center gap-2">
                            <div className="color-selector bg-pink-900">
                                <input type="radio" name="color" id="red" className="hidden" />
                                <label
                                    className="border border-pink-900 rounded-sm h-6 w-6 cursor-pointer shadow-sm block"
                                ></label>
                            </div>
                            <div className="color-selector bg-green-800">
                                <input type="radio" name="color" id="black" className="hidden" />
                                <label
                                    className="border border-green-800 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                >

                                </label>
                            </div>
                            <div className="color-selector bg-orange-800">
                                <input type="radio" name="color" id="white" className="hidden" />
                                <label
                                    className="border border-orange-800 rounded-sm h-6 w-6  cursor-pointer shadow-sm block"
                                ></label>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* Product Component */}
            <div className="col-span-3">
                {/* Header Component of the Product Component */}
                <div className="flex items-center md:mb-6 mb-8">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className=" border text-sm p-2  items-center border-gray-800 focus:outline-none font-quicksand rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                    />

                    <div className="flex gap-2 ml-auto">
                        <div
                            className={`border w-10 h-9 flex items-center justify-center rounded cursor-pointer ${activeView === 'grid' ? 'border-primary bg-primary text-white' : 'border-gray-300 text-primary'
                                }`}
                            onClick={switchToGrid}
                        >
                            <BsGridFill />
                        </div>
                        <div
                            className={`border w-10 h-9 flex items-center justify-center rounded cursor-pointer ${activeView === 'list' ? 'border-primary bg-primary text-white' : 'border-gray-300 text-primary'
                                }`}
                            onClick={switchToList}
                        >
                            <FaListUl />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {getFilteredProductsBySearch().slice(0, visibleProducts).map((product, index) => (
                        <div key={index} className="bg-white shadow rounded overflow-hidden group shadow-lg">
                            <div className="relative">
                                <img src={product.imgSrc} alt={`Product ${index + 1}`} className="w-full cursor-pointer" />
                            </div>
                            <div className="pt-4 pb-3 px-4">
                                <a href="#">
                                    <h4 className="uppercase font-semibold md:text-lg text-md font-quicksand text-center mb-2 text-gray-800 hover:text-primary transition">{product.title}</h4>
                                </a>
                                <div className="flex items-baseline items-center justify-center mb-1 space-x-2 ">
                                    <p className="md:text-xl text-md text-primary font-semibold text-center">{product.price}</p>
                                    <p className="text-sm text-gray-400 line-through text-center">{product.oldPrice}</p>
                                </div>
                                <div className="flex items-center  text-center justify-center mt-2">
                                    <div className="flex gap-1 text-sm text-yellow-400">
                                        {Array.from({ length: product.rating }).map((_, i) => (
                                            <span key={i}><BsStarFill /></span>
                                        ))}
                                    </div>
                                    <div className="text-sm text-gray-500 font-quicksand ml-3">({product.totalReviews})</div>
                                </div>
                            </div>
                            <a
                                href="#"
                                className="block w-full py-1 text-center text-white bg-primary font-quicksand border border-primary rounded-b hover-bg-transparent hover-text-primary transition"
                                onClick={() => addToCart(product)} // Add to cart on click
                                disabled={isProductInCart(product)} // Disable if the product is already in the cart
                            >
                                {isProductInCart(product) ? 'Added to Cart' : 'Add to Cart'}
                            </a>
                        </div>
                    ))}
                </div>

                {visibleProducts < getFilteredProductsBySearch().length && (
                    <div className="text-center md:mt-10 mt-8">
                        <button
                            onClick={showMore}
                            className="bg-primary text-white py-2 px-4 rounded-sm font-quicksand text-sm hover:bg-gray-800 transition"
                        >
                            View More
                        </button>
                    </div>
                )}

            </div>

        </div>
    )
}
export default Main