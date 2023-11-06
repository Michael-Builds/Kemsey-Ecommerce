import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from '../../../assets/court4.jpg';
import { Link } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';

const carouselItems = [
    {
        image: Image,
        title: "Home Comfort",
        description: "Cozy Living Spaces",
        buttonText: "Explore Now ",
        link: "#"
    },

    {
        image: Image,
        title: "Office Furniture",
        description: "Stylish & Functional",
        buttonText: "Explore Now ",
        link: "#"
    },
    {
        image: Image,
        title: "Home Comfort",
        description: "Cozy Living Spaces",
        buttonText: "Shop Now",
        link: "#"

    },
    {
        image: Image,
        title: "Upgrade Workspace",
        description: "Elevate Productivity",
        buttonText: "Shop Now",
        link: "#"

    },
    {
        image: Image,
        title: "Furnished Homes",
        description: "Ultimate Convenience",
        buttonText: "Shop Now",
        link: "#"

    },
    {
        image: Image,
        title: "Enhance Office",
        description: "Comfort & Productivity",
        buttonText: "Explore Now",
        link: "#"
    },
];

const Hero = () => {
    return (
        <div className="-mt-2 relative w-full">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                draggable={true}
                swipeScrollTolerance={3}
                stopOnHover={true}
            >
                {carouselItems.map((item, index) => (
                    <div key={index} className="relative w-full flex items-center justify-center flex-col">
                        <div className="carousel-img relative w-full h-[25rem] sm:h-[35rem] md:h-[35rem] lg:h-120 xl:h-[35rem] text-right overflow-hidden">
                            <img src={item.image} alt="Image" className="object-cover object-center object-contain object-fit h-full w-full" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>
                        </div>
                        <div className="absolute pl-[12%] carousel-text flex flex-col items-start z-20 left-0 -mb-4 md:mb-0">
                            <h1 className="font-raleway -ml-1 text-white text-2xl md:text-5xl font-bold mb-4 tracking-wide leading-tight">
                                {item.title}
                            </h1>
                            <p className="text-white font-quicksand md:text-2xl mb-6">
                                {item.description}
                            </p>
                            <Link to={item.link} className="p-2 text-sm md:text-md flex items-center text-center md:items-center md:text-center bg-primary md:w-[8rem] md:p-3 text-white font-quicksand mb-2 rounded-md cursor-pointer ">
                                {item.buttonText}
                                <GoArrowRight className="ml-2" />
                            </Link>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default Hero;


