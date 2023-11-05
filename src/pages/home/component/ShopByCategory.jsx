import Img1 from '../../../assets/category/category-1.jpg';
import Img2 from '../../../assets/category/category-2.jpg';
import Img3 from '../../../assets/category/category-3.jpg';
import Img4 from '../../../assets/category/category-4.jpg';
import Img5 from '../../../assets/category/category-5.jpg';
import Img6 from '../../../assets/category/category-6.jpg';

const categories = [
    {
        imgSrc: Img1,
        title: 'Bedroom',
        link: "/bedroom",
    },
    {
        imgSrc: Img2,
        title: 'Mattress',
        link: "/mattress",

    },
    {
        imgSrc: Img3,
        title: 'Outdoor',
        link: "/outdoor",
    },
    {
        imgSrc: Img4,
        title: 'Sofa',
        link: "/sofa",
    },
    {
        imgSrc: Img5,
        title: 'Living Room',
        link: "/living-room",
    },
    {
        imgSrc: Img6,
        title: 'Kitchen',
        link: "/kitchen",
    },
];

const ShopByCategory = () => {
    return (
        <div className="container py-16">
            <h2 className="text-2xl font-semibold font-quicksand text-gray-800 capitalize md:mb-6 mb-4">Shop by category</h2>
            <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-4">
                {categories.map((category, index) => (
                    <div key={index} className="relative rounded-md overflow-hidden group">
                        <img src={category.imgSrc} alt={`Category ${index + 1}`} className="w-full" />

                        <a href={category.link}
                            className="absolute inset-0 font-quicksand bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-semibold group-hover:bg-opacity-60 transition">
                            {category.title}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopByCategory;
