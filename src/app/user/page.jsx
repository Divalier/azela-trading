"use client";
import { useState } from "react";
import Profile from "./profile.jsx"; // Import Profile Component
// import Orders from "./Orders"; // Import Orders Component
// import Settings from "./Settings"; // Import Settings Component
import Sidebar from "../../../dashboard/components/Sidebar.jsx";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // Default view is Dashboard

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {activeTab === "dashboard" && <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>}
        {activeTab === "profile" && <Profile />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default UserDashboard;
