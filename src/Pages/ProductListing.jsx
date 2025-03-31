import { useState } from "react";
import Header from "../Components/Header";
import ProductCard from "../Components/ProductCard";
import FilterSidebar from "../Components/FilterSidebar";
import MobileFilterSortUI from "../Components/MobileFilterSortUI";
import Footer from "../Components/Footer";

const filters = ["Gold", "Silver", "Earrings", "Rings", "Nose Pins", "Holy Items"];
const products = Array.from({ length: 48 }, (_, i) => ({
    id: i + 1,
    name: `Jewelry Item ${i + 1}`,
    type: filters[i % filters.length],
    weight: `${(Math.random() * 10 + 1).toFixed(2)}g`,
    carat: i % 3 === 0 ? "22K" : i % 5 === 0 ? "18K" : "",
    rating: (Math.random() * 2 + 3).toFixed(1),
    images: [
        `https://via.placeholder.com/150?text=Front+${i + 1}`,
        `https://via.placeholder.com/150?text=Back+${i + 1}`,
    ],
}));

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
            <div className="flex pt-[101px]">
                <FilterSidebar selectedFilter={selectedFilter} setFilter={setSelectedFilter} />
                <div className="w-full md:w-5/6 p-4">
                    <h1 className="text-3xl font-bold mb-4 text-center text-[#455f8c]">{selectedFilter || "All Products"}</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <div className="mt-6 mb-6 flex justify-center">
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
            <MobileFilterSortUI />
            <Footer />
        </>
    );
};

export default ProductListing;
