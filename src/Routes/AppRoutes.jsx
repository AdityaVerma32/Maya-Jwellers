import { Routes, Route } from 'react-router-dom';
import HomePage from '../Pages/HomePage.jsx';
import ProductListing from '../Pages/ProductListing.jsx';

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListing />} />
    </Routes>
);

export default AppRoutes;
