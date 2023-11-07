import Img1 from '../../../assets/icons/delivery-van.svg';
import Img2 from '../../../assets/icons/money-back.svg';
import Img3 from '../../../assets/icons/service-hours.svg';

const featuresData = [
    {
        imgSrc: Img1 ,
        title: 'Free Shipping',
        description: 'Order over $200',
    },
    {
        imgSrc:  Img2 ,
        title: 'Money Returns',
        description: '30 days money returns',
    },
    {
        imgSrc:  Img3 ,
        title: '24/7 Support',
        description: 'Customer support',
    },
];

const Features = () => {
    return (
        <div className="container py-16 -mb-14">
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center ">
                {featuresData.map((feature, index) => (
                    <div key={index} className="border border-primary rounded-md px-3 py-6 flex justify-center items-center gap-5">
                        <img
                            src={feature.imgSrc}
                            alt="image"
                            className="w-12 h-12 object-contain"
                        />
                        <div>
                            <h4 className="font-semibold capitalize font-quicksand text-lg mb-2">{feature.title}</h4>
                            <p className="text-gray-500 text-sm font-medium font-quicksand">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
