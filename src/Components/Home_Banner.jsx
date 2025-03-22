import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";

const banners = [
    "/Images/banner_image1.jpg",
    "/Images/banner_image2.jpg",
];

function Home_Banner() {

    const [index, setIndex] = useState(0);

    const nextBanner = () => {
        setIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevBanner = () => {
        setIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextBanner, 5000);
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <div className="relative overflow-hidden h-[400px] md:h-[500px]">
            {/* Animated Banner Section */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={banners[index]}
                    src={banners[index]}
                    alt="Banner"
                    className="absolute w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2  bg-opacity-50 text-black p-3 rounded-full"
                onClick={prevBanner}
            >
                &#10094;
            </button>
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-black p-3 rounded-full"
                onClick={nextBanner}
            >
                &#10095;
            </button>


            {/* Dots Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white scale-125" : "bg-gray-400"
                            }`}
                        onClick={() => goToBanner(i)}
                    ></button>
                ))}
            </div>
        </div>
    )
}

export default Home_Banner
