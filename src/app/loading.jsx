import { PacmanLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-4">



            <PacmanLoader
                color="#FACC15"
                size={90}
            />

            <h2 className="text-2xl font-semibold text-gray-700 animate-pulse">

            </h2>
            <p className="text-gray-500">অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন।</p>
        </div>
    );
};

export default Loading;
