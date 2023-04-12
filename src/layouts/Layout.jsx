import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
