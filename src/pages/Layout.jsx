import React from "react";
import Footer from "../Components/common/Footer";
import { Outlet } from "react-router-dom";
import Nav from "../Components/common/Nav";

export default function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
