import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./auth/Login";
import { checkAuth } from "./loaders/authLoader";
import PostsAll from "./posts/PostsAll";
import { postsLoader, postMainLoader } from "./posts/postsLoader";
import PostMain from "./posts/PostMain";

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
          element: <PostsAll />,
          loader: postsLoader,
        },
        {
          path: "/posts/:postid",
          element: <PostMain />,
          loader: postMainLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
