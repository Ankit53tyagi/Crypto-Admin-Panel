import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <>
      <div className="columnWrapper">
        <Sidebar/>
        <div id="mainPart" className="main-content">
          <Header />
          <div className="main-content-body">
               <Outlet /> 
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
