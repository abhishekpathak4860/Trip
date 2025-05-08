import React, { useState } from "react";

export default function Activities({ theme }) {
  const [showActivities, setShowActivities] = useState(false);
  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Activities</h3>
          <div>
            <button
              className={`text-sm mr-2  ${
                theme === "dark" ? "text-[#D1F462]" : "text-[#3643FB]"
              }`}
              onClick={() => setShowActivities(!showActivities)}
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

        {showActivities && (
          <div
            className={`rounded-xl p-4 ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {/* Day Plan Box */}

            {/* bg-[#2c2c2c] */}
            <div
              className={`flex items-center justify-between mb-4  p-4 rounded-[12px] ${
                theme === "dark" ? "bg-[#2c2c2c]" : "border-1 border-[#333333]"
              }`}
            >
              <div
                className={`px-3 py-1 rounded-lg text-sm flex items-center gap-2 ${
                  theme === "dark"
                    ? "bg-[#2c2c2c] text-[#D3F462]"
                    : "bg-white text-[#313DDF] "
                }`}
              >
                <div
                  className={`rounded-[8px] px-4 ${
                    theme === "dark"
                      ? "bg-[#D3F462]  text-[#333333]"
                      : "bg-[#313DDF] text-white"
                  }`}
                >
                  <span className="font-semibold   text-[12px]">Day Plan</span>
                </div>
                <span
                  className={`px-2 py-0.5 rounded text-xs ${
                    theme === "dark"
                      ? "border-1 border-[#D3F462]"
                      : "border-1 border-[#313DDF]"
                  }`}
                >
                  14 Activities
                </span>
              </div>
              <div className="flex gap-2 overflow-x-auto text-sm">
                {[
                  "Mon 27",
                  "Tue 28",
                  "Wed 29",
                  "Thu 30",
                  "Fri 31",
                  "Feb 01",
                ].map((day, idx) => (
                  <div
                    key={idx}
                    className={` p-3 rounded-md whitespace-nowrap  ${
                      theme === "dark"
                        ? "bg-black text-[#808080]"
                        : "bg-[#E5E5E5] text-black "
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex">
              <h4
                className={` text-[12px] mb-2  rounded-[8px] p-1  ${
                  theme === "dark"
                    ? " bg-[#D3F462] text-[#2a2a2a]"
                    : "bg-[#313DDF] text-white"
                }`}
              >
                Day 1 | 27.01.2025
              </h4>
              <p
                className={`relative left-[12px] text-[12px] top-1
                 ${theme === "dark" ? " text-[#D3F462]" : "text-[#313DDF]"}`}
              >
                3 Activities
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: "Senso-Ji Temple & Nakamise Shopping Street",
                  timing: "8:15 am Morning",
                  duration: "3 hours",
                  pickup: "From Hotel",
                  image: "temple.png",
                },
                {
                  title: "Tokyo Sky Tree",
                  timing: "1:00 pm Afternoon",
                  duration: "3 hours",
                  pickup: "From Nakamise Street",
                  image: "tower.png",
                },
                {
                  title: "Kimono Wearing",
                  timing: "2:00 pm Afternoon",
                  duration: "1-2 hours",
                  pickup: "From Hotel",
                  image: "shop.png",
                },
              ].map((act, idx) => (
                <div
                  key={idx}
                  className={` rounded-lg p-3 flex  items-center gap-4 ${
                    theme === "dark"
                      ? "bg-[#4D4D4D] text-[#F5F5F5]"
                      : "bg-white text-[#333333] border-1 border-[#4D4D4D]"
                  }`}
                >
                  <img
                    src={act.image}
                    alt="activity"
                    className="w-26 h-26 object-cover rounded-md"
                  />
                  {/* #F5F5F5 */}
                  <div>
                    <h5 className="font-bold text-[14px]">{act.title}</h5>
                    <div className=" mt-4">
                      <div className="flex  gap-2">
                        <p className="text-[12px] font-bold">Timing: </p>
                        <p className="text-[12px] font-normal">{act.timing}</p>
                      </div>
                      <div className="flex  gap-2">
                        <p className="text-[12px] font-bold">Duration: </p>
                        <p className="text-[12px] font-normal">
                          {act.duration}
                        </p>
                      </div>
                      <div className="flex  gap-2">
                        <p className="text-[12px] font-bold">Pickup: </p>
                        <p className="text-[12px] font-normal">{act.pickup}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
