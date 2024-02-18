import  { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BottomTabNavigator from "../components/BottomNavigator";
import PreLoader from "../components/PreLoader";
import Header from "./component/Header";
import Hero_Header from "./component/Main-Head";
import Category from "./component/ShopByCategory";
import ShopWithUs from "./component/ShopWithUs";
import Subscription from "../components/NewsLetterModal";

const Home = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showSubscription, setShowSubscription] = useState(false);

  useEffect(() => {
    // Scroll to the top when the location changes
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // Check screen width on initial component load and on window resize
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 884);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Show subscription popup after an additional delay of 3 seconds
    const subscriptionTimer = setTimeout(() => {
      setShowSubscription(true);
      document.body.style.overflow = "hidden"; // Prevent scrolling
    }, 5000); // 2000ms (loading) + 3000ms (additional delay)

    // Clean up timers and reset styles
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(subscriptionTimer);
      document.body.style.overflow = ""; // Allow scrolling
    };
  }, []);

  const handleCloseSubscription = () => {
    setShowSubscription(false);
    document.body.style.overflow = ""; // Allow scrolling when modal is closed
  };

  return (
    <>
      {isLoading ? (
        <PreLoader />
      ) : (
        <div>
          <NavBar />
          <Header />
          <Hero_Header />
          <Category />
          <ShopWithUs />
          <Footer />
          {isMobile && <BottomTabNavigator />}
          {showSubscription && (
            <>
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  zIndex: 9999,
                }}
                onClick={handleCloseSubscription}
              ></div>

              <div
                className="modal-container"
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%) scale(1)",
                  zIndex: 10000,
                  transition: "transform 0.3s ease-in-out",
                }}
              >
                <Subscription onClose={handleCloseSubscription} />
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
