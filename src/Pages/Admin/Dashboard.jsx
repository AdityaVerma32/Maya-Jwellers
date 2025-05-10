import Header from "../../Components/Admin/AdminHeader";
import Sidebar from "../../Components/Admin/AdminSidebar";

export default function Dashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar/>
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <Header/>
        {/* Content */}
        <main className="p-4">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
          {/* Add your dashboard content here */}
        </main>
      </div>
    </div>
  );
}
