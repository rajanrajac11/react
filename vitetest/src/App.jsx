import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-gray-400  w-full h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
