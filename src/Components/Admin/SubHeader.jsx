import { Filter, Plus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

function SubHeader({ title, onAddNew, onFilter, onSearch }) {
    return (
        <div className="bg-white px-3 py-3 rounded-md shadow-md">
            <div className="flex justify-between items-center">
                {/* Search Input with Icon */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search categories..."
                        onChange={(e) => onSearch(e.target.value)}
                        className="border-gray-300 border-1 pl-10 pr-3 py-1 rounded-md w-48"
                    />
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        <Search size={16} />
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    {/* Add Button */}
                    <Link
                        to={onAddNew}
                        className="bg-[#455f8c] text-white p-2 rounded-md transition duration-200 flex items-center justify-center"
                        onClick={onAddNew}
                    >
                        {/* Icon on mobile */}
                        <Plus className="block md:hidden" size={18} />

                        {/* Text on medium and up */}
                        <span className="hidden md:block">Add {title}</span>
                    </Link>

                    {/* Filter Icon Button */}
                    <button
                        className="text-[#455f8c] hover:text-blue-700"
                        onClick={onFilter}
                    >
                        <Filter />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;
