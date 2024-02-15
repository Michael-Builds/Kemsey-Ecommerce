import { Link } from 'react-router-dom';  
import Home_Banner from "../../../assets/home-banner.png";

const Main = () => {
  return (
    <section className="bg-gray-100 lg:pt-8 flex lg:pl-0 lg:pr-0 pl-6 pr-6 items-center justify-center">
      <div >
        <Link to="/shop" > 
          <img
            src={Home_Banner}
            className="w-full lg:h-0  max-w-screen-xl mx-auto cursor-pointer object-cover"
            alt="Home Banner"
          />
        </Link>
      </div>
    </section>
  );
};

export default Main;
