import { useState } from 'react';
import { Pencil, Trash2, Info } from 'lucide-react'; // Lucide icons
import SubHeader from '../../../Components/Admin/SubHeader'
import Pagination from '../../../Components/Admin/pagination';
import { useEffect } from 'react';


const DUMMY_DATA = [
    { id: 1, name: 'Gold Rings' },
    { id: 2, name: 'Silver Anklets' },
    { id: 3, name: 'Temple Items' },
    { id: 4, name: 'Resale Gold' },
    { id: 5, name: 'Handmade Silver' },
    { id: 6, name: 'Gold Chains' },
    { id: 7, name: 'Silver Glass Sets' },
    { id: 8, name: 'Gold Bangles' },
    { id: 9, name: 'Silver Bowls' },
    { id: 10, name: 'Silver Statues' },
    { id: 11, name: 'Kids Jewellery' },
    { id: 12, name: 'Holy Pendants' },
];

const ITEMS_PER_PAGE = 10;


function Categories() {

    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [timeoutReached, setTimeoutReached] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);


    // Simulate API fetch with dummy data
    useEffect(() => {
        setLoading(true);
        const fetchTimeout = setTimeout(() => {
            setTimeoutReached(true);
            setLoading(false);
        }, 5000); // 5 sec timeout

        setTimeout(() => {
            setCategories(DUMMY_DATA);
            setFilteredCategories(DUMMY_DATA);
            setLoading(false);
            clearTimeout(fetchTimeout);
        }, 1200); // Simulated delay
    }, []);

    const handleOnFilter = () => {
        const filtered = DUMMY_DATA.filter((item) =>
            item.name.toLowerCase().includes('gold')
        );
        setFilteredCategories(filtered);
        setCurrentPage(1);
    };

    const handleOnSearch = (term) => {
        setSearchTerm(term);
        const filtered = categories.filter((item) =>
            item.name.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredCategories(filtered);
        setCurrentPage(1);
    };

    const handleEditCategory = (id) => console.log('Edit category with ID:', id);
    const handleRemoveCategory = (id) => console.log('Remove category with ID:', id);
    const handleInfoCategory = (id) => console.log('Info for category with ID:', id);

    // Pagination logic
    const totalPages = Math.ceil(filteredCategories.length / ITEMS_PER_PAGE);
    const paginatedItems = filteredCategories.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="pt-16">
            {/* Sub-header for Categories */}
            <SubHeader
                title="Categories"
                onAddNew="add"
                onFilter={handleOnFilter}
                onSearch={handleOnSearch}
            />

            {/* Categories content placeholder */}
            {loading ? (
                <div className="text-center py-6 text-gray-500">Loading...</div>
            ) : timeoutReached && filteredCategories.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                    No categories fetched.
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <div className="py-4">
                        <div className="grid grid-cols-1 gap-6">
                            {paginatedItems.map((category) => (
                                <div
                                    key={category.id}
                                    className="flex items-center justify-between p-4 bg-white hover:shadow-md transition-shadow duration-300"
                                >
                                    <div className="text-xl font-medium text-gray-800">{category.name}</div>
                                    <div className="flex space-x-4">
                                        <button
                                            onClick={() => handleEditCategory(category.id)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <Pencil size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleRemoveCategory(category.id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        <button
                                            onClick={() => handleInfoCategory(category.id)}
                                            className="text-green-500 hover:text-green-700"
                                        >
                                            <Info size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Categories