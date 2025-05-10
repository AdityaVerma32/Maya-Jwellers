import { useState } from 'react';
import Sidebar from './AdminSidebar';
import Header from './AdminHeader';
import useAuthStore from '../../Store/useAuthStore';

export default function Layout({ children }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { user, logout } = useAuthStore();
  console.log('Layout rendering');

  return (
    <div className="flex">
      {/* Pass down the state handler properly */}
      <Sidebar
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
        onLogout={logout} // Logout function triggered by Sidebar
      />
      <div className="flex-1 min-h-screen bg-gray-100">
        <Header username={user?.name || 'Admin'} onMenuClick={() => setIsMobileOpen(true)} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
