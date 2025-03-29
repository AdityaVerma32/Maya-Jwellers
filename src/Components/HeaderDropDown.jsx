import React from 'react'

function HeaderDropDown({ hoveredCategory, setHoveredCategory }) {

    const list_of_images = [
        "/Images/Random/Bangles.jpg",
        "/Images/Random/earings_2.jpg",
        "/Images/Random/earings_3.jpg",
        "/Images/Random/earings.jpg",
        "/Images/Random/necklace_2.jpg",
        "/Images/Random/necklace_3.jpg",
        "/Images/Random/necklace_4.jpg",
        "/Images/Random/necklace_5.jpg",
        "/Images/Random/necklace.jpg",
        "/Images/Random/pendent.jpg",
        "/Images/Random/ring_2.jpg",
        "/Images/Random/ring_3.jpg",
        "/Images/Random/ring.jpg"
    ]

    if (!hoveredCategory) return null;

    return (
        <div className='w-full justify-center flex'>
            <div className="absolute top-full bg-gradient-to-b from-white to-[#455f8c] shadow-lg p-4 flex justify-around border-t border-gray-300 rounded-bl-lg rounded-br-lg"
                onMouseEnter={() => setHoveredCategory(hoveredCategory)}
                onMouseLeave={() => setHoveredCategory(null)}>
                <div className="flex items-center  ">
                    <div className="grid grid-cols-2 gap-2">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="bg-amber-600 h-30 w-60 overflow-hidden rounded-2xl">
                                <img
                                    src={list_of_images[Math.floor(Math.random() * list_of_images.length)]}
                                    alt={hoveredCategory.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="ml-6">
                        {/* Categories Title */}
                        <div className="font-bold text-2xl font-playfair-display mb-2">Categories</div>

                        {/* Category List Container */}
                        <div className="grid grid-cols-4 gap-6">
                            {Array(4)
                                .fill(0)
                                .map((_, colIndex) => (
                                    <ul key={colIndex} className="text-gray-600">
                                        {hoveredCategory.subcategories.map((sub, index) => (
                                            <li key={index} className="py-1 cursor-pointer hover:text-gray-900">
                                                <a href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}>{sub}</a>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeaderDropDown
