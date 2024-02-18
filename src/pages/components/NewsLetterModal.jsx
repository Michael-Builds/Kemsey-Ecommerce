import { useState } from "react";
import PropTypes from "prop-types";
import EmailBg from "../../assets/mail.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";


const Main = ({ onClose }) => {
  const data = [
    {
      id: 1,
      icon: <FaFacebookF />,
      hoverColor: "bg-blue-500",
      link: "/facebook",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      hoverColor: "bg-pink-500",
      link: "/instagram",
    },
    {
      id: 3,
      icon: <FaPinterestP />,
      hoverColor: "bg-red-500",
      link: "/pinterest",
    },
    {
      id: 4,
      icon: <FaSnapchat />,
      hoverColor: "bg-yellow-500",
      link: "/snapchat",
    },
    {
      id: 5,
      icon: <FaXTwitter />,
      hoverColor: "bg-blue-400",
      link: "/twitter",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (

    <div className=" h-screen dancing-container flex  items-center justify-center bg-overlay relative">
      <div className="flex relative">
        {/* Left */}
        <div className="hidden w-1/2 lg:flex lg:items-center lg:justify-center lg:w-full overflow-hidden sub-form-bg ">
          <img
            src={EmailBg}
            alt="Email Background"
            className="object-fit "
          />
        </div>

        {/* -ml-1 lg:w-full w-1/2 overflow-hidden bg-white pb-8  relative */}
        {/* Right */}
        <div className=" bg-white pb-8 sub-form-card">
          <button
            className="absolute form-close-card -top-4 -right-4 bg-orange p-3 m-4 text-white"
            onClick={onClose}
          >
            <TfiClose className="rotate-on-hover" />
          </button>
          <div className="text-center items-center mt-16">
            <p className="text-xl mb-8 font-bold font-quicksand text-center uppercase mt-4">
              Open a Store for Free
            </p>

            <div className="justify-center -mt-4 font-quicksand max-w-[80%] mx-auto">
              <p className="text-center text-sm">
                <span className="font-bold mr-1">Special Offer: </span>Start
                for free, then get your
                <span className="font-bold ml-1">first month for $1</span>
              </p>
            </div>
            <div className="mt-6 font-quicksand pl-16 pr-16 ">
              <p className="border border-orange rounded-full pt-2 pb-2 lg:text-base text-sm">
                don not miss out this sale
              </p>

              <button className="mt-4 p-2 w-full lg:w-56 lg:text-base text-sm text-center whitespace-nowrap font-quicksand text-white sub-button rounded-full">
                Start Now
              </button>

              <div className="mt-6 flex items-center gap-6 justify-center">
                {data.map((item, index) => (
                  <div key={index}>
                    <Link to={item.link}>
                      <p
                        className={`p-1 transition duration-300 ease-in-out transform hover:${item.hoverColor}`}
                      >
                        {item.icon}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center items-center gap-2">
                <input
                  type="checkbox"
                  id="myCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <Link
                  to="/unsubscribe"
                  className="font-quicksand text-xs font-medium"
                  id="category_text"
                >
                  Include additional options
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>

  );
};

Main.propTypes = {
  onClose: PropTypes.func.isRequired,
};


export default Main;
