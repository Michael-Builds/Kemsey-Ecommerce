import Hero from './component/Hero'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Features from './component/Features';
import ShopByCategory from './component/ShopByCategory';
import TopNewArrival from './component/TopNewArrival';
import Offer from './component/Offer';
import Recommended from './component/Recommended';
import Footer from '../components/Footer';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        < >
            <NavBar />
            <Hero />
            <Features />
            <ShopByCategory />
            <TopNewArrival />
            <Offer />
            <Recommended />
            <Footer />

        </>
    );
};
export default Home;
