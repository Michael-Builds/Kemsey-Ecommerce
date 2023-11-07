
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import Breadcrumb from './component/Breadcrumb';
import Main from './component/Main';
import BottomTabNavigator from '../../components/BottomNavigator';
import PreLoader from '../../components/PreLoader';


const Kitchen = () => {
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

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer); // Clear the timeout when the component is unmounted or the dependency changes
        };
    }, []);


    return (
        < >
            {
                isLoading ?
                    <PreLoader />
                    :
                    <div>
                        <NavBar />
                        <Breadcrumb />
                        <Main />
                        <Footer />
                        {isMobile && <BottomTabNavigator />} {/* Conditionally render on mobile */}
                    </div>
            }
        </>
    );
};
export default Kitchen;
