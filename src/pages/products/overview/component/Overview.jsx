import Img1 from '../../../../assets/products/product1.jpg';
import Img2 from '../../../../assets/products/product2.jpg';
import Img3 from '../../../../assets/products/product3.jpg';
import Img4 from '../../../../assets/products/product4.jpg';
import Img5 from '../../../../assets/products/product5.jpg';
import { BsStarFill, BsFillHeartFill, BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { useState } from 'react';

const products = [
    {
        imgSrc: Img1,
        title: 'Guyer Chair',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        link: "/product"
    },
    {
        imgSrc: Img2,
        title: 'Bed King Size',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        link: "/product"

    },
    {
        imgSrc: Img3,
        title: 'Couple Sofa',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        link: "/product"

    },
    {
        imgSrc: Img4,
        title: 'Mattrass X',
        price: '$45.00',
        oldPrice: '$55.90',
        rating: 5,
        totalReviews: 150,
        link: "/product"

    },
];

const Overview = () => {
    const [selectedImage, setSelectedImage] = useState(Img1); // Initialize with your default image source
    const [imageList, setImageList] = useState([Img1, Img2, Img3, Img4, Img5]); // Add your image sources to this list

    const handleImageClick = (clickedImage) => {
        // Swap the selectedImage with the clicked image
        const newImageList = imageList.map((image) => {
            if (image === clickedImage) {
                return selectedImage;
            } else if (image === selectedImage) {
                return clickedImage;
            }
            return image;
        });

        setSelectedImage(clickedImage);
        setImageList(newImageList);
    };


    // Quantity Increament or Decreament
    const [count, setCount] = useState(1);

    const decreaseCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const increaseCount = () => {
        setCount(count + 1);
    };


    // Size Picker
    const [selectedSize, setSelectedSize] = useState(null);

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'];


    // Color Palete Selector
    const [selectedColor, setSelectedColor] = useState(null);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const colorOptions = [
        { id: 'red', bgColor: 'bg-blue-800', borderColor: 'border-blue-800' },
        { id: 'black', bgColor: 'bg-red-600', borderColor: 'border-red-600' },
        { id: 'white', bgColor: 'bg-pink-600', borderColor: 'border-pink-600' },
    ];

    return (

        <section>
            {/* Product Detail */}
            <div className="container grid md:grid-cols-2 gap-6">

                {/* Item Display Left image categories */}
                <div>
                    <img
                        src={selectedImage}
                        alt="product"
                        className={`w-full border border-${selectedColor} `}
                        onContextMenu={(e) => e.preventDefault()}
                    />

                    <div className="grid grid-cols-5 gap-4 mt-4">
                        {imageList.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`product${index + 2}`}
                                className="w-full cursor-pointer border"
                                onClick={() => handleImageClick(image)}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        ))}
                    </div>
                </div>
                {/* Image Right */}
                <div className='ml-4'>
                    <h2 className="md:text-3xl text-2xl font-bold font-quicksand uppercase md:mb-2 mb-4 md:mt-0 mt-4">Italian L Shape Sofa</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><BsStarFill /></span>
                            <span><BsStarFill /></span>
                            <span><BsStarFill /></span>
                            <span><BsStarFill /></span>
                            <span><BsStarFill /></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(150 Reviews)</div>
                    </div>
                    {/* Item Price and availability */}
                    <div className="space-y-2 mt-6">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span className='font-quicksand font-semibold text-lg'>Availability: </span>
                            <span className="text-green-600 font-quicksand">In Stock</span>
                        </p>
                        <p className="space-x-2">
                            <span className='font-quicksand font-semibold text-lg'>Brand: </span>
                            <span className="text-gray-600 font-quicksand">Apex</span>
                        </p>
                        <p className="space-x-2">
                            <span className='font-quicksand font-semibold text-lg'>Category: </span>
                            <span className="text-gray-600 font-quicksand">Sofa</span>
                        </p>
                        <p className="space-x-2">
                            <span className='font-quicksand font-semibold text-lg'>SKU: </span>
                            <span className="text-gray-600 font-quicksand">BE45VGRT</span>
                        </p>
                    </div>

                    {/* Price tag */}
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold font-quicksand">$45.00</p>
                        <p className="text-base text-gray-400 line-through font-quicksand">$55.00</p>
                    </div>

                    {/* Short descriptiom */}

                    <p className="mt-4 text-gray-600 font-quicksand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos eius eum
                        reprehenderit dolore vel mollitia optio consequatur hic asperiores inventore suscipit, velit
                        consequuntur, voluptate doloremque iure necessitatibus adipisci magnam porro.
                    </p>

                    {/* Sizes */}
                    <div className="pt-4">
                        <h3 className="text-lg text-gray-800 uppercase mb-4 mt-4 font-bold font-quicksand">Size</h3>
                        <div className="flex items-center gap-2">
                            {sizeOptions.map((size) => (
                                <div className="size-selector" key={size}>
                                    <input
                                        type="radio"
                                        name="size"
                                        id={`size-${size.toLowerCase()}`}
                                        className="hidden"
                                        checked={selectedSize === size}
                                        onChange={() => handleSizeSelect(size)}
                                    />
                                    <label
                                        htmlFor={`size-${size.toLowerCase()}`}
                                        className={`text-xs border border-gray-200 rounded-sm h-8 w-8 flex items-center justify-center cursor-pointer shadow-sm ${selectedSize === size
                                            ? 'bg-primary text-white' // Apply styles for the selected size
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        {size}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Color Palete */}
                    <div className="pt-4">
                        <h3 className="text-lg text-gray-800 uppercase mb-4 mt-4 font-bold font-quicksand">Color</h3>
                        <div className="flex items-center gap-2">
                            {colorOptions.map((color) => (
                                <div className="color-selector" key={color.id}>
                                    <input
                                        type="radio"
                                        name="color"
                                        id={color.id}
                                        className="hidden"
                                        checked={selectedColor === color.id}
                                        onChange={() => handleColorSelect(color.id)}
                                    />
                                    <label
                                        className={`border ${color.borderColor} ${color.bgColor} rounded-sm h-6 w-6 cursor-pointer shadow-sm block`}
                                    ></label>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Quanity Selector */}
                    <div className="mt-8">
                        <h3 className="text-lg text-gray-800 uppercase mb-2 mt-4 font-bold font-quicksand">Quantity</h3>
                        <div className="flex border border-primary text-gray-600 divide-x divide-gray-300 w-max ">
                            <div
                                className="h-8 w-8 text-xl flex items-center text-white bg-primary justify-center cursor-pointer select-none"
                                onClick={decreaseCount}
                            >
                                -
                            </div>
                            <div className="h-8 w-8 text-base flex items-center justify-center font-quicksand">
                                {count}
                            </div>
                            <div
                                className="h-8 w-8 text-xl text-white bg-primary flex items-center justify-center cursor-pointer select-none"
                                onClick={increaseCount}
                            >
                                +
                            </div>
                        </div>
                    </div>

                    {/* Call to Actions */}
                    <div className="mt-6 flex gap-2 border-b border-gray-200 pb-5 pt-5">
                        <a href="#"
                            className="bg-primary border border-primary font-quicksand text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <FaCartArrowDown /> Add to cart
                        </a>
                        <a href="#"
                            className="border border-gray-300 font-quicksand text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition">
                            <BsFillHeartFill /> Wishlist
                        </a>
                    </div>

                    {/* Social Media Handles */}
                    <div className="flex gap-3 mt-4">
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <BsFacebook />
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <RiTwitterXLine />
                        </a>
                        <a href="#"
                            className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <BsInstagram />
                        </a>
                    </div>


                </div>
            </div>

            {/* Product Description */}
            <div className="container pb-8">
                <h3 className="border-b border-gray-200 font-quicksand text-gray-800 text-lg pb-3 font-medium md:mt-0 mt-6">Product details</h3>
                <div className="md:w-3/5 pt-4">
                    <div className="text-gray-600 font-quicksand">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur necessitatibus deleniti natus
                            dolore cum maiores suscipit optio itaque voluptatibus veritatis tempora iste facilis non aut
                            sapiente dolor quisquam, ex ab.
                        </p>
                        <p className='md:mt-6 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quae accusantium voluptatem
                            blanditiis sapiente voluptatum. Autem ab, dolorum assumenda earum veniam eius illo fugiat possimus
                            illum dolor totam, ducimus excepturi.
                        </p>

                    </div>

                    <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-10 -mb-8">
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium font-quicksand">Color</th>
                            <th className="py-2 px-4 border border-gray-300 font-quicksand">Blank, Brown, Red</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium font-quicksand">Material</th>
                            <th className="py-2 px-4 border border-gray-300 font-quicksand">Latex</th>
                        </tr>
                        <tr>
                            <th className="py-2 px-4 border border-gray-300 w-40 font-medium font-quicksand">Weight</th>
                            <th className="py-2 px-4 border border-gray-300 font-quicksand ">55kg</th>
                        </tr>
                    </table>
                </div>
            </div>

            {/* Related Products */}
            <div className="container pb-18">
                <h2 className="text-2xl font-semibold font-quicksand text-gray-800 uppercase md:mb-6 mb-4 mt-10">Related products</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <div key={index} className="bg-white shadow rounded overflow-hidden group shadow-lg">
                            <div className="relative">
                                <img src={product.imgSrc} alt={`Product ${index + 1}`} className="w-full" />
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
                            <a href="#" className="block w-full py-1 text-center text-white bg-primary font-quicksand border border-primary rounded-b hover:bg-transparent hover:text-primary transition">Add to cart</a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
export default Overview;