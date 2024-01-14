// import { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";

function App() {
  // https://tomcoso-blog.onrender.com

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
