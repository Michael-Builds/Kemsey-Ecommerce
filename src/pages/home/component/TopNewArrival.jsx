import Img1 from '../../../assets/products/product1.jpg';
import Img2 from '../../../assets/products/product2.jpg';
import Img3 from '../../../assets/products/product3.jpg';
import Img4 from '../../../assets/products/product4.jpg';
import { BsSearch, BsHeartFill, BsStarFill } from 'react-icons/bs';
import { Link } from "react-router-dom";


const products = [
    {
        imgSrc: Img1,
        title: 'Guyer Chair',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        url: "/product"
    },
    {
        imgSrc: Img2,
        title: 'Bed King Size',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        url: "/product"

    },
    {
        imgSrc: Img3,
        title: 'Couple Sofa',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        url: "/product"

    },
    {
        imgSrc: Img4,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        url: "/product"

    },
];

const TopNewArrival = () => {
    return (
        <div className="container pb-16 md:mt-4 -mt-2">
            <h2 className="text-2xl font-semibold font-quicksand text-gray-800 capitalize md:mb-6 mb-4">Top New Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white shadow rounded overflow-hidden group shadow-lg">
                        <div className="relative">
                            <img src={product.imgSrc} alt={`Product ${index + 1}`} className="w-full" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <Link to={product.url} className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="view product">
                                    <BsSearch />
                                </Link>
                                <Link to={product.url} className="text-white text-lg w-8 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition" title="add to wishlist">
                                    <BsHeartFill />
                                </Link>
                            </div>
                        </div>
                        <div className="pt-4 pb-3 px-4">
                            <Link to="#">
                                <h4 className="uppercase font-semibold md:text-lg text-md font-quicksand text-center mb-2 text-gray-800 hover:text-primary transition">{product.title}</h4>
                            </Link>
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
                        <Link to="#" className="block w-full py-1 text-center text-white bg-primary font-quicksand border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopNewArrival;
