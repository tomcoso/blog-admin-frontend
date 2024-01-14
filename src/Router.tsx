import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import { checkAuth } from "./loaders/authLoader";
import Posts from "./posts/Posts";
import postsLoader from "./posts/postsLoader";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: checkAuth,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/posts",
          element: <Posts />,
          loader: postsLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
