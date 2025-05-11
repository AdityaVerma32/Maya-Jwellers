import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AdminHeader from '../../Components/Admin/AdminHeader';
import AdminSidebar from '../../Components/Admin/AdminSidebar';
import Categories from './Categories';
import AddCategories from './Categories/AddCategories';

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();
  const pathTitleMap = {
    '': 'Dashboard',
    'users': 'Users',
    'orders': 'Orders',
    'products': 'Products',
    'settings': 'Settings',
    'categories': 'Categories',
  };
  const currentPath = location.pathname.split('/').pop();
  const currentTitle = pathTitleMap[currentPath] || 'Dashboard';

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}

      />
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <AdminHeader
          title={currentTitle}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <main className="ml-0 md:ml-64 pt-16 md:p-4 overflow-y-auto min-h-screen bg-gray-50 md:pt-18">
          <Routes>
            <Route path="" element={<p>This is the Dashboard section.</p>} />
            <Route path="users" element={<p>This is the Users section.</p>} />
            <Route path="orders" element={<p>This is the Orders section.</p>} />
            <Route path="products" element={<p>This is the Products section.</p>} />
            <Route path="settings" element={<p>This is the Settings section.</p>} />
            <Route path="categories" element={<Categories />} />
            <Route path="categories/add" element={<AddCategories/>} />
            <Route path="categories/edit/:categoryId" element={<AddCategories />} />
            {/* Add more routes as needed */}
          </Routes>
        </main>

      </div>
    </div>
  );
}
