// import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import "./assets/App.css";
import Header from "./components/Header";
import { useReducer } from "react";
import redirectReducer from "./reducers/redirectReducer";
import {
  RedirectContext,
  RedirectDispatchContext,
} from "./context/redirectContext";

function App() {
  const authState = useLoaderData();
  // https://tomcoso-blog.onrender.com
  // TODO setup context for auth token and state
  const [redirect, dispatch] = useReducer(redirectReducer, "");

  return (
    <>
      <RedirectContext.Provider value={redirect}>
        <RedirectDispatchContext.Provider value={dispatch}>
          <Header authState={authState as boolean} />
          <Outlet />
        </RedirectDispatchContext.Provider>
      </RedirectContext.Provider>
    </>
  );
}

export default App;
