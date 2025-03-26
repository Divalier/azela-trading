import { User, ShoppingCart, Settings } from "lucide-react";

const Sidebar = ({ setActiveTab }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">User Dashboard</h2>
      <ul className="space-y-4">
        <li onClick={() => setActiveTab("dashboard")} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md">
          Dashboard
        </li>
        <li onClick={() => setActiveTab("profile")} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md flex items-center space-x-2">
          <User className="w-5 h-5" /> <span>Profile</span>
        </li>
        <li onClick={() => setActiveTab("orders")} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md flex items-center space-x-2">
          <ShoppingCart className="w-5 h-5" /> <span>Orders</span>
        </li>
        <li onClick={() => setActiveTab("settings")} className="cursor-pointer hover:bg-gray-700 p-2 rounded-md flex items-center space-x-2">
          <Settings className="w-5 h-5" /> <span>Settings</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
