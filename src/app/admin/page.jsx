"use client";
import { useState } from "react";
import Users from "../../../dashboard/admin/Users"; // Manage Users
import Products from "../../../dashboard/admin/Products"; // Manage Products
import Orders from "../../../dashboard/admin/Orders"; // Manage Orders
import Settings from "../../../dashboard/admin/Settings"; // Admin Settings
import Sidebar from "../../../dashboard/components/AdminSidebar"; // Separate Sidebar for Admin

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard"); // Default view is Dashboard

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {activeTab === "dashboard" && <h1 className="text-2xl font-bold">Admin Dashboard</h1>}
        {activeTab === "users" && <Users />}
        {activeTab === "products" && <Products />}
        {activeTab === "orders" && <Orders />}
        {activeTab === "settings" && <Settings />}
      </div>
    </div>
  );
};

export default AdminDashboard;
