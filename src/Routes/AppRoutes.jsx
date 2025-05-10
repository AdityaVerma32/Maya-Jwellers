import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import ProductListing from '../Pages/ProductListing.jsx';
import AdminLogin from '../Pages/Admin/AdminLogin.jsx';
import Dashboard from '../Pages/Admin/Dashboard.jsx'; // Renamed to reflect it's a layout
import PrivateRoute from './PrivateRoutes.jsx';
import PublicRoute from './PublicRoutes.jsx';

// Sub Pages for Admin
import Users from '../Pages/Admin/Users';
import Orders from '../Pages/Admin/Orders';
import Products from '../Pages/Admin/Products';
import Settings from '../Pages/Admin/Settings';
import Categories from '../Pages/Admin/Categories';
import AddCategories from '../Pages/Admin/Categories/AddCategories.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />

        <Route path="/admin">
            <Route path="login" element={<PublicRoute element={<AdminLogin />} />} />
            <Route
                element={<PrivateRoute element={<Dashboard />} />}
            >
                <Route index element={<p>Dashboard Overview</p>} />
                <Route path="users" element={<Users />} />
                <Route path="orders" element={<Orders />} />
                <Route path="products" element={<Products />} />
                <Route path="settings" element={<Settings />} />
                <Route path="categories" element={<Categories />} />
                <Route path="categories/add" element={<AddCategories />} />
            </Route>
        </Route>
    </Routes>
);

export default AppRoutes;
