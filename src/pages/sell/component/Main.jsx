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
        <div className=" p-6 h-screen md:mb-56 mb-96">
            <div className="bg-white border border-gray-200 md:p-6 overflow-y rounded-lg">
                <div className="relative p-4 ">
                    <form className="p-4 grid md:gap-6 gap-2 md:grid-cols-2 md:mb-0 -mb-6 ">
                        <div className="space-y-1">
                            <label
                                htmlFor="pname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Product Name
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="text"
                                name="pname"
                                id="pname"
                                className="mt-2 font-quicksand text-gray-600 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="sname"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Seller Name
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="text"
                                id="sname"
                                name="sname"
                                className="mt-2 text-gray-600 font-quicksand border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="category"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Category
                                <span className='text-red-500'> *</span>
                            </label>
                            <select
                                required
                                id="email"
                                name="email"
                                className="mt-2 text-gray-600 border border-gray-300 font-quicksand focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border">
                                <option value="" disabled>Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Furniture">Furniture</option>
                                {/* Add more email options as needed */}
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="price"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Price
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="tel"
                                id="price"
                                name="price"
                                placeholder='Actual Price (GHC)'
                                className="mt-2 text-gray-600 font-quicksand border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="oprice"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Old Price
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="tel"
                                id="oprice"
                                name="oprice"
                                placeholder='Old Price (GHC)'
                                className="mt-2 text-gray-600 font-quicksand border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="sku"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                SKU
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="text"
                                id="sku"
                                name="sku"
                                className="mt-2 text-gray-600 font-quicksand border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="quantity"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Quantity
                                <span className='text-red-500'> *</span>
                            </label>
                            <input
                                required
                                type="number"
                                min="0"
                                id="quantity"
                                name="quantity"
                                className="mt-2 text-gray-600 font-quicksand border border-gray-300 focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border" />
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="brand"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Brand
                                <span className='text-red-500'> *</span>
                            </label>
                            <select
                                required
                                id="email"
                                name="email"
                                className="mt-2 text-gray-600 border border-gray-300 font-quicksand focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border">
                                <option value="" disabled className='font-quicksand'>
                                    Select a brand
                                </option>
                                <option value="brand1" className='font-quicksand'>
                                    Brand 1
                                </option>
                                <option value="brand2" className='font-quicksand'>
                                    Brand 2
                                </option>
                                <option value="brand3" className='font-quicksand'>
                                    Brand 3
                                </option>
                                <option value="brand4" className='font-quicksand'>
                                    Brand 4
                                </option>
                            </select>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="size"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Size
                                <span className='text-red-500'> *</span>
                            </label>
                            <select
                                required
                                id="email"
                                name="email"
                                className="mt-2 text-gray-600 border border-gray-300 font-quicksand focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border">
                                <option value="" disabled className='font-quicksand'>
                                    Select a size
                                </option>
                                <option value="small" className='font-quicksand'>
                                    Small
                                </option>
                                <option value="medium" className='font-quicksand'>
                                    Medium
                                </option>
                                <option value="large" className='font-quicksand'>
                                    Large
                                </option>
                                <option value="x-large" className='font-quicksand'>
                                    X-Large
                                </option>
                                <option value="xx-large" className='font-quicksand'>
                                    XX-Large
                                </option>
                            </select>
                        </div>
                        <div className="space-y-1">
                            <label
                                htmlFor="color"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Color
                                <span className='text-red-500'> *</span>
                            </label>
                            <div required className="mt-2 space-x-4 flex flex-wrap font-quicksand items-center">
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorRed" name="color" value="Red" />
                                    <span className="text-gray-600">Red</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorBlue" name="color" value="Blue" />
                                    <span className="text-gray-600">Blue</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorGreen" name="color" value="Green" />
                                    <span className="text-gray-600">Green</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorYellow" name="color" value="Yellow" />
                                    <span className="text-gray-600">Yellow</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorOrange" name="color" value="Orange" />
                                    <span className="text-gray-600">Orange</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorBlack" name="color" value="Black" />
                                    <span className="text-gray-600">Black</span>
                                </label>

                                <label className="flex items-center space-x-2">
                                    <input type="checkbox" id="colorOther" name="color" value="Other" />
                                    <span className="text-gray-600">Other</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="description"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Description
                                <span className='text-red-500'> *</span>
                            </label>
                            <textarea
                                required
                                id="description"
                                name="description"
                                rows={3}
                                className="w-full border font-quicksand  border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"></textarea>
                        </div>

                        <div className="space-y-1">
                            <label
                                htmlFor="product"
                                className="block font-quicksand md:text-md text-gray-600 font-medium">
                                Product Image
                                <span className='text-red-500'> *</span>
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
                                required
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
                                    <div className="w-full flex flex-col items-center justify-center">
                                        <AiOutlineCloudUpload className="h-12 w-12 text-primary md:-mt-1" />
                                        <p className="text-gray-600 font-quicksand md:mb-1">Drag and Drop an Image</p>
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
                                Advertise
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
