import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
