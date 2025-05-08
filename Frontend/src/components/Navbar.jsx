import React from "react";
import { FaHome, FaPlus, FaHeart, FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Navbar({ theme }) {
  return (
    <div
      className={`fixed bottom-0 left-0 w-full   flex justify-between items-center px-6 py-1 md:hidden z-50 ${
        theme === "dark" ? "bg-[#1D1F24]" : "bg-white"
      }`}
    >
      <button
        className={`flex items-center justify-center w-14 h-14 rounded-full  shadow-md ${
          theme === "dark"
            ? "text-[#D1F462] bg-[#D1F46233]"
            : "text-[#3643FB] bg-[#3643FB4D]"
        }`}
      >
        <FaHome className="text-3xl" />
      </button>

      <button className="flex flex-col items-center text-xs text-gray-400">
        <FaSearch className="text-xl mb-1" />
      </button>
      <button
        className={`flex flex-col items-center text-xs  p-3  mt-1 ${
          theme === "dark" ? "text-[#D1F462] " : "text-[#3643FB] bg-white"
        }`}
      >
        <FaPlus className="text-xl" />
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400">
        <FaHeart className="text-xl mb-1" />
      </button>
      <button className="flex flex-col items-center text-xs text-gray-400">
        <FaUser className="text-xl mb-1" />
      </button>
    </div>
  );
}
