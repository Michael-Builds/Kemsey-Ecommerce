import Hero from './component/Hero'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'
import Features from './component/Features';
import ShopByCategory from './component/ShopByCategory';
import TopNewArrival from './component/TopNewArrival';

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

        </>
    );
};
export default Home;
