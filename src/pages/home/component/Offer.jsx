import offer from '../../../assets/offer.jpg';
import { Link } from "react-router-dom";


const Offer = () => {
    return (
        <div className="container pb-16 md:mt-8 -mt-2">
            <Link to="/shop">
                <img src={offer} alt="ads" className="w-full" />
            </Link>
        </div>
    )
}
export default Offer;