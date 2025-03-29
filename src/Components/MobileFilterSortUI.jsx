import { useState } from "react";
import { ChevronDown, X, Check } from "lucide-react";

const MobileFilterSortUI = () => {
    const [isFilterOpen, setFilterOpen] = useState(false);
    const [isSortOpen, setSortOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
    const [sortOption, setSortOption] = useState("Popularity");

    const toggleFilter = () => setFilterOpen(!isFilterOpen);
    const toggleSort = () => setSortOpen(!isSortOpen);
    const applyFilters = () => setFilterOpen(false);
    const clearFilters = () => setFilterOpen(!isFilterOpen);

    return (
        <div className="block md:hidden">
            <div className="relative w-full bg-white">
                {/* Sorting & Filter Buttons */}
                <div className="fixed bottom-0 w-full bg-white border-t flex justify-evenly px-4 py-1 shadow-md text-lg">
                    <button className="flex items-center gap-1 font-medium" onClick={toggleSort}>
                        <img src="/Images/Icons/sorting.png" alt="filter" className="h-5 mr-2" />
                        Sort By
                    </button>
                    <div className="w-px bg-black h-10"></div>
                    <button className="flex items-center gap-1 font-medium" onClick={toggleFilter}>
                        <img src="/Images/Icons/filter.png" alt="filter" className="h-5 mr-2" />
                        Filter
                    </button>
                </div>

                {/* Sort By Drawer */}
                {isSortOpen && (
                    <div className="fixed inset-0 bg-black z-50 flex items-end" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>

                        <div className="w-full bg-white rounded-t-2xl p-4 shadow-lg">
                            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
                            <div className="flex flex-row justify-between mx-3">
                                <h2 className="text-lg font-bold mb-4">Sort By</h2>
                                <div onClick={toggleSort}>
                                    <img src="/Images/Icons/close.png" alt="Close" className="h-3 mt-2" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                {["Popularity", "Discount", "Name", "Customer Top Rated", "New Arrivals", "Price: High To Low", "Price: Low To High"].map((option) => (
                                    <button
                                        key={option}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-lg ${sortOption === option ? "bg-pink-100" : "hover:bg-gray-100"}`}
                                        onClick={() => { setSortOption(option); setSortOpen(false); }}
                                    >
                                        {option}
                                        {sortOption === option && <Check size={20} className="text-pink-600" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Filter Drawer */}
                {isFilterOpen && (
                    <div className="fixed inset-0 z-50 flex" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        <div className="w-3/4 bg-white h-full p-4 overflow-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold">Filters</h2>
                                <button onClick={clearFilters} className="text-red-500">Clear All</button>
                            </div>
                            {/* Filter Categories */}
                            <div className="space-y-4">
                                {["Brand", "Price", "Skin Type", "Concern", "Discount", "Formulation", "Sale Offers", "Avg Customer Rating", "Preference"].map((category) => (
                                    <div key={category} className="border-b pb-2">
                                        <h3 className="font-semibold text-pink-600">{category}</h3>
                                        <div className="mt-2 space-y-1">
                                            {["Option 1", "Option 2", "Option 3"].map((option) => (
                                                <label key={option} className="flex items-center space-x-2">
                                                    <input type="checkbox" className="h-4 w-4" />
                                                    <span>{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Apply Button */}
                            <button
                                className="w-full bg-pink-600 text-white py-2 rounded mt-4"
                                onClick={applyFilters}
                            >
                                Apply
                            </button>
                        </div>
                        {/* Close Button */}
                        <div className="w-1/4" onClick={toggleFilter}></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileFilterSortUI;