import { useState, useEffect } from "react";
import { Search, Camera, Mic, Diamond, Heart, User, Menu } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showCategories, setShowCategories] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const App_Name = import.meta.env.VITE_APP_NAME;

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            if (window.scrollY > lastScrollY) {
                setShowCategories(false); // Hide when scrolling down
            } else {
                setShowCategories(true); // Show when scrolling up
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            {/* Top Header */}
            <div className="flex items-center justify-between px-6 py-3">
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Menu className="text-red-700" size={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>

                {/* Logo Placeholder */}
                <div className="text-red-700 text-xl font-bold md:block hidden">
                    {App_Name}
                </div>

                {/* Search Bar - Adjusts for Large Screen */}
                <div className="hidden md:flex flex-row items-center border rounded-full px-4 py-2 w-full md:w-1/3">
                    <Search className="text-red-700" size={20} />
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                        className="border-none outline-none w-full px-2"
                    />
                    <Mic className="text-red-700" size={20} />
                </div>


                {/* Icons */}
                <div className="flex items-center gap-6 text-red-700">
                    <Heart size={24} />
                    <User size={24} />
                    {!isScrolled && <Search size={24} className="md:hidden"/>}
                </div>
            </div>

            {/* Search Bar - Adjusts for Mobile */}
            <div className={`transition-all duration-300 ${isScrolled ? 'hidden' : 'flex'} items-center justify-center px-6 py-2 md:hidden`}>
                <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-1/3">
                    <Search className="text-red-700" size={20} />
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                        className="border-none outline-none w-full px-2"
                    />
                    <Camera className="text-red-700 mx-2" size={20} />
                </div>
            </div>

            {/* Categories - Now with Framer Motion */}
            {showCategories && (
                <nav className="bg-transparent md:flex hidden gap-6 text-gray-700 text-sm px-6 py-2">
                    <div className="flex items-center gap-1 cursor-pointer">🌟 All Jewellery</div>
                    <div className="flex items-center gap-1 cursor-pointer">💛 Gold</div>
                    <div className="flex items-center gap-1 cursor-pointer"><Diamond size={18} /> Diamond</div>
                    <div className="flex items-center gap-1 cursor-pointer">💎 Earrings</div>
                    <div className="flex items-center gap-1 cursor-pointer">💍 Rings</div>
                    <div className="flex items-center gap-1 cursor-pointer">👗 Daily Wear</div>
                    <div className="flex items-center gap-1 cursor-pointer">📦 Collections</div>
                    <div className="flex items-center gap-1 cursor-pointer">💒 Wedding</div>
                    <div className="flex items-center gap-1 cursor-pointer">🎁 Gifting</div>
                    <div className="flex items-center gap-1 cursor-pointer">⚜ More</div>
                </nav>
            )}


            {/* Mobile Categories Drawer */}
            <div className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg p-4 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden`}>
                <button className="absolute top-2 right-4 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>✖</button>
                <nav className="flex flex-col gap-4 text-gray-700 text-sm">
                    <div className="flex items-center gap-1 cursor-pointer">🌟 All Jewellery</div>
                    <div className="flex items-center gap-1 cursor-pointer">💛 Gold</div>
                    <div className="flex items-center gap-1 cursor-pointer"><Diamond size={18} /> Diamond</div>
                    <div className="flex items-center gap-1 cursor-pointer">💎 Earrings</div>
                    <div className="flex items-center gap-1 cursor-pointer">💍 Rings</div>
                    <div className="flex items-center gap-1 cursor-pointer">👗 Daily Wear</div>
                    <div className="flex items-center gap-1 cursor-pointer">📦 Collections</div>
                    <div className="flex items-center gap-1 cursor-pointer">💒 Wedding</div>
                    <div className="flex items-center gap-1 cursor-pointer">🎁 Gifting</div>
                    <div className="flex items-center gap-1 cursor-pointer">⚜ More</div>
                </nav>
            </div>
        </header>
    );
}
