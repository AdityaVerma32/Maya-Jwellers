import { Mail, Facebook, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#021433] text-white py-8 md:m-3 md:rounded-3xl">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                {/* Logo and Name */}
                <div className="flex flex-col items-center md:items-center">
                    <div className="border-white border-2 mb-2">
                        <img src="/Images/Logo_v2.jpg" alt="Maya Jewellers" className="w-16 h-16" />
                    </div>
                    <h2 className="text-lg font-bold font-playfair-display">Maya Jewellers</h2>
                </div>

                {/* Contact Info */}
                <div className="text-center md:text-left mt-6 md:mt-0">
                    <p className="flex items-center gap-2">
                        <MapPin size={20} /> Nechal Garg, Railway Road, Deoband, Saharanpur, UP - 247554
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <Phone size={18} /> +91 9219785856
                    </p>
                    <p className="flex items-center gap-2 mt-2">
                        <Mail size={18} /> pvdeoband5@gmail.com
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6 md:mt-0">
                    <a href="#" className="hover:text-gray-300">
                        <Facebook size={24} />
                    </a>
                    <a href="mailto:pvdeoband5@gmail.com" className="hover:text-gray-300">
                        <Mail size={24} />
                    </a>
                    <a href="https://wa.me/9219785856" className="hover:text-gray-300">
                        <img src="/Images/Icons/whatsapp.png" alt="WhatsApp" className="w-6 h-6 text-white" />
                    </a>
                </div>
            </div>
            <div className="text-center mt-6 text-sm opacity-80">
                © {new Date().getFullYear()} Maya Jewellers. All Rights Reserved.
            </div>
        </footer>
    );
}
