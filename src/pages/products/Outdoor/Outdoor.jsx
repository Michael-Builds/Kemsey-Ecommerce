
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import Breadcrumb from './component/Breadcrumb';
import Main from './component/Main';

const Outdoor = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        < >
            <NavBar />
            <Breadcrumb />
            <Main />
            <Footer />

        </>
    );
};
export default Outdoor;
