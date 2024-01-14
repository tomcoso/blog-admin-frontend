import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/posts" element></Route>
        <Route path="/login" element={<Login />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
