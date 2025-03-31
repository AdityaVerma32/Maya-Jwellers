import React from 'react'


const filters = ["Gold", "Silver", "Earrings", "Rings", "Nose Pins", "Holy Items"];
function FilterSidebar({ selectedFilter, setFilter }) {
    return (
        <div className="hidden md:block w-1/6 p-6 bg-[#455f8c] text-white shadow-lg border-r border-gray-300 h-screen overflow-y-auto sticky top-0 mx-2 mt-5">
            <h2 className="text-xl font-bold mb-6 tracking-wide border-b pb-2">Filters</h2>
            <h2 className="text-l font-semibold mb-4 tracking-wide">Types</h2>
            <ul className="space-y-3">
                {filters.map((filter) => (
                    <li
                        key={filter}
                        className={`cursor-pointer p-3 text-md font-medium rounded-md transition-all duration-300
                    ${selectedFilter === filter ? "bg-yellow-600 text-white shadow-md" : "hover:bg-gray-300 hover:text-gray-900"}`}
                        onClick={() => setFilter(filter)}
                    >
                        {filter}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FilterSidebar
