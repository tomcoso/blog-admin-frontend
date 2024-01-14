// import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./assets/App.css";
import Header from "./components/Header";

function App() {
  const authState = useLoaderData();
  // https://tomcoso-blog.onrender.com

  return (
    <>
      <Header authState={authState as boolean} />
      <Outlet />
    </>
  );
}

export default App;
