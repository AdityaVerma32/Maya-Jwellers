import { X } from 'lucide-react';

export default function Sidebar({ isMobileOpen, setIsMobileOpen, onLogout }) {
  // Add a cleanup handler to avoid setting state on render
  const handleCloseMenu = () => setIsMobileOpen(false); // Toggle menu close

  return (
    <div
      className={`fixed z-40 md:static md:block bg-primary text-white w-64 h-full transform transition-transform duration-300 ease-in-out ${
        isMobileOpen ? 'translate-x-0 bg-white' : '-translate-x-full md:translate-x-0'
      }`}
    >
      <div className="p-4 font-bold text-xl border-b border-white text-black flex items-center justify-between">
        <div>{import.meta.env.VITE_APP_NAME}</div>
        <div
          className="md:hidden cursor-pointer"
          onClick={handleCloseMenu} // Close menu on mobile
          >
            <X></X>
        </div>
        </div>
      <ul className="mt-4 space-y-2 px-4">
        {/* Map over menu items */}
        {['Dashboard', 'Users', 'Orders', 'Products', 'Settings'].map((item, idx) => (
          <li key={idx} className="hover:bg-white/10 p-2 rounded cursor-pointer text-black">
            {item}
          </li>
        ))}
        <li
          className="mt-8 border-t border-white/20 pt-2 cursor-pointer text-black"
          onClick={onLogout} // Logout action
        >
          Logout
        </li>
      </ul>
    </div>
  );
}
