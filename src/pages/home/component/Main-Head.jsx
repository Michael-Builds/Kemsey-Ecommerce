import Sports from "../../../assets/gym.png";
import Apparel from "../../../assets/shirt.png";
import Accessories from "../../../assets/hat.png";
import Machinery from "../../../assets/cogs.png";
import Garden_Pets from "../../../assets/pet-food.png";
import Furniture from "../../../assets/furniture.png";
import Light from "../../../assets/lightbulb.png";
import Materials from "../../../assets/material.png";
import Main_Image from "../../../assets/main.jpg";
import first from "../../../assets/1.avif";
import second from "../../../assets/2.avif";
import third from "../../../assets/3.avif";
import fourth from "../../../assets/4.avif";

const Main = () => {

  const categories = [
    {
      id: 1,
      title: "Sports",
      image: Sports,
    },
    {
      id: 2,
      title: "Apparel",
      image: Apparel,
    },
    {
      id: 3,
      title: "Accessories",
      image: Accessories,
    },
    {
      id: 4,
      title: "Materials",
      image: Materials,
    },
    {
      id: 5,
      title: "Machinery",
      image: Machinery,
    },
    {
      id: 6,
      title: "Garden & Pets",
      image: Garden_Pets,
    },
    {
      id: 7,
      title: "Furniture",
      image: Furniture,
    },
    {
      id: 8,
      title: "Lighting",
      image: Light,
    },
    {
      id: 7,
      title: "Furniture",
      image: Furniture,
    },
    {
      id: 8,
      title: "Lighting",
      image: Light,
    },
    {
      id: 7,
      title: "Furniture",
      image: Furniture,
    },
    {
      id: 8,
      title: "Lighting",
      image: Light,
    },
  ];

  const items = [
    {
      id: 1,
      image: first,
    },
    {
      id: 1,
      image: second,
    },
    {
      id: 1,
      image: third,
    },
    {
      id: 1,
      image: fourth,
    },
  ];

  return (
    <div className="p-6 justify-center pb-8 lg:flex bg-gray-100 lg:gap-5 font-quicksand items-center  -mt-6">
     
      {/* Categories */}
      <div className="shadow-lg bg-white rounded-md lg:pt-4  h-[32rem] border-b-2 border-orange">
        <div className=" pl-4 pr-4 -mb-4 ">
          <p className="text-sm p-2 font-bold text-center  bg-orange cat text-white">
            SHOP BY CATEGORIES
          </p>
        </div>
        <div
          className="grid grid-cols-2 pl-12 pr-12 gap-4 mt-4 border-t-2 -pb-3 border-orange pt-4 "
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="lg:h-5 h-6 w-6 lg:w-5 mb-2"
              />
              <a href={`#${category.title.toLowerCase()}`}>
                <p className="font-quicksand text-sm side ">{category.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Main Image */}
      <div className="relative group lg:mt-0 mt-12 cursor-pointer">
        <img
          src={Main_Image}
          alt="Main"
          className="w-full  object-cover rounded-md cursor-pointer transition duration-300 transform group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition duration-300 group-hover:opacity-100 rounded-md"></div>
      </div>

      {/* Display */}
      <div className=" rounded-md lg:mt-0 mt-12">
        <div className="grid grid-cols-2 gap-2 mt-2">
          {items.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={item.image}
                alt={`Item ${index}`}
                className="w-full  object-contain object-cover rounded-md  transition duration-300 transform group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 transition duration-300 group-hover:opacity-100 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};
export default Main;
