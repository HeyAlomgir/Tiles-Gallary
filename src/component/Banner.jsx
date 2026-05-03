import Image from "next/image";
import BannerImg from "../assets/img/banner.png"
import Link from "next/link";

const Banner = () => {
    return (
        <div className=" relative mb-5">
            <Image
                src={BannerImg}
                alt="BannerImg"
                className="w-screen h-[90vh]"
            ></Image>

            <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-10 md:px-20 lg:px-32">

                <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight text-white drop-shadow-lg">
                    Discover Your <br />
                    <span className="text-blue-500">Perfect Aesthetic</span>
                </h1>

                <p className="mt-6 text-lg md:text-xl max-w-lg text-gray-100 drop-shadow-md font-medium">
                    Elevate your living space with our premium, handcrafted tiles.
                    Where luxury meets durability.
                </p>

                <div className="mt-8">
                    <Link href="/all-tiles">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-md font-bold transition-all transform hover:scale-105 shadow-xl">
                            Browse Now
                        </button>
                    </Link>
                </div>
            </div>
                

        </div>
    );
};

export default Banner;