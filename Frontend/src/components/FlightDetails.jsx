import React, { useState } from "react";

export default function FlightDetails({ responseData }) {
  const [showFlight, setShowFlight] = useState(false);
  return (
    <>
      <div className="bg-[#3643FB] p-1 rounded-[16px] mt-[16px]">
        <div className=" bg-[#313DDF] rounded-[16px] m-[2px] relative top-0">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-[16px] font-bold text-[#FFFFFF] ml-2 mt-2">
              Flight Details
            </h3>
            <div>
              <button
                className=" text-sm mr-2 text-[#D1F462]"
                onClick={() => setShowFlight(!showFlight)}
              >
                See all
              </button>
              <p className="w-[40px] h-0.5 bg-[#D1F462]"></p>
            </div>
          </div>

          {showFlight && (
            <div className="text-white rounded-xl p-4 flex justify-between items-center ">
              <div className="mt-3.5 relative right-2">
                <p className="text-[14px] font-normal relative top-[-34px] ">
                  26.01.2025, 10:50 am
                </p>
                <p className="font-semibold">
                  DEL → {responseData.destination.slice(0, 3)}
                </p>
                <p className="text-xs">
                  Delhi, India →{responseData.destination}
                </p>
              </div>
              <div className="w-[150px]  relative top-[0px] ">
                <img src="Plane.png" alt="Flight" className="w-full h-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
