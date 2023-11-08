import React from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const BillingAddress = () => {
    const [isBillingEditing, setIsBillingEditing] = React.useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);

    const billingAddress = {
        name: 'Kabanda Michael',
        location: 'Ho, Volta Region',
        address: 'Ho-Poly',
        phone: '+233 54 454 1587',
    };

    const [billing, setBilling] = React.useState({
        name: "",
        location: "",
        address: "",
        phone: "",
    });

    const handleClear = () => {
        setBilling({
            name: "",
            location: "",
            address: "",
            phone: "",
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBilling((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };

    const handleBillingEdit = () => {
        setIsBillingEditing(true);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        setIsBillingEditing(false);
        setTimeout(() => {
            setLoading(false);
            swal('Kemsey Store', "Billing Information Updated", 'success', {
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
                    <h3 className="font-semibold text-gray-800 text-lg font-quicksand">Billing address</h3>
                    {isBillingEditing ? (
                        <button onClick={handleSave} className="text-primary font-quicksand">
                            {loading ? " Updating..." : "Save"}
                        </button>
                    ) : (
                        <button onClick={handleBillingEdit} className="text-primary font-quicksand">
                            Edit
                        </button>
                    )}
                </div>
                {isBillingEditing ? (
                    <div className="space-y-4">
                        <input
                            type="text"
                            name='name'
                            id='name'
                            onChange={handleInputChange}
                            value={billing.name}
                            placeholder={billingAddress.name}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name='location'
                            id='location'
                            onChange={handleInputChange}
                            value={billing.location}
                            placeholder={billingAddress.location}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name='address'
                            id='address'
                            onChange={handleInputChange}
                            value={billing.address}
                            placeholder={billingAddress.address}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="tel"
                            name='phone'
                            id='phone'
                            onChange={handleInputChange}
                            value={billing.phone}
                            placeholder={billingAddress.phone}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                    </div>
                ) : (
                    <div className="space-y-1">
                        <h4 className="text-gray-700 font-medium md:text-md font-quicksand">{billingAddress.name}</h4>
                        <p className="text-gray-800 font-quicksand">{billingAddress.location}</p>
                        <p className="text-gray-800 font-quicksand">{billingAddress.address}</p>
                        <p className="text-gray-800 font-quicksand">{billingAddress.phone}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
export default BillingAddress