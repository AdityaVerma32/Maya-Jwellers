import { Menu } from 'lucide-react'
import useAuthStore from '../../Store/useAuthStore'
import { adminLogout } from '../../Api/Admin'

function AdminHeader({ title, isSidebarOpen, setIsSidebarOpen }) {

    const { user } = useAuthStore(state => state)
    const handleLogout = async () => {
        try {
            const response = await adminLogout()
            if (response.success) {
                useAuthStore.getState().logout()
            } else {
                alert('Logout failed!')
            }
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    return (
        <div className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
                {/* Menu button for mobile */}
                <button className="md:hidden" onClick={() => setIsSidebarOpen(true)}>
                    <Menu className="text-blue-800" />
                </button>
                <h1 className="font-bold text-[#455f8c] text-lg">{title}</h1>
            </div>

            {/* Logout on desktop */}
            <div className="hidden md:flex items-center gap-3">
                <span className="text-gray-700">{user.name}</span>
                <img src="../../../public/Photos/user.png" alt="Profile" className="w-8 h-8 rounded-full border border-blue-800" />
                <button
                    onClick={handleLogout}
                    className="text-[#455f8c] font-semibold hover:underline">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default AdminHeader