import { Menu } from 'lucide-react';

export default function Header({ username, onMenuClick }) {
  console.log('Header rendering');

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="font-bold text-blue-800 text-lg">Dashboard</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-700">Admin</span>
        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-blue-800"
        />
        <button className="text-blue-800 font-semibold hover:underline">
          Logout
        </button>
      </div>
    </div>
  );
}
