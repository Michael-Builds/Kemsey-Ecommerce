import Bg1 from "../../../assets/bg1.jpg";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShopWithUs = () => {

  const data = [
    {
      icon: <FaStarHalfAlt />,
      title: "Quality and Saving",
      description: "Control quality and affordable prices with savings",
    },
    {
      icon: <FaWarehouse />,
      title: "Global WareHouse",
      description: "Overseas warehouses offering global distribution",
    },
    {
      icon: <FaTruck />,
      title: "Fast Shipping",
      description: "Convenient door-to-door delivery for fast shipping",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Payment",
      description: "Reliable and secure payment methods for your safety",
    },
    {
      icon: <FaQuestionCircle />,
      title: "Have Questions?",
      description: "Customer Service available 24/7 - We're here to help!",
    },
  ];

  return (
    <div
      className="p-10 justify-center items-center text-center"
      style={{
        backgroundImage: `url(${Bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <p className="font-quicksand font-bold text-white text-3xl mt-3">
        Why Shop With Us?
      </p>
      <div className="grid grid-cols-1 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-6 mt-2 mx-auto">
        {data.map((items, index) => (
          <div
            key={index}
            className="bg-white rounded-md xl:mt-8 -mt-4 cursor-pointer p-6 xl:pb-14 pb-16 flex flex-col items-center mb-12  transition-transform transform hover:translate-y-[-10px] duration-6000"
          >
            <p className="text-4xl text-orange mt-4">{items.icon}</p>
            <p className="uppercase whitespace-nowrap font-quicksand font-bold mt-5 text-sm">
              {items.title}
            </p>
            <p className="font-quicksand text-xs mt-3 -mb-4 lg:mb-0 ">
              {items.description}
            </p>
          </div>
        ))}
      </div>

      <p className="font-quicksand text-white text-sm -mt-6 ">
        Vivamus dapibus odio metus, ac scelerisque urna condimentum id.
      </p>
      <Link
        to="/shop"
        className="font-quicksand text-yellow-500 text-sm mt-2 mb-6 cursor-pointer underline"
      >
        Start your order now
      </Link>
    </div>
  );
};

export default ShopWithUs;
