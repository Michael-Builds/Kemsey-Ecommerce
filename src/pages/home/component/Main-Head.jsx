import Sports from "../../../assets/gym.png";
import Apparel from "../../../assets/shirt.png";
import Accessories from "../../../assets/hat.png";
import Machinery from "../../../assets/cogs.png";
import Garden_Pets from "../../../assets/pet-food.png";
import Furniture from "../../../assets/furniture.png";
import Light from "../../../assets/lightbulb.png";
import Materials from "../../../assets/material.png";
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
  ];
  return (
    <div className="p-6 pl-48 flex bg-gray-100 font-quicksand items-center pr-6 -mt-6">
      <div className="shadow-lg bg-white rounded-md pt-6 pb-8  border-b-2 border-orange">
        <div className=" pl-4 pr-4 -mb-4">
          <p className="text-sm p-2 font-bold text-center bg-orange cat text-white">
            SHOP BY CATEGORIES
          </p>
        </div>
        <div className="grid grid-cols-2 pl-8 pr-8 gap-4 mt-4 border-t-2  border-orange pt-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={category.image}
                alt={category.title}
                className="h-6 w-6 mb-2"
              />
              <a href={`#${category.title.toLowerCase()}`}>
                <p className="font-quicksand text-sm  side ">
                  {category.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Main;
