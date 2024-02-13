import { CgGym } from "react-icons/cg";
import { IoShirtOutline } from "react-icons/io5";

const Main = () => {
  return (
    <div className="p-6 flex bg-gray-100 font-quicksand items-center pl-6 pr-6">
      <div className="shadow-lg bg-white p-6 rounded-md">
        <div className="relative bg-orange text-white pl-3 pr-3 pt-1 pb-1 cat">
          <div className="border-b-2 border-orange w-full relative z-10">
            <p className="text-sm font-bold">SHOP BY CATEGORIES</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange"></div>
        </div>
      </div>
    </div>
  );
};
export default Main;
