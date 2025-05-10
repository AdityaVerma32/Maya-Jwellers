import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import ProductListing from '../Pages/ProductListing.jsx';
import AdminLogin from '../Pages/Admin/AdminLogin.jsx';
import Dashboard from '../Pages/Admin/Dashboard.jsx';
import PrivateRoute from './PrivateRoutes.jsx';
import PublicRoute from './PublicRoutes.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/admin'>
            <Route path='login' element={<PublicRoute element={<AdminLogin />} />} />
            <Route index element={<PrivateRoute element={<Dashboard />} />} />
        </Route>
        <Route path="/products" element={<ProductListing />} />
    </Routes>
);

export default AppRoutes;
