import React from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ShippingAddress = () => {

    const [isShippingEditing, setIsShippingEditing] = React.useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);

    const shippingAddress = {
        name: 'Kabanda Michael',
        location: 'Ho, Volta Region',
        address: 'Ho-Poly',
        phone: '+233 54 454 1587',
    };
    
    const [shipping, setShipping] = React.useState({
        name: "",
        location: "",
        address: "",
        phone: "",
    });

    const handleClear = () => {
        setShipping({
            name: "",
            location: "",
            address: "",
            phone: "",
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setShipping((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };

    const handleShippingEdit = () => {
        setIsShippingEditing(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        setIsShippingEditing(false);
        setTimeout(() => {
            setLoading(false);
            swal('Kemsey Store', "Shipping Information Updated", 'success', {
                buttons: {
                    confirm: {
                        text: 'Okay',
                        value: true,
                        visible: true,
                        className: 'bg-primary font-quicksand focus:outline-none',
                    },
                },
            });

            // After successful registration, you can navigate to the home page or any other appropriate page.
            navigate('/account');
        }, 2000); // Simulated loading time: 2 seconds
        handleClear();
    };


    return (
        <section>
            <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 text-lg font-quicksand">Shipping address</h3>
                    {isShippingEditing ? (
                        <button onClick={handleSave} className="text-primary font-quicksand">
                            {loading ? " Updating..." : "Save"}
                        </button>
                    ) : (
                        <button onClick={handleShippingEdit} className="text-primary font-quicksand">
                            Edit
                        </button>
                    )}
                </div>
                {isShippingEditing ? (
                    <div className="space-y-4">
                        <input
                            type="text"
                            name='name'
                            id='name'
                            onChange={handleInputChange}
                            value={shipping.name}
                            placeholder={shippingAddress.name}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name='location'
                            id='location'
                            onChange={handleInputChange}
                            value={shipping.location}
                            placeholder={shippingAddress.location}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name='address'
                            id='address'
                            onChange={handleInputChange}
                            value={shipping.address}
                            placeholder={shippingAddress.address}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="tel"
                            name='phone'
                            id='phone'
                            onChange={handleInputChange}
                            value={shipping.phone}
                            placeholder={shippingAddress.phone}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                    </div>
                ) : (
                    <div className="space-y-1">
                        <h4 className="text-gray-700 font-medium md:text-md font-quicksand">{shippingAddress.name}</h4>
                        <p className="text-gray-800 font-quicksand">{shippingAddress.location}</p>
                        <p className="text-gray-800 font-quicksand">{shippingAddress.address}</p>
                        <p className="text-gray-800 font-quicksand">{shippingAddress.phone}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
export default ShippingAddress