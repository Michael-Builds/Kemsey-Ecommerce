
import BeatLoader from 'react-spinners/BeatLoader';

const Loading = () => {
    return (
        <div className="w-screen h-screen z-50 absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center flex-col">
            <div className="bg-gray-100 opacity-50 absolute top-0 left-0 right-0 bottom-0"></div>
            <BeatLoader color="#fd3d57" />
        </div>
    );
};

export default Loading;
