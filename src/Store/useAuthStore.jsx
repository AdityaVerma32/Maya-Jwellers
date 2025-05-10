import {create} from 'zustand';
import zukeeper from 'zukeeper';

const useAuthStore = create((set) => ({
  token: localStorage.getItem('auth_token') || null,  // Get token from localStorage if available
  user: JSON.parse(localStorage.getItem('user_details')) || null,  // Get user from localStorage if available

  login: (userDetails, token) => {
    set({ user: userDetails, token });
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_details', JSON.stringify(userDetails));
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_details');
  }
}));

window.zookeeper = useAuthStore;

export default useAuthStore;
