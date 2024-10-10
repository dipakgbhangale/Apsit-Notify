import dayjs from "dayjs";
import React, { useContext } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";
import { useAuth0 } from "@auth0/auth0-react";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }

  return (
    <header className="px-4 py-2 flex items-center justify-between">
      <div className="flex items-center">
        <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
        <h1 className="mr-10 text-xl text-gray-500 font-bold">
          APSIT Notify
        </h1>
        <button onClick={handleReset} className="bg-red-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-red-600 transition" >
          Today
        </button>
        <button onClick={handlePrevMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <h2 className="ml-4 text-xl text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
        <button onClick={handleNextMonth}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
        
      </div>
    </header>
  );
}
