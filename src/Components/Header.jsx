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
                    <Menu className="text-[#455f8c]" size={24} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                </div>

                {/* Logo Placeholder */}
                {/* <div className="text-[#455f8c] text-xl font-bold font-playfair-display ">
                    {App_Name}
                </div> */}

                {/* Logo and App Name */}
                <div className="flex items-center md:justify-start justify-center w-full md:w-auto">
                    <img
                        src="/Images/Logo_v2.jpg"
                        alt="Logo"
                        className="w-10 h-10 md:block hidden"
                    />
                    <div className="text-[#455f8c] text-2xl font-bold font-playfair-display md:ml-2">
                        {App_Name}
                    </div>
                </div>


                {/* Search Bar - Adjusts for Large Screen */}
                <div className="hidden md:flex flex-row items-center border border-[#455f8c] rounded-full px-4 py-2 w-full md:w-1/2">
                    <Search className="text-[#455f8c]" size={20} />
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                        className="border-none outline-none w-full px-2"
                    />
                    <Mic className="text-[#455f8c]" size={20} />
                </div>


                {/* Icons */}
                <div className="flex items-center gap-6 text-[#455f8c]">
                    <Heart size={20} />
                    <User size={20} />
                    {isScrolled && <Search size={24} className="md:hidden" />}
                </div>
            </div>

            {/* Search Bar - Adjusts for Mobile */}
            <div className={`transition-all border-[#455f8c] duration-300 ${isScrolled ? 'hidden' : 'flex'} items-center justify-center px-6 py-2 md:hidden`}>
                <div className="flex items-center border rounded-full px-4 py-2 w-full md:w-1/3">
                    <Search className="text-[#455f8c]" size={20} />
                    <input
                        type="text"
                        placeholder="Search for Gold Jewellery, Diamond Jewellery and more..."
                        className="border-none outline-none w-full px-2"
                    />
                    <Mic className="text-[#455f8c] mx-2" size={20} />
                </div>
            </div>

            {/* Categories - For Larger Screen */}
            {showCategories && (
                <nav className=" md:flex justify-center hidden gap-6 text-black text-sm px-6 py-2" >
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/gold_icon.png" alt="Gold" className="w-5 h-5" /> Gold</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/diamond_icon.png" alt="Diamond" className="w-5 h-5" /> Diamond</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/earings_icon.png" alt="Earing" className="w-5 h-5" /> Earrings</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/ring_icon.png" alt="Ring" className="w-5 h-5" /> Rings</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/daily_wear_icon.png" alt="Daily Wear" className="w-5 h-5" /> Daily Wear</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/collection_icon.png" alt="Collection" className="w-5 h-5" /> Collections</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/rings_icon2.png" alt="Wedding" className="w-5 h-5" /> Wedding</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand"><img src="/Images/Icons/gift_icon.png" alt="Gifts" className="w-5 h-5" /> Gifting</div>
                    <div className="flex items-center gap-1 cursor-pointer font-quicksand">⚜ More</div>
                </nav>
            )
            }


            {/* Mobile Categories Drawer */}
            <div className={`fixed inset-y-0 left-0 bg-white w-64 shadow-lg p-4 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:hidden`}>
                <button className="absolute top-2 right-4 text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>X</button>
                <nav className="flex flex-col gap-4 text-gray-700 text-sm">
                    <div className="text-xl font-bold font-playfair-display justify-center flex mb-2">
                        {App_Name}
                    </div>
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/gold_icon.png" alt="Gold" className="w-5 h-5" /> Gold</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/diamond_icon.png" alt="Diamond" className="w-5 h-5" /> Diamond</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/earings_icon.png" alt="Earing" className="w-5 h-5" /> Earrings</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/ring_icon.png" alt="Ring" className="w-5 h-5" /> Rings</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/daily_wear_icon.png" alt="Daily Wear" className="w-5 h-5" /> Daily Wear</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/collection_icon.png" alt="Collection" className="w-5 h-5" /> Collections</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/rings_icon2.png" alt="Wedding" className="w-5 h-5" /> Wedding</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand"><img src="/Images/Icons/gift_icon.png" alt="Gifts" className="w-5 h-5" /> Gifting</div>
                    <hr />
                    <div className="flex items-center px-2 cursor-pointer gap-1 font-quicksand">⚜ More</div>
                    <hr />
                </nav>
            </div>
        </header >
    );
}
