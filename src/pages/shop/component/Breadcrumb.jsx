import { IoIosArrowForward } from "react-icons/io";
import { HiHome } from "react-icons/hi2";

const Breadcrumb = () => {
  return (
    <div>
      <div className="container py-4 flex items-center gap-3">
        <a href="/" className="text-orange text-base">
          <HiHome />
        </a>
        <span className="text-sm text-gray-400">
          <IoIosArrowForward />
        </span>
        <p className="text-gray-600 font-medium font-quicksand">Shop</p>
      </div>
    </div>
  );
};
export default Breadcrumb;
