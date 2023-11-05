import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import Breadcrumb from './component/Breadcrumb'
import General from './component/Overview';

const Overview = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        < >
            <NavBar />
            <Breadcrumb />
            <General />
            <Footer />
        </>
    );
};
export default Overview;
