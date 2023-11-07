import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import PropTypes from 'prop-types';
import User from '../../assets/user.jpeg';

const Sidebar = ({ setNavToggle }) => {
  // Add a state or variable to toggle between light and dark mode
  const isLightMode = false; // Set this to true for light mode and false for dark mode

  // Define CSS classes based on the mode
  const sidebarClass = isLightMode ? " " : "bg-white";
  const textClass = isLightMode ? "text-white" : "text-slate-900";
  const searchIconClass = isLightMode ? "text-gray-500" : "text-slate-500";
  const inputClass = isLightMode ? "border" : "border border-slate-500";

  return (
    <section className={`lg:hidden fixed top-0 left-0 w-full h-full md:w-[400px] ${sidebarClass} z-10 overflow-auto`}>
      <aside className="p-5 ">
        <div className={`flex justify-between items-center mb-5 ${textClass}`}>
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={User}
              alt=""
              className="w-full h-full object-center object-cover"
            />
          </div>
          <p
            onClick={() => setNavToggle(false)}
            className={`p-2 rounded-full hover:bg-slate-200 ${textClass}`}
          >
            <VscClose className="text-2xl" />
          </p>
        </div>
        <p className={`mb-4 font-quicksand text-sm ${textClass}`}>
          Discover the most outstanding articles on all topics of life. Write
          your stories and share them
        </p>

        <div className={`relative flex items-center p-2 rounded-lg mb-5 -ml-2`}>
          <div className={`absolute left-2 top-1/2 transform pl-2 -translate-y-1/2 ${searchIconClass}`}>
            <CiSearch className="text-2xl cursor-pointer" />
          </div>
          <input
            type="text"
            className={`pl-10 pr-2 py-2 rounded-lg w-full bg-transparent ${inputClass} focus:outline-none`}
            placeholder="Type to search..."
          />
        </div>

        <ul className={`grid gap-3 font-quicksand -mb-24 ${textClass}`}>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </aside>
    </section>
  );
};

Sidebar.propTypes = {
  setNavToggle: PropTypes.func.isRequired,
};

export default Sidebar;
