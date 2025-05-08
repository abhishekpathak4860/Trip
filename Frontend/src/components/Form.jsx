import { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Form() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("dark");
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelWith, setTravelWith] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { destination, duration, travelWith };

    if (travelWith === "Solo") {
      formData.name = name;
    } else {
      formData.name = "Arijit Singh";
    }
    try {
      const dataSend = await axios.post(
        "https://trip-mocha.vercel.app/api/user/send",
        formData
      );
      const getData = dataSend.data;
      console.log("your data", getData);
      if (getData) {
        navigate("/trip", { state: getData });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className={`font-montserrat  ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        } min-h-screen flex items-center justify-center p-6`}
      >
        {/* Toggle Button */}
        <div className="">
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 text-2xl cursor-pointer"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        <div className="w-full max-w-lg  p-2 relative">
          {/* Heading */}
          <h2
            className={`text-[24px] font-extrabold leading-[32px] tracking-[0%] ${
              theme == "dark" ? "text-[#F5F5F5]" : "text-[#0B0809]"
            }`}
          >
            Plan Your Journey, Your Way!
          </h2>
          <p
            className={`text-[14px] font-normal leading-[20px] tracking-[0%] ${
              theme == "dark" ? "text-[#F5F5F5]" : "text-[#0B0809]"
            }`}
          >
            Let’s create your personalised travel experience
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Destination */}
            <div className="mt-[20px]">
              <h3
                className={`text-[18px] font-bold leading-[24px] tracking-[0%]  mb-2 ${
                  theme == "dark" ? "text-[#F5F5F5]" : "text-[#0B0809]"
                }`}
              >
                Where would you like to go?
              </h3>
              <div
                className={`flex items-center p-[10px]  ${
                  theme == "dark"
                    ? "bg-[#333333] rounded-[8px]"
                    : "bg-white border border-[#BFBFBF] rounded-[8px]"
                }`}
              >
                <FaMapMarkerAlt className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter Destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className={`bg-transparent outline-none w-full ${
                    theme == "dark"
                      ? "placeholder-[#F5F5F5]"
                      : "placeholder-[#0B0809] text-black"
                  }`}
                />
              </div>
            </div>

            {/* Duration */}
            <div className="mt-[10px]">
              <h3 className="text-[18px] font-bold leading-[24px] tracking-[0%] mb-2">
                How long will you stay?
              </h3>
              <div
                className={`flex items-center  rounded  p-[10px] ${
                  theme == "dark"
                    ? "bg-[#333333] rounded-[8px]"
                    : "bg-white border border-[#BFBFBF] rounded-[8px]"
                }`}
              >
                <FaCalendarAlt className="text-gray-400 mr-2" />
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className={`outline-none w-full ${
                    theme == "dark"
                      ? "placeholder-[#F5F5F5]"
                      : "placeholder-[#0B0809]"
                  }`}
                >
                  <option
                    value=""
                    disabled
                    className={`${
                      theme == "dark" ? "text-black" : "text-[#0B0809]"
                    }`}
                  >
                    Select Duration
                  </option>
                  <option className="text-black">1 Day</option>
                  <option className="text-black">4 Days</option>
                  <option className="text-black">6 Days</option>
                  <option className="text-black">8 Days</option>
                </select>
              </div>
            </div>

            {/* Travel With */}
            <div>
              <h3
                className={`text-[18px] font-bold leading-[24px] tracking-[0%] mb-2  ${
                  theme == "dark" ? "text-[#F5F5F5]" : "text-[#0B0809]"
                }`}
              >
                Who are you traveling with?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Solo", icon: <FaPerson /> },
                  {
                    label: "Couple",
                    icon: (
                      <div className="flex gap-0">
                        <FaPerson />
                        <FaPerson />
                      </div>
                    ),
                  },
                  { label: "Family", icon: <MdFamilyRestroom /> },
                  {
                    label: "Friends",
                    icon: (
                      <div className="flex gap-0">
                        <FaPerson />
                        <FaPerson />
                      </div>
                    ),
                  },
                ].map(({ label, icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => setTravelWith(label)}
                    className={`p-[10px] flex items-center outline-none justify-center rounded-lg transition ${
                      travelWith === label
                        ? "bg-blue-600 text-[#F5F5F5]"
                        : theme === "dark"
                        ? "bg-[#333333] text-white"
                        : "bg-white text-[#0B0809] border border-[#BFBFBF]"
                    }`}
                  >
                    <span className="mr-2">{icon}</span>
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {travelWith === "Solo" && (
              <div>
                <h3
                  className={`text-[18px] font-bold leading-[24px] tracking-[0%] mb-2  ${
                    theme == "dark" ? "text-[#F5F5F5]" : "text-[#0B0809]"
                  }`}
                >
                  What's your name?
                </h3>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-[10px] rounded-[8px] outline-none ${
                    theme === "dark"
                      ? "bg-[#333333] text-white placeholder-[#F5F5F5]"
                      : "bg-white text-black placeholder-[#0B0809] border border-[#BFBFBF]"
                  }`}
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="mt-4 w-full bg-[#3643FB] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              {loading ? "Processing..." : "Continue"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
