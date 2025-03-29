import React from 'react'
import { Link } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function CategorySectionV1() {

    const categories = [
        { name: "EARRINGS", image: "/Images/category_img1.jpg" },
        { name: "FINGER RINGS", image: "/Images/category_img2.jpg" },
        { name: "PENDANTS", image: "/Images/category_img3.jpg" },
        { name: "MANGALSUTRA", image: "/Images/category_img4.jpg" },
        { name: "BRACELETS", image: "/Images/category_img5.jpg" },
        { name: "BANGLES", image: "/Images/category_img6.jpg" },
        { name: "CHAINS", image: "/Images/category_img7.jpg" },
    ];

    const navigate = useNavigate();

    return (
        <section className="text-center py-10">
            <h2 className="text-3xl font-semibold font-playfair-display">Find Your Perfect Match</h2>
            <p className="text-gray-500 text-lg">Shop by Categories</p>

            <div className="mt-6 px-5 flex flex-col items-center gap-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:px-6">
                {categories.map((category, index) => (
                    <div key={index} className="text-center w-full max-w-sm md:max-w-full mx-4 md:mx-0" onClick={() => navigate('/products')}>
                        <div className="rounded-2xl overflow-hidden shadow-md h-96 md:h-[500px]">
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="mt-2 text-lg font-medium">{category.name}</p>
                    </div>
                ))}
                <div key='8' className="text-center w-full max-w-sm md:max-w-full mx-4 md:mx-0">
                    <div className="rounded-2xl overflow-hidden border-gray-400 border-1 h-96 md:h-[500px] flex flex-col items-center justify-center">
                        <div className='text-6xl font-semibold font-nunito text-[#455f8c]'>10+</div>
                        <div className="font-nunito text-black">Categories to Choose from</div>
                    </div>
                    <p className="mt-2 text-lg font-medium">View All</p>
                </div>
            </div>
        </section>
    )
}

export default CategorySectionV1
