import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BottomTabNavigator from "../components/BottomNavigator";
import PreLoader from "../components/PreLoader";
import Header from "./component/Header";
import Hero_Header from "./component/Main-Head";
import Terms from "../components/Conditions";
import Discount from "./component/Discount";
import Category from "./component/ShopByCategory";
import ShopWithUs from "./component/ShopWithUs";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [isMobile, setIsMobile] = useState(false); // State to check if it's a mobile device

  // Function to check screen width and set the isMobile state
  const checkIsMobile = () => {
    if (window.innerWidth <= 884) {
      // You can adjust this width as needed
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Check on initial component load
    checkIsMobile();
    // Attach an event listener to check when the window is resized
    window.addEventListener("resize", checkIsMobile);
    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <NavBar />
          <Header />
          <Hero_Header />
          <Discount />
          <Category />
          {/* <Offer /> */}
          {/* <Hero /> */}
          {/* <Features /> */}
          {/* <ShopByCategory /> */}
          {/* <TopNewArrival /> */}

          {/* <Recommended /> */}
          <ShopWithUs />
          <Footer />
          {isMobile && <BottomTabNavigator />}
        </div>
      )}
    </>
  );
};

export default Home;
