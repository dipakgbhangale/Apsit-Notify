import React, { useState, useContext, useEffect } from "react";
import "./App.css";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "./assets/logo.png"; 

const AuthSection = ({ loginWithRedirect }) => (
  <div className="text-center flex flex-col items-center">
    <img src={logo} alt="Logo" className="w-32 h-auto mb-4" />
    <h1 className="text-4xl font-bold text-white mb-4 transition-transform transform hover:scale-105">
      APSIT Notify
    </h1>
    <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl text-center">
      <p className="text-gray-800 mb-4">Your personal calendar awaits!</p>
      <button
        className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 transition"
        onClick={loginWithRedirect}
      >
        Get Started
      </button>
    </div>
  </div>
);

function App() {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-400 to-indigo-500">
      {!isAuthenticated ? (
        <AuthSection loginWithRedirect={loginWithRedirect} />
      ) : (
        <React.Fragment>
          {showEventModal && <EventModal />}
          <div className="h-screen flex flex-col w-full">
            <div className="flex justify-between items-center p-4 bg-white shadow">
              <CalendarHeader />
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">{user.name}</span>
                <button
                  className="bg-red-500 text-white py-1 px-4 rounded-full shadow-md hover:bg-red-600 transition"
                  onClick={() =>
                    logout({ logoutParams: { returnTo: window.location.origin } })
                  }
                >
                  Log Out
                </button>
              </div>
            </div>
            <div className="flex flex-1">
              <Sidebar />
              <Month month={currenMonth} />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
