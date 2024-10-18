import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="w-full h-screen bg-green-600">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
