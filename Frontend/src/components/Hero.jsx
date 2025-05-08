import { FaRegClock } from "react-icons/fa";
import { FaUserGroup } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
export default function Hero({ responseData }) {
  return (
    <>
      <div className="relative mt-4 rounded-xl w-full md:h-[80vh] overflow-hidden">
        <img
          src="/bg.png"
          alt="Tokyo"
          className="w-full h-full object-cover rounded-xl"
        />

        <div className="absolute top-6 left-6 text-white inset-0  bg-opacity-40">
          <h2 className="text-[40px] leading-[24px] font-black">
            {responseData.destination}
          </h2>
          <p className="text-[12px] font-semibold mt-4">
            27.01.2025 - 02.02.2025
          </p>
        </div>
        <div className="absolute inset-0  bg-opacity-50 p-4 flex flex-col justify-end text-white">
          <div className="flex text-xs gap-4 mt-2">
            <div>
              <span className="flex gap-2">
                <FaRegClock className="text-[#D1F462] mt-1" />
                <p className="font-semibold">{responseData.duration}</p>
              </span>
              <p className="ml-7">Duration</p>
            </div>
            <span className="flex gap-2">
              <FaUserGroup className="text-[#D1F462]" />
              <p>4 (2M, 2F)</p>
            </span>
            <span className="flex gap-2">
              <SlCalender className="text-[#D1F462]" />
              <p>14 Activities</p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
