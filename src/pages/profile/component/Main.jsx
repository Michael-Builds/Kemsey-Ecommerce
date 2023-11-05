import { useState } from "react";
import { BsCamera } from "react-icons/bs";
import profile from '../../../assets/user.jpeg';

const UserProfile = () => {
    const [showDialog, setShowDialog] = useState(false);
    const [userImage, setUserImage] = useState(profile);

    const handleUploadFromDesktop = () => {
        // Create an input field for file selection
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".svg, .png, .jpeg, .jpg"; // Specify accepted file types

        // Listen for changes in the file input
        fileInput.addEventListener("change", (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
                // Handle the selected file here and update the userImage state
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageData = e.target.result;
                    setUserImage(imageData);
                };
                reader.readAsDataURL(selectedFile);
            }

            // Remove the file input from the DOM
            document.body.removeChild(fileInput);

            // Hide the dialog afterward
            setShowDialog(false);
        });

        // Trigger a click event on the file input to open the file dialog
        fileInput.click();
    };


    return (
        <div className=" p-6 h-screen md:mb-0 mb-32">
            <div className="bg-white border border-gray-200 p-4 overflow-y rounded-lg">
                <div className="h-32 rounded-lg bg-primary border  "></div>
                <div className="relative p-4 ">
                    <img
                        src={userImage}
                        className="absolute -my-16 border-4 rounded-full w-24 h-24 object-center object-cover"
                    />

                    <BsCamera
                        className="text-white bg-primary rounded-full w-8 h-8 p-2 cursor-pointer hover:bg-secondary absolute "
                        title="Upload Photo"
                        onClick={handleUploadFromDesktop}
                    />

                    <div className="pl-32 inline-block">
                        <h2 className="font-semibold text-lg mb-2 font-quicksand">Kabanda Michael</h2>
                        <h3 className="text-slate-30 text-sm font-quicksand">
                            Update your photo and details
                        </h3>
                    </div>
                    <form className="p-4 grid md:gap-6 gap-4 md:grid-cols-2 md:mb-0 -mb-6 ">
                        <div className="space-y-1">
                            <label
                                htmlFor="fname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                First Name
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="lname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Last Name
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="email"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Email address
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>

                        <div className="space-y-1">

                            <label
                                htmlFor="tel"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Phone Number
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="username"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                User Name
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="password"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Password
                            </label>
                            <input className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-3 w-full border" />
                        </div>

                        <div className="float-right gap-4 flex md:mt-2 mt-4 md:mr-4 ">
                            <button
                                type="submit"
                                className="bg-primary font-quicksand text-white px-4 w-24 p-3 rounded-lg"
                            >
                                Save
                            </button>
                            <button className="bg-gray-300 font-quicksand text-black p-3 w-24 rounded-lg">
                                Cancel
                            </button>
                        </div>
                    </form>


                </div>


            </div>

            {/* Image upload modal */}
            {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                    <div className="bg-white p-4 rounded-lg shadow-lg relative z-10 w-96 h-48">
                        {/* ... Rest of the modal code */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfile;
