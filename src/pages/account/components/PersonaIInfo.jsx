import React from 'react';
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const PersonalInfo = () => {
    const [isPersonalInfoEditing, setIsPersonalInfoEditing] = React.useState(false);
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);

    const personalInfo = {
        name: 'Kabanda Michael',
        location: 'Ho, Volta Region',
        email: 'michaelkpantiramp@gmail',
        phone: '+233 54 454 1587',
    };

    const [personal, setPersonal] = React.useState({
        name: "",
        location: "",
        email: "",
        phone: "",
    })

    const handleClear = () => {
        setPersonal({
            name: "",
            location: "",
            email: "",
            phone: "",
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPersonal((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };

    const handleSave = (e) => {
        e.preventDefault();
        setLoading(true);
        setIsPersonalInfoEditing(false);
        setTimeout(() => {
            setLoading(false);
            swal('Kemsey Store', "Personal Information Updated", 'success', {
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

    const handlePersonalInfoEdit = () => {
        setIsPersonalInfoEditing(true);
    };


    return (
        <section>
            <div className="shadow rounded bg-white px-4 pt-6 pb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 text-lg font-quicksand">Personal Profile</h3>
                    {isPersonalInfoEditing ? (
                        <button onClick={handleSave} className="text-primary font-quicksand">
                            {loading ? " Updating..." : "Save"}
                        </button>
                    ) : (
                        <button onClick={handlePersonalInfoEdit} className="text-primary font-quicksand">
                            Edit
                        </button>
                    )}
                </div>
                {isPersonalInfoEditing ? (
                    <div className="space-y-4">
                        <input
                            type="text"
                            name='name'
                            id='name'
                            onChange={handleInputChange}
                            value={personal.name}
                            placeholder={personalInfo.name}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="text"
                            name='location'
                            id='location'
                            onChange={handleInputChange}
                            value={personal.location}
                            placeholder={personalInfo.location}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="email"
                            name='email'
                            id='email'
                            onChange={handleInputChange}
                            value={personal.email}
                            placeholder={personalInfo.email}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                        <input
                            type="tel"
                            name='phone'
                            id='phone'
                            onChange={handleInputChange}
                            value={personal.phone}
                            placeholder={personalInfo.phone}
                            className="border border-gray-300 font-quicksand focus:outline-none text-sm focus:border-blue-600 rounded-md p-2 w-full"
                        />
                    </div>
                ) : (
                    <div className="space-y-2">
                        <h4 className="text-gray-700 font-medium md:text-md  font-quicksand">{personalInfo.name}</h4>
                        <p className="text-gray-800 font-quicksand">{personalInfo.location}</p>
                        <p className="text-gray-800 font-quicksand">{personalInfo.email}</p>
                        <p className="text-gray-800 font-quicksand">{personalInfo.phone}</p>
                    </div>
                )}
            </div>

        </section>
    )
}
export default PersonalInfo