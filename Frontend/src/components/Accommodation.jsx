import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

export default function Accommodation({ theme }) {
  const [showAccommodation, setShowAccommodation] = useState(true);
  return (
    <>
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Accommodation</h3>
          <div>
            <button
              className={`text-sm mr-2  ${
                theme === "dark" ? "text-[#D1F462]" : "text-[#3643FB]"
              }`}
              onClick={() => setShowAccommodation(!showAccommodation)}
            >
              See all
            </button>
            <p
              className={`w-[40px] h-0.5 ${
                theme === "dark" ? "bg-[#D1F462]" : "bg-[#3643FB]"
              }`}
            ></p>
          </div>
        </div>
        {showAccommodation && (
          <div className="flex gap-4 overflow-x-auto">
            {/* Hotel 1 */}
            <div
              className={` rounded-xl p-1 min-w-[240px] ${
                theme === "dark" ? "bg-[#4D4D4D]" : "bg-white"
              }`}
            >
              <div className="relative w-full h-24">
                <img
                  src="hotel1.png"
                  alt="Hotel"
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="flex gap-2 absolute top-16 left-2 text-white text-xs bg-[#3643FB] bg-opacity-50 px-1 py-1 rounded">
                  <p>
                    <CiStar />
                  </p>
                  <p> 4.0 Very Good</p>
                </div>
              </div>
              <h4 className="mt-2 font-semibold">Shinagawa Prince Hotel</h4>
              <p className="text-xs">
                Check-in:{" "}
                <span
                  className={` ${
                    theme === "dark" ? "text-[#F5F5F5]" : "text-[#BFBFBF]"
                  }`}
                >
                  26.01.2025, 11:15 pm
                </span>
              </p>
              <p className="text-xs">
                Check-out:{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-[#F5F5F5]" : "text-[#BFBFBF]"
                  }`}
                >
                  28.01.2025, 11:15 am
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-xs mt-1">2 Nights</p>
                <span className="text-[#90EB61] font-bold text-[12px]">
                  Confirmed
                </span>
              </div>
            </div>

            {/* Hotel 2 */}
            <div
              className={` rounded-xl p-1 min-w-[240px] ${
                theme === "dark" ? "bg-[#4D4D4D]" : "bg-white"
              }`}
            >
              <div className="relative w-full h-24">
                <img
                  src="hotel2.png"
                  alt="Hotel"
                  className="w-full h-24 object-cover rounded-md"
                />
                <div className="flex gap-2 absolute top-16 left-2 text-white text-xs bg-[#3643FB] bg-opacity-50 px-1 py-1 rounded">
                  <p>
                    <CiStar />
                  </p>
                  <p> 4.1 Very Good</p>
                </div>
              </div>
              <h4 className="mt-2 font-semibold">Mercure Tokyo Hotel</h4>
              <p className="text-xs">
                Check-in:{" "}
                <span
                  className={` ${
                    theme === "dark" ? "text-[#F5F5F5]" : "text-[#BFBFBF]"
                  }`}
                >
                  28.01.2025, 6:00 pm
                </span>
              </p>
              <p className="text-xs">
                Check-out:{" "}
                <span
                  className={`${
                    theme === "dark" ? "text-[#F5F5F5]" : "text-[#BFBFBF]"
                  }`}
                >
                  30.01.2025, 11:15 am
                </span>
              </p>
              <div className="flex justify-between">
                <p className="text-xs mt-1">2 Nights </p>
                <span className="text-[#FF6525] font-bold text-[12px]">
                  Pending
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
