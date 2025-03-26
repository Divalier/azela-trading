"use client";
import { Bell, UserCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>
      <div className="flex space-x-4 items-center">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
        <UserCircle className="w-8 h-8 text-gray-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
