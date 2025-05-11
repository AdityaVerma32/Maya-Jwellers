import { useState } from 'react';
import { Pencil, Trash2, Info } from 'lucide-react'; // Lucide icons
import SubHeader from '../../../Components/Admin/SubHeader'
import Pagination from '../../../Components/Admin/pagination';
import { useEffect } from 'react';
import { getCategories } from '../../../Api/Category';
import { useNavigate } from 'react-router-dom';
import CategoryModal from '../../../Components/Admin/Category/CategoryModal';


function Categories() {

    const [filteredCategories, setFilteredCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const navigate = useNavigate();

    // Simulate API fetch with dummy data
    useEffect(() => {
        setLoading(true);

        const fetchCategories = async () => {
            try {
                const response = await getCategories(searchTerm, currentPage)
                if (response.success) {
                    setFilteredCategories(response.data.categories);
                    setTotalPages(response.data.pagination.totalPages);
                    setLoading(false);
                } else {
                    console.error('Error fetching categories:', response.message);
                }
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, [searchTerm, currentPage]);

    const handleOnFilter = () => {
        console.log('Filter categories');
    };

    const handleOnSearch = (term) => {
        setSearchTerm(term);
        setCurrentPage(1);
    };

    const handleEditCategory = (id) => {
        navigate(`edit/${id}`);
    };
    const handleRemoveCategory = (id) => console.log('Remove category with ID:', id);
    const openModal = async (category) => {
        setSelectedCategory(category);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
    };

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
            ) : filteredCategories.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                    No categories fetched.
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <div className="py-4">
                        <div className="grid grid-cols-1 gap-6">
                            {filteredCategories.map((category) => (
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
                                            onClick={() => openModal(category)}
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

            <CategoryModal
                isOpen={isModalOpen}
                onClose={closeModal}
                categoryName={selectedCategory?.name}
                categoryImage={selectedCategory?.image}
            />
        </div>
    )
}

export default Categories