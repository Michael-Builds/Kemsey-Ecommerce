import { Link, useLocation } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { FaHandshake } from 'react-icons/fa';
import { MdSell } from 'react-icons/md';

const BottomTabNavigator = () => {
    const location = useLocation();

    // Function to determine if the given path is the current route
    const isCurrentRoute = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-md">
            <div className="flex justify-between mx-auto max-w-screen-xl p-4">
                <Link to="/" className={`flex flex-col items-center ${isCurrentRoute("/") ? "text-primary" : "text-gray-600"} hover:text-primary`}>
                    <FaHome className="text-2xl mb-1" />
                    Home
                </Link>
                <Link to="/shop" className={`flex flex-col items-center ${isCurrentRoute("/shop") ? "text-primary" : "text-gray-600"} hover:text-primary`}>
                    <FaShoppingCart className="text-2xl mb-1" />
                    Shop
                </Link>
                <Link to="/sell" className={`flex flex-col items-center ${isCurrentRoute("/search") ? "text-primary" : "text-gray-600"} hover:text-primary`}>
                    <MdSell className="text-2xl mb-1" />
                    Sell
                </Link>
                <Link to="/search" className={`flex flex-col items-center ${isCurrentRoute("/search") ? "text-primary" : "text-gray-600"} hover:text-primary`}>
                    <FaHandshake className="text-2xl mb-1" />
                    Partner
                </Link> 
            </div>
        </nav>
    );
};

export default BottomTabNavigator;
