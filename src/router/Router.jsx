import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loadable from "../components/Loadable/Loadable";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";

const App = Loadable(lazy(() => import("../App")));
const Home = Loadable(lazy(() => import("../pages/Home/Home")));
const Posts = Loadable(lazy(() => import("../pages/Posts/Posts")));
const Form = Loadable(lazy(() => import("../pages/Form/Form")));
const AllPosts = Loadable(lazy(() => import("../pages/PostsHome/Home")));

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/main",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/space-shop",
          element: <Shop />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/allposts",
          element: <AllPosts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
