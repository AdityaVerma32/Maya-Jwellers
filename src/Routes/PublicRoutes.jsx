import { Navigate } from 'react-router-dom';
import useAuthStore from '../Store/useAuthStore';  // Zustand store

const PublicRoute = ({ element }) => {
  const { token } = useAuthStore(state => state);  // Get token from Zustand store

  // If the user is logged in, redirect to dashboard or any other page
  if (token) {
    return <Navigate to="/admin" />;
  }

  // If the user is not logged in, render the requested component
  return element;
};

export default PublicRoute;
