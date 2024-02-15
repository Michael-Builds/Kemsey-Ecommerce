import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GamePad from "../../../assets/gamepad.png";
import Audio from "../../../assets/audio.png";
import PC from "../../../assets/pc.png";
import TV from "../../../assets/tv.png";
import Phones from "../../../assets/phones.png";
import Img1 from "../../../assets/gamepad.png";
import Img2 from "../../../assets/category/category-2.jpg";
import Img3 from "../../../assets/category/category-3.jpg";
import Img4 from "../../../assets/category/category-4.jpg";
import Img5 from "../../../assets/category/category-5.jpg";
import Img6 from "../../../assets/category/category-6.jpg";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const categories = [
  {
    imgSrc: GamePad,
    title: "Games & Accessories",
    url: "/bedroom",
  },
  {
    imgSrc: Audio,
    title: "  Audio & Video",
    url: "/mattress",
  },
  {
    imgSrc: PC,
    title: "PCs & Accessories",
    url: "/outdoor",
  },
  {
    imgSrc: TV,
    title: "Televisions",
    url: "/sofa",
  },
  {
    imgSrc: Phones,
    title: "Mobile Phones",
    url: "/kitchen",
  },
  {
    imgSrc: TV,
    title: "Televisions",
    url: "/sofa",
  },
];

const ShopByCategory = () => {
  const PrevArrow = (props) => (
    <div {...props} className="slick-arrow slick-prev ">
      Prev
    </div>
  );

  const NextArrow = (props) => (
    <div {...props} className="slick-arrow slick-next ">
      Next
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    accessibility: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100">
      <div className="container py-16 px-10">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold font-quicksand text-gray-800 capitalize">
            Shop by category
          </h2>
          <p className="underline cursor-pointer font-quicksand">View All</p>
        </div>
        <Slider {...settings} className="justify-center items-center">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative slick-slide mt-12 text-center lg:pl-2 pl-2 pr-2"
            >
              <div className="bg-white lg:h-56 lg:w-56 h-[10rem] w-[10rem] shadow-md delay-2000 transition-transform transform hover:scale-110 cursor-pointer rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src={category.imgSrc}
                  className="items-center p-10"
                  alt={`Category ${index + 1}`}
                />
              </div>
              <p
                className="font-quicksand mt-2 cursor-pointer lg:text-lg text-xs"
                id="category_text"
              >
                {category.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ShopByCategory;
