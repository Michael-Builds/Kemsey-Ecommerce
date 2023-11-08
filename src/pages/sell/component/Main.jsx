import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useState } from 'react';
const allowedFileTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/jpg'];


const Main = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileError, setFileError] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (allowedFileTypes.includes(file.type)) {
                setSelectedFile(file);
                setFileError('');
            } else {
                setSelectedFile(null);
                setFileError('Invalid file type. Please select an SVG, PNG, JPEG, or JPG file.');
            }
        } else {
            setSelectedFile(null);
            setFileError('');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            if (allowedFileTypes.includes(file.type)) {
                setSelectedFile(file);
                setFileError('');
            } else {
                setSelectedFile(null);
                setFileError('Invalid file type. Please select an SVG, PNG, JPEG, or JPG file.');
            }
        }
    };

    return (
        <div className=" p-6 h-screen md:mb-0 mb-32">
            <div className="bg-white border border-gray-200 md:p-6 overflow-y rounded-lg">
                <div className="relative p-4 ">
                    <form className="p-4 grid md:gap-6 gap-2 md:grid-cols-2 md:mb-0 -mb-6 ">
                        <div className="space-y-1">
                            <label
                                htmlFor="pname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Product Name
                            </label>
                            <input
                                required
                                type="text"
                                name="pname"
                                id="pname"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="sname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Seller Name
                            </label>
                            <input
                                required
                                type="text"
                                id="sname"
                                name="sname"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="category"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Category
                            </label>
                            <select
                                required
                                id="email"
                                name="email"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border"
                            >
                                <option value="" disabled>
                                    Select an option
                                </option>
                                <option value="cat1">   Select an option</option>
                                <option value="cat2">Category 2</option>
                                <option value="cat3">Category 3</option>
                                {/* Add more email options as needed */}
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="price"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Price
                            </label>
                            <input
                                required
                                type="tel"
                                id="price"
                                name="price"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="oprice"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Old Price
                            </label>
                            <input
                                required
                                type="tel"
                                id="oprice"
                                name="oprice"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="rating"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Rating
                            </label>
                            <input
                                required
                                type="rating"
                                id="rating"
                                name="rating"
                                className="mt-2 text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="description"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Description
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"></textarea>
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="product"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Product Image
                            </label>
                            <input
                                required
                                type="file"
                                id="product"
                                name="product"
                                accept=".svg, .png, .jpeg, .jpg"
                                onChange={handleFileChange}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                className="hidden"
                            />
                            <label
                                htmlFor="product"
                                className="w-full border border-gray-300 rounded-md p-2 flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer"
                            >
                                {selectedFile ? (
                                    <img
                                        src={URL.createObjectURL(selectedFile)}
                                        alt="Selected"
                                        className="h-16 w-full object-center object-contain rounded-md"
                                    />
                                ) : (
                                    <div className="w-full  flex flex-col items-center justify-center">
                                        <AiOutlineCloudUpload className="h-12 w-12 text-primary" />
                                        <p className="text-gray-600 font-quicksand">Drag and Drop an Image</p>
                                    </div>
                                )}
                            </label>
                            {fileError && <p className="text-red-600">{fileError}</p>}
                        </div>


                        <div className="float-right gap-4 flex md:mt-2 mt-4 md:mr-4 md:mb-0 mb-4">
                            <button
                                type="submit"
                                className="bg-primary font-quicksand text-white px-4 w-24 p-3 rounded-lg"
                            >
                                Sell
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
