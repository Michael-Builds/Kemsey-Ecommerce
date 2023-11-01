import { RiTwitterXFill } from 'react-icons/ri';
import Logo from '../../assets/logo.jpg'
import Method from '../../assets/methods.png'
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

const footerLinks = [
    {
        heading: 'Solutions',
        links: [
            { text: 'Marketing', url: '#' },
            { text: 'Analytics', url: '#' },
            { text: 'Commerce', url: '#' },
            { text: 'Insights', url: '#' },
        ],
    },
    {
        heading: 'Solutions',
        links: [
            { text: 'Marketing', url: '#' },
            { text: 'Analytics', url: '#' },
            { text: 'Commerce', url: '#' },
            { text: 'Insights', url: '#' },
        ],
    },


    {
        heading: 'Support',
        links: [
            { text: 'Pricing', url: '#' },
            { text: 'Documentation', url: '#' },
            { text: 'Guides', url: '#' },
            { text: 'API Status', url: '#' },
        ],
    },
    {
        heading: 'Support',
        links: [
            { text: 'Pricing', url: '#' },
            { text: 'Documentation', url: '#' },
            { text: 'Guides', url: '#' },
            { text: 'API Status', url: '#' },
        ],
    },
];

const socialLinks = [
    { icon: <BsFacebook />, url: '#', },
    { icon: <BsInstagram />, url: '#', },
    { icon: <RiTwitterXFill />, url: '#', },
    { icon: <BsGithub />, url: '#', },
];

const Footer = () => {

    // Function to get the current year
    const getCurrentYear = () => {
        const currentYear = new Date().getFullYear();
        return currentYear;
    };

    return (
        <section>
            <div className="bg-white pt-10 pb-12 border-t border-gray-200 mt-12">
                <div className="container grid grid-cols-1 ">
                    <div className="col-span-1 space-y-4 mb-6">
                        <img src={Logo} alt="logo" className="h-16 h-16 rounded-full" />
                        <div className="mr-2">
                            <p className="text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                            </p>
                        </div>
                        <div className="flex space-x-5">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.url} className="bg-primary p-2 rounded-full">
                                    <span className='text-white' >{link.icon}</span>
                                </a>
                            ))}
                        </div>

                    </div>

                    <div className="col-span-2 grid md:grid-cols-4 grid-cols-2 gap-4 mx-auto">
                        {footerLinks.map((column, columnIndex) => (
                            <div key={columnIndex} className="grid grid-cols-2 gap-4 md:gap-8">
                                {column.links.length > 0 && (
                                    <div>
                                        <h3 className="text-sm font-semibold font-roboto text-gray-600 uppercase tracking-wider">
                                            {column.heading}
                                        </h3>
                                        <div className="mt-4 space-y-4">
                                            {column.links.map((link, linkIndex) => (
                                                <a key={linkIndex} href={link.url} className="text-base font-quicksand text-gray-500 hover:text-gray-900 block">
                                                    {link.text}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4 ">
                <div className="md:container md:flex items-center md:justify-between justify-center text-center mb-2">
                    <p className=' font-quicksand text-white md:text-md text-sm '
                    >© {getCurrentYear()} <span className='text-primary md:text-md md:mt-0 mt-4'> Kemsey Store</span>  Developed by  <a href='#' className='font-medium md:text-md text-sm hover:text-primary'> Michael Kabanda</a> </p>
                    <div>
                        <img src={Method} alt="methods" className="h-6 md:ml-0 ml-[13%] md:mt-0 mt-4" />
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Footer;
