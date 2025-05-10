import { Menu } from 'lucide-react';
import useIsMobile from '../../Hooks/useIsMobile';

export default function Header({ username, onMenuClick }) {
  const isMobile = useIsMobile();
  console.log('Header rendering');

  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center md:ml-64">
      <div className="flex items-center gap-3">
        {isMobile && (
          <button onClick={onMenuClick}>
            <Menu className="text-primary" />
          </button>
        )}
        <h1 className="font-bold text-primary text-lg">Dashboard</h1>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-gray-700">{username}</span>
        <img
          src="/profile.png"
          alt="Profile"
          className="w-8 h-8 rounded-full border border-primary"
        />
        {!isMobile && (
          <button className="text-primary font-semibold hover:underline">
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
