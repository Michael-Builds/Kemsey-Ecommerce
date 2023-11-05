import Img1 from '../../../assets/icons/delivery-van.svg';
import Img2 from '../../../assets/icons/money-back.svg';
import Img3 from '../../../assets/icons/service-hours.svg';

const Features = () => {
    return (
        <div className="container py-16 -mb-14">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
                <div className="border border-primary rounded-md px-3 py-6 flex justify-center items-center gap-5">
                    <img
                        src={Img1}
                        alt="Delivery"
                        className="w-12 h-12 object-contain" />
                    <div>
                        <h4 className="font-semibold capitalize font-quicksand text-lg mb-2">Free Shipping</h4>
                        <p className="text-gray-500 text-sm">Order over $200</p>
                    </div>
                </div>
                <div className="border border-primary rounded-md px-3 py-6 flex justify-center items-center gap-5">
                    <img src={Img2} alt="Delivery" className="w-12 h-12 object-contain" />
                    <div>
                        <h4 className="font-semibold capitalize font-quicksand text-lg mb-2">Money Returns</h4>
                        <p className="text-gray-500 text-sm">30 days money returs</p>
                    </div>
                </div>
                <div className="border border-primary rounded-md px-3 py-6 flex justify-center items-center gap-5">
                    <img src={Img3} alt="Delivery" className="w-12 h-12 object-contain" />
                    <div>
                        <h4 className="font-semibold capitalize font-quicksand text-lg mb-2">24/7 Support</h4>
                        <p className="text-gray-500 text-sm">Customer support</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features