import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useState } from 'react';
const allowedFileTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/jpg'];
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";


const Main = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileError, setFileError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

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

    const [advertiseInfo, setAdvertiseInfo] = useState({
        sku: "",
        oprice: "",
        pname: "",
        sname: "",
        category: "",
        price: "",
        quantity: "",
        brand: "",
        size: "",
        color: "",
        description: "",
        image: "",
    })

    const handleClear = () => {
        setAdvertiseInfo({
            sku: "",
            oprice: "",
            pname: "",
            sname: "",
            category: "",
            price: "",
            quantity: "",
            brand: "",
            size: "",
            color: "",
            description: "",
            image: "",
        })
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setAdvertiseInfo((prevNewsLetter) => ({
            ...prevNewsLetter,
            [name]: value,
        }));
    };

    // Handle Click for Register
    const handleAdvertise = (e) => {
        e.preventDefault();
        setLoading(true);

        // Replace this logic with your actual registration logic.
        // You would typically make an API request to register the user.

        // Simulate registration success for this example.
        setTimeout(() => {
            setLoading(false);
            swal('Kemsey Store', "Product Uploaded Successfully", 'success', {
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

    const handleCancel = () => {
        swal({
            title: "Are you sure?",
            text: "Your changes will be discarded.",
            icon: "warning",
            buttons: {
                no: {
                    text: "No",
                    value: false,
                    className: "bg-gray-400 text-gray-800 font-quicksand",
                },
                yes: {
                    text: "Yes",
                    value: true,
                    className: "bg-primary font-quicksand",
                },
            },
            dangerMode: true,
        }).then((willCancel) => {
            if (willCancel) {
                swal({
                    title: "Kemsey Store",
                    text: "Product Addition Canceled",
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: 'Okay',
                            value: true,
                            visible: true,
                            className: 'bg-primary font-quicksand focus:outline-none',
                        },
                    },
                });

                handleClear();
            }
        });
    };


    const handleCategorySelect = (e) => {
        const { value } = e.target;
        setAdvertiseInfo((prevInfo) => ({
            ...prevInfo,
            category: value,
        }));
    };

    const handleBrandSelect = (e) => {
        const { value } = e.target;
        setAdvertiseInfo((prevInfo) => ({
            ...prevInfo,
            brand: value,
        }));
    };

    const handleSizeSelect = (e) => {
        const { value } = e.target;
        setAdvertiseInfo((prevInfo) => ({
            ...prevInfo,
            size: value,
        }));
    };

    const handleColorSelect = (e) => {
        const { value, checked } = e.target; // Remove the 'name' variable
        setAdvertiseInfo((prevInfo) => {
            const updatedColors = prevInfo.color.split(', ').filter((color) => color !== '');
            if (checked) {
                updatedColors.push(value);
            } else {
                const index = updatedColors.indexOf(value);
                if (index !== -1) {
                    updatedColors.splice(index, 1);
                }
            }
            return {
                ...prevInfo,
                color: updatedColors.join(', '),
            };
        });
    };

    return (
        <div className="md:p-6 p-4 md:h-screen md:mb-56 mb-24">
            <div className="bg-white border border-gray-200 md:p-6 overflow-y rounded-lg md:mb-0">
                <div className="relative p-4 " >
                    <form className="p-4 grid md:gap-6 gap-2 md:grid-cols-2" onSubmit={handleAdvertise}>
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
                                onChange={handleInputChange}
                                value={advertiseInfo.pname}
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
                                onChange={handleInputChange}
                                value={advertiseInfo.sname}
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
                                onChange={(e) => { handleCategorySelect(e); }}
                                value={advertiseInfo.category}
                                className="mt-2 text-gray-600 border border-gray-300 font-quicksand focus:outline-none focus:border-blue-500 rounded-lg p-2 w-full border">
                                <option value="" disabled>Select Category</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Furniture">Furniture</option>

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
                                type="number"
                                id="price"
                                name="price"
                                onChange={handleInputChange}
                                value={advertiseInfo.price}
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
                                type="number"
                                id="oprice"
                                name="oprice"
                                onChange={handleInputChange}
                                value={advertiseInfo.oprice}
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
                                onChange={handleInputChange}
                                value={advertiseInfo.sku}
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
                                onChange={handleInputChange}
                                value={advertiseInfo.quantity}

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
                                id="brand"
                                name="brand"
                                onChange={(e) => { handleBrandSelect(e); }}
                                defaultValue=""
                                value={advertiseInfo.brand}
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
                                id="size"
                                name="size"
                                onChange={(e) => { handleSizeSelect(e); }}
                                value={advertiseInfo.size}
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
                            <div
                                id="color"
                                name="color"
                                value={advertiseInfo.color}
                                onChange={handleColorSelect}
                                className="mt-2 space-x-3 flex flex-wrap font-quicksand"
                                required
                            >
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorRed"
                                        name="color"
                                        value="Red"

                                    />
                                    <span className="text-gray-600">Red</span>
                                </label>
                                <label className="flex items-center  space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorBlue"
                                        name="color"
                                        value="Blue"
                                    />
                                    <span className="text-gray-600">Blue</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorGreen"
                                        name="color"
                                        value="Green"
                                    />
                                    <span className="text-gray-600">Green</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorPurple"
                                        name="color"
                                        value="Purple"
                                    />
                                    <span className="text-gray-600">Purple</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorYellow"
                                        name="color"
                                        value="Yellow"
                                    />
                                    <span className="text-gray-600">Yellow</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="colorOther"
                                        name="color"
                                        value="Other"
                                    />
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
                                value={advertiseInfo.description}
                                onChange={handleInputChange}
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
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                className="hidden"
                            />
                            <label
                                htmlFor="image"
                                value={selectedFile}
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

                        <div className="float-right gap-4 flex md:mt-2 mt-4 md:mr-4 md:mb-0 mb-6">
                            <button
                                type="submit"
                                className="bg-primary font-quicksand text-white px-4 w-full p-3 rounded-lg"
                            >
                                {loading ? " Advertising..." : "Advertise"}
                            </button>
                            <button
                                onClick={handleCancel}
                                className="bg-gray-300 font-quicksand px-4 w-full p-3 rounded-lg"
                            >
                                {loading ? " Canceling..." : "Cancel"}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Main;
