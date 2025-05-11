
const CategoryModal = ({ isOpen, onClose, categoryName, categoryImage }) => {
    if (!isOpen) return null; // Don't render the modal if it's not open

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Category Details</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <strong className="block text-sm font-medium text-gray-700">Category Name</strong>
                        <p className="text-sm text-gray-600">{categoryName}</p>
                    </div>
                    <div>
                        <strong className="block text-sm font-medium text-gray-700">Category Image</strong>
                        {categoryImage ? (
                            <img
                                src={categoryImage}
                                alt="Category"
                                className="mt-2 w-32 h-32 object-cover border rounded-md"
                            />
                        ) : (
                            <p className="text-sm text-gray-600">No image available</p>
                        )}
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-[#455f8c] text-white rounded-xl hover:bg-[#3a4e74]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;
