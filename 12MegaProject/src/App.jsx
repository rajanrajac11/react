import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import authService from "../src/appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./index.css";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen bg-gray-500 flex flex-wrap justify-center items-center ">
      <div className="">
        <Header />
        <main>
          <Outlet />
          {/* Remaining */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
