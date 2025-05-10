import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useAuthStore from "../../Store/useAuthStore";
import { adminLogout } from "../../Api/Admin";

const navItems = [
    { label: 'Dashboard', path: '/admin' },
    { label: 'Users', path: '/admin/users' },
    { label: 'Orders', path: '/admin/orders' },
    { label: 'Products', path: '/admin/products' },
    { label: 'Categories', path: '/admin/categories' },
    { label: 'Settings', path: '/admin/settings' },
];

function AdminSidebar({ isSidebarOpen, setIsSidebarOpen }) {
    const location = useLocation();

    const handleLogout = async () => {
        try {
            const response = await adminLogout();
            if (response.success) {
                useAuthStore.getState().logout();
            } else {
                alert('Logout failed!');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div className={`fixed top-0 left-0 w-64 h-screen bg-[#455f8c] text-white z-50 transform transition-transform duration-300
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
        >

            <div className="flex justify-between items-center p-4 border-b border-white">
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <button className="md:hidden" onClick={() => setIsSidebarOpen(false)}>
                    <X />
                </button>
            </div>
            <ul className="mt-4 space-y-2 px-4">
                {navItems.map((item, idx) => (
                    <li key={idx}>
                        <Link
                            to={item.path}
                            className={`block p-2 rounded hover:bg-white/10 transition ${location.pathname === item.path ? 'bg-white/20 font-semibold' : ''
                                }`}
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li
                    onClick={handleLogout}
                    className="md:hidden mt-8 border-t border-white/20 pt-2 cursor-pointer"
                >
                    Logout
                </li>
            </ul>
        </div>
    );
}

export default AdminSidebar;
