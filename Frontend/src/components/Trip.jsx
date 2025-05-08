import React, { useState } from "react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import Hero from "./Hero";
import FlightDetails from "./FlightDetails";
import Accommodation from "./Accommodation";
import Activities from "./Activities";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function Trip() {
  const location = useLocation();
  const responseData = location.state;
  console.log(responseData);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div
        className={`min-h-screen p-4 font-Montserrat ${
          theme === "dark" ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="">
          <button
            onClick={toggleTheme}
            className="absolute top-4 right-4 text-2xl cursor-pointer"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <h1 className="text-[24px] font-extrabold">
          Hello {responseData.name}!
        </h1>
        <p
          className={`text-[16px] font-medium  mb-2 ${
            theme === "dark" ? "text-[#F5F5F5]" : "text-[#333333]"
          }`}
        >
          Ready for the trip?
        </p>
        <h2 className="text-[18px] font-bold mt-5">Your Upcoming Trip</h2>

        {/* Banner */}
        <Hero theme={theme} responseData={responseData} />

        {/* Flight Details #313DDF */}
        <FlightDetails theme={theme} responseData={responseData} />

        {/* Accommodation */}
        <Accommodation theme={theme} />

        {/* Activities */}
        <Activities theme={theme} />
      </div>
      <Navbar theme={theme} />
    </>
  );
}
