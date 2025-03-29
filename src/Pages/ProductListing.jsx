import { useState } from "react";
import { Star } from "lucide-react";
import Header from "../Components/Header";
const filters = ["Gold", "Silver", "Earrings", "Rings", "Nose Pins", "Holy Items"];
const products = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    type: filters[i % filters.length],
    weight: `${(Math.random() * 10 + 1).toFixed(2)}g`,
    carat: i % 3 === 0 ? "22K" : i % 5 === 0 ? "18K" : "",
    rating: (Math.random() * 2 + 3).toFixed(1),
    images: [
        `https://via.placeholder.com/150?text=Front+${i + 1}`,
        `https://via.placeholder.com/150?text=Back+${i + 1}`,
    ],
}));

const FilterSidebar = ({ selectedFilter, setFilter }) => (
    <div className="w-1/4 p-4 bg-gray-100 h-full">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <ul>
            {filters.map((filter) => (
                <li
                    key={filter}
                    className={`cursor-pointer p-2 rounded-lg ${selectedFilter === filter ? "bg-blue-500 text-white" : "hover:bg-gray-300"}`}
                    onClick={() => setFilter(filter)}
                >
                    {filter}
                </li>
            ))}
        </ul>
    </div>
);

const ProductCard = ({ product }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            className="border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                    src={hovered ? product.images[1] : product.images[0]}
                    alt={product.name}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">Weight: {product.weight}</p>
                {product.carat && <p className="text-sm text-gray-600">Carat: {product.carat}</p>}
                <div className="flex justify-center items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "text-yellow-500" : "text-gray-300"}`} />
                    ))}
                    <span className="ml-2 text-sm font-medium">{product.rating}</span>
                </div>
            </div>
        </div>
    );
};

const ProductListing = () => {
    const [selectedFilter, setSelectedFilter] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 24;

    const filteredProducts = selectedFilter
        ? products.filter((p) => p.type === selectedFilter)
        : products;

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    const displayedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <>
            <Header />
            <div className="flex h-screen">
                <FilterSidebar selectedFilter={selectedFilter} setFilter={setSelectedFilter} />
                <div className="w-3/4 p-4">
                    <h1 className="text-2xl font-bold mb-4">{selectedFilter || "All Products"}</h1>
                    <div className="grid grid-cols-4 gap-6">
                        {displayedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-center">
                        <button
                            className="px-4 py-2 mx-2 border rounded-lg bg-gray-200"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                        <button
                            className="px-4 py-2 mx-2 border rounded-lg bg-gray-200"
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductListing;
