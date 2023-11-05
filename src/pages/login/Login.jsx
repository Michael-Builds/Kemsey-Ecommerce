import { useState, useEffect } from "react";
import { MdPerson } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import Logo from "../../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { Link } from 'react-router-dom';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // State Management
    const [currentTime, setCurrentTime] = useState("");
    const [greeting, setGreeting] = useState("");
    const [loading, setLoading] = useState(false);


    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    })
    const handleClear = () => {
        setLoginInfo({
            email: "",
            password: "",
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };



    const navigate = useNavigate();

    // Handle Click for Login
    const handleLoginClick = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (
                (loginInfo.email === "admin" || loginInfo.email === "admin@gmail.com") &&
                loginInfo.password === "admin"
            ) {
                setLoading(false);
                swal("Kemsey Store", `You've Successfully Logged in as ${"admin"}`, "success", {
                    buttons: {
                        confirm: {
                            text: "Okay",
                            value: true,
                            visible: true,
                            className: "bg-primary font-quicksand focus:outline-none",
                        },
                    },
                });
                navigate("/");
            } else {
                swal("Kemsey Store", `No user found, try again`, "error");
                setLoading(false);
                return;
            }
            // After loading, navigate to the next page
            setLoading(false);
            // Navigate logic here
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
                        className="mx-auto rounded-full flex items-center justify-center"
                    />

                    <h2 className="text-center mt-2 font-quicksand md:text-lg mb-2 text-gray-600 font-semibold">
                        {greeting}
                    </h2>
                    <p className="text-center font-quicksand md:text-md mb-4 text-gray-400 ">
                        Please login to your account
                    </p>
                    <form
                        className="space-y-4"
                        onSubmit={(e) => handleLoginClick(e)}>
                        <div className="space-y-1">
                            <label
                                htmlFor="email"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={handleInputChange}
                                    value={loginInfo.email}
                                    className="w-full text-gray-600 border font-quicksand md:text-sm border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your Email"
                                />
                                <MdPerson className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                        </div>
                        <div className="space-y-1 relative mb-8">
                            <label
                                htmlFor="password"
                                className="block font-quicksand md:text-md  text-gray-600 font-medium">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    required
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    onChange={handleInputChange}
                                    value={loginInfo.password}
                                    className="w-full font-quicksand md:text-sm  text-gray-600 border border-gray-300 rounded-md p-2 pl-8 focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
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
                            {loading ? "Logging In....." : "Login"}
                        </button>

                        <div className="text-center pt-2">
                            <Link to="/register" className="hover:underline font-quicksand md:text-sm font-bold text-blue-500">
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
