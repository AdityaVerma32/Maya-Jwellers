import React, { useState } from 'react'
import { Star, Heart } from "lucide-react";


function ProductCard({ product }) {
    const [hovered, setHovered] = useState(false);
    const [liked, setLiked] = useState(false);

    return (
        <div
            className="relative overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white hover:shadow-2xl duration-300 rounded-lg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <button
                className="absolute top-4 left-4 p-1 hover:scale-110 transition-all"
                onClick={() => setLiked(!liked)}
            >
                <Heart className={`w-6 h-6 ${liked ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
            </button>
            <div className="w-full h-42 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                    src={hovered ? "/Images/Random/earings_2.jpg" : "/Images/Random/earings_3.jpg"}
                    // src={"/Images/Random/earings_2.jpg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-opacity duration-300"
                />
            </div>
            <div className="p-3 text-center">
                <h3 className="text-lg font-bold text-gray-800 truncate">{product.name}</h3>
                <div className="flex justify-between items-center mt-2 text-gray-700 text-sm">
                    <p>Weight: {product.weight}</p>
                    <div className="hidden md:flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard
