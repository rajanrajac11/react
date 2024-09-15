import React from "react";

import { Outlet } from "react-router-dom";
import Header from "../../07reactrouter/src/components/Header/Header";
import Footer from "../../07reactrouter/src/components/Footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
