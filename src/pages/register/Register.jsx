import { useState, useEffect } from "react";
import { MdPerson } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from 'react-router-dom';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate();

    // State Management
    const [currentTime, setCurrentTime] = useState("");
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(false);

    const [registerInfo, setRegisterInfo] = useState({
        fname: "",
        lname: "",
        username: "",
        email: "",
        password: "",
    });

    const handleClear = () => {
        setRegisterInfo({
            fname: "",
            lname: "",
            username: "",
            email: "",
            password: "",
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setRegisterInfo((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };



    // Handle Click for Register
    const handleRegisterClick = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace this logic with your actual registration logic.
        // You would typically make an API request to register the user.

        // Simulate registration success for this example.
        setTimeout(() => {
            setLoading(false);
            swal('Kemsey Store', `You've Successfully Registered as ${registerInfo.username}`, 'success', {
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
            navigate('/');
        }, 2000); // Simulated loading time: 2 seconds
        handleClear();
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    useEffect(() => {
        const updateTimeAndGreeting = () => {
            const now = new Date();
            const hours = now.getHours();

            let greetingMsg = "Hello";
            if (hours >= 0 && hours < 12) {
                greetingMsg = "Good Morning";
            } else if (hours >= 12 && hours < 16) {
                greetingMsg = "Good Afternoon";
            } else {
                greetingMsg = "Good Evening";
            }
            setGreeting(greetingMsg);
            setCurrentTime(now.toLocaleTimeString());
        };

        updateTimeAndGreeting();
        const interval = setInterval(updateTimeAndGreeting, 1000); // Update time and greeting every second

        return () => {
            clearInterval(interval); // Clean up interval on unmount
        };
    }, []);

    return (
        <div className="flex flex-col md:flex-row h-screen p-4 md:p-0">
            <div className="lg:w-1/2 bg-white flex items-center md:mt-0 mt-16">
                <div className="w-full lg:w-1/2 lg:mx-auto ">
                    <img
                        src={Logo}
                        alt="Logo"
                        width={150}
                        height={150}
                        className="mx-auto md:-mb-2 rounded-full flex items-center justify-center"
                    />

                    <h2 className="text-center mt-2 md:-mb-1 font-quicksand md:text-lg mb-2 text-gray-600 font-semibold">
                        {greeting}
                    </h2>
                    <p className="text-center font-quicksand md:text-md mb-4 text-gray-400 ">
                        Please register your account
                    </p>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => handleRegisterClick(e)}>
                        <div className="space-y-1">
                            <label htmlFor="fname" className="block font-quicksand md:text-sm mb-1 text-gray-600 font-medium">
                                Full Name
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    id="fname"
                                    name="fname"
                                    onChange={handleInputChange}
                                    value={registerInfo.fname}
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    placeholder="First Name"
                                />
                                <MdPerson className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="username" className="block font-quicksand md:text-sm mb-1 text-gray-600 font-medium">
                                User Name
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type="text"
                                    id="username"
                                    name="username"
                                    onChange={handleInputChange}
                                    value={registerInfo.username}
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"

                                    placeholder="Username"
                                />
                                <MdPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="email"
                                className="block font-quicksand md:text-sm mb-1 text-gray-600 font-medium">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={registerInfo.email}
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Email"
                                />
                                <MdPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="password"
                                className="block font-quicksand md:text-sm  text-gray-600 font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={registerInfo.password}
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
                                    placeholder="Password"
                                />
                                {passwordVisible ? (
                                    <AiOutlineEye
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                    />
                                )}
                            </div>
                        </div>
                        <button
                            style={{ marginTop: '28px' }}
                            className=" py-2 px-4 rounded font-quicksand md:text-sm  text-center w-full transition-colors duration-300 bg-gradient-to-b bg-primary text-white hover:bg-primary disabled:bg-primary"
                            type="submit"
                            disabled={loading}>
                            {loading ? "Please wait.. logging in" : "Register"}
                        </button>
                        <div className="text-center">
                            <Link to="/login" className="hover:underline font-quicksand md:text-sm font-bold text-blue-500">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className="relative md:w-1/2 transition-colors duration-300 bg-gradient-to-r bg-primary h-full hidden md:block">
                <div className="p-3">
                    {/* Company Logo */}
                </div>
                <div className="flex items-center justify-center pt-24 mt-32 pl-12">
                    <h1 className="text-white font-bold md:text-5xl font-roboto">{currentTime}</h1>
                </div>
                <div className="absolute bottom-0 w-full">
                    <div className="p-3 pl-30 text-center ">
                        <h1 className="text-white font-quicksand font-bold md:text-xl">Powered By</h1>
                        <h3 className="text-white font-quicksand text-base mb-12">Fusion Flow Technology</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
