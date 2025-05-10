
export default function Sidebar({ isMobileOpen, setIsMobileOpen, onLogout }) {
  // Add a cleanup handler to avoid setting state on render

  return (
    <div className="bg-blue-800 text-white w-64 min-h-screen">
      <div className="p-4 font-bold text-xl border-b border-white">
        Admin Panel
      </div>
      <ul className="mt-4 space-y-2 px-4">
        {['Dashboard', 'Users', 'Orders', 'Products', 'Settings'].map((item, idx) => (
          <li key={idx} className="hover:bg-white/10 p-2 rounded cursor-pointer">
            {item}
          </li>
        ))}
        <li className="mt-8 border-t border-white/20 pt-2 cursor-pointer">
          Logout
        </li>
      </ul>
    </div>
  );
}
