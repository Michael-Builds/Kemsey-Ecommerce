import Hero from './component/Hero'
import { useEffect, useState } from 'react'; // Import useState
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Features from './component/Features';
import ShopByCategory from './component/ShopByCategory';
import TopNewArrival from './component/TopNewArrival';
import Offer from './component/Offer';
import Recommended from './component/Recommended';
import Footer from '../components/Footer';
import BottomTabNavigator from '../components/BottomNavigator';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const [isMobile, setIsMobile] = useState(false); // State to check if it's a mobile device

    // Function to check screen width and set the isMobile state
    const checkIsMobile = () => {
        if (window.innerWidth <= 768) { // You can adjust this width as needed
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        // Check on initial component load
        checkIsMobile();
        // Attach an event listener to check when the window is resized
        window.addEventListener('resize', checkIsMobile);
        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    return (
        <>
            <NavBar />
            <Hero />
            <Features />
            <ShopByCategory />
            <TopNewArrival />
            <Offer />
            <Recommended />
            <Footer />
            {isMobile && <BottomTabNavigator />} {/* Conditionally render on mobile */}
        </>
    );
};

export default Home;
