import { Navigate } from 'react-router-dom';
import useAuthStore from '../Store/useAuthStore';  // Zustand store

const PrivateRoute = ({ element }) => {
  const { token } = useAuthStore(state => state);  // Get token from Zustand store

  // If the user is not logged in, redirect to login page
  if (!token) {
    return <Navigate to="/admin/login" />;
  }

  // If logged in, render the requested component
  return element;
};

export default PrivateRoute;
