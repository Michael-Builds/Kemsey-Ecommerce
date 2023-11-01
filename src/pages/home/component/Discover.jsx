import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Image from '../../../assets/item.png';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const Discover = () => {
    const initialItems = [
        {
            title: "Explore new arrivals",
            description: "Shop the latest from top brands outfits",
            link: "/link1",
            color: "bg-amber-100",
            image: Image,
        },
        {
            title: "Discover exclusive deals",
            description: "Save big on your favorite products",
            link: "/link2",
            color: "bg-blue-100",
            image: Image,
        },
        {
            title: "Healthy living choices",
            description: "Find products for a balanced lifestyle",
            link: "/link3",
            color: "bg-green-100",
            image: Image,
        },
        {
            title: "Explore new arrivals",
            description: "Shop the latest from top brands outfits",
            link: "/link4",
            color: "bg-pink-100",
            image: Image,
        },
        {
            title: "Home decor inspirations",
            description: "Transform your space with our unique decor",
            link: "/link5",
            color: "bg-purple-100",
            image: Image,
        },
        {
            title: "Home decor inspirations",
            description: "Transform your space with our unique decor",
            link: "/link5",
            color: "bg-purple-100",
            image: Image,
        },
    ];

    const [items, setItems] = useState(initialItems);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const showNextItem = () => {
        if (currentItemIndex < items.length - 1) {
            const updatedItems = [...items];
            [updatedItems[currentItemIndex], updatedItems[currentItemIndex + 1]] = [updatedItems[currentItemIndex + 1], updatedItems[currentItemIndex]];
            setItems(updatedItems);
            setCurrentItemIndex(currentItemIndex + 1);
        }
    };

    const showPreviousItem = () => {
        if (currentItemIndex > 0) {
            const updatedItems = [...items];
            [updatedItems[currentItemIndex], updatedItems[currentItemIndex - 1]] = [updatedItems[currentItemIndex - 1], updatedItems[currentItemIndex]];
            setItems(updatedItems);
            setCurrentItemIndex(currentItemIndex - 1);
        }
    };


    return (
        <section className="py-10">
            <div className="w-[90%] 2xl:w-[1440px] mx-auto ">
                <div className="flex justify-between items-center mb-10">
                    <h3 className="md:text-2xl sm:text-xl sm:max-w-[50%] font-bold mt-2 md:max-w-[50%] dark:text-slate-200 font-quicksand">
                        Recommended for you
                    </h3>
                    <div className="flex items-center space-x-5">
                        <i className="border rounded-full p-2">
                            <AiOutlineArrowLeft className="md:text-2xl sm:text-xl rounded-full" onClick={showPreviousItem} />
                        </i>
                        <i className="border rounded-full p-2">
                            <AiOutlineArrowRight className="md:text-2xl sm:text-xl rounded-full" onClick={showNextItem} />
                        </i>
                    </div>
                </div>
                <section className="flex flex-shrink-0 flex-auto flex-wrap w-full py-5 sm:mx-auto">
                    {items.map((item, index) => (
                        <div key={index} className="w-full sm:w-[33.33%] pr-5 pb-5">
                            <div className={`p-5 ${item.color} h-72 sm:h-[250px] flex w-full items-center gap-6 rounded-xl`}>
                                <div className="w-full sm:w-1/2">
                                    <div>
                                        <p className="font-quicksand max-w-full md:max-w-[100%] sm:text-md sm:text-sm">{item.title}</p>
                                        <p className="font-bold text-xl sm:text-lg md:text-2xl font-quicksand mt-2 sm:mt-4 mb-6 sm:mb-12 w-full">{item.description}</p>
                                    </div>
                                    <p className="text-center">
                                        <Link to={item.link} className="w-24 sm:w-32 md:w-24 px-3 flex items-center py-2 md:-mt-6 font-quicksand dark:bg-black bg-white shadow-lg rounded-lg text-sm">
                                            Reveal <IoIosArrowForward className="ml-1" />
                                        </Link>
                                    </p>
                                </div>
                                <div className="w-full sm:w-1/2">
                                    <div className="w-full h-[150px] sm:h-[200px] overflow-hidden">
                                        <img src={item.image} alt="" className="object-cover w-full h-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </section>
    );
};

export default Discover;
