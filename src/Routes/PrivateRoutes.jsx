import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Make sure to install this: npm install jwt-decode
import useAuthStore from '../Store/useAuthStore';  // Zustand store

const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // in seconds
    return decoded.exp < currentTime;
  } catch (e) {
    return true; // treat malformed tokens as expired
  }
};

const PrivateRoute = ({ element }) => {
  const { token } = useAuthStore(state => state);  // Get token from Zustand store

  // If the user is not logged in, redirect to login page
  if (!token || isTokenExpired(token)) {
    useAuthStore.getState().logout()
    return <Navigate to="/admin/login" />;
  }

  // If logged in, render the requested component
  return element;
};

export default PrivateRoute;
