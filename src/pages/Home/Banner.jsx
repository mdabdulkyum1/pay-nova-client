import Lottie from "lottie-react";
import animationData from "../../assets/Animation.json";
import bannerImg from "../../assets/banner.jpg";
import { FaArrowRight, FaMoneyBillWave, FaShieldAlt, FaHandHoldingUsd, FaHeadset } from "react-icons/fa";

const Banner = () => {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${bannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-black/75"></div>

            <div className="hero relative z-10 flex items-center justify-center py-16">
                <div className="md:max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 space-y-8 lg:space-y-0">
                    {/* Left Side - Lottie Animation */}
                    <div className="w-full md:w-96 lg:w-1/2 lg:h-auto">
                        <Lottie animationData={animationData} loop={true} />
                    </div>

                    {/* Right Side Text - Services */}
                    <div className="text-left w-full md:space-y-6 md:w-1/2 lg:order-2 order-2">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-white">
                            PayNova - আপনার আস্থা
                        </h1>
                        <p className="mb-8 text-lg md:text-xl text-gray-200">
                            পেমেন্ট সম্পর্কিত সমস্যা সমাধানে আমরা আপনার পাশে আছি।
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <FaMoneyBillWave className="text-3xl text-green-400" />
                                <h3 className="text-xl font-semibold text-white">Send Money</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaHandHoldingUsd className="text-3xl text-blue-400" />
                                <h3 className="text-xl font-semibold text-white">Receive Money</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaShieldAlt className="text-3xl text-red-400" />
                                <h3 className="text-xl font-semibold text-white">Secure Transactions</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaArrowRight className="text-3xl text-yellow-400" />
                                <h3 className="text-xl font-semibold text-white">Cash In/Out</h3>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaHeadset className="text-3xl text-purple-400" />
                                <h3 className="text-xl font-semibold text-white">24/7 Live Support (Call & Chat)</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
