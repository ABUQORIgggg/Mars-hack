import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loadable from "../components/Loadable/Loadable";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import CombinedSection from "../pages/Home/Monkentype"; // Ensure this path is correct
import MonkeyType from "../pages/Home/Monkentype";
import ShopHistory from "../pages/Shop-Hisotry/ShopHistory";
import Login from "../pages/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"; // Import PrivateRoute

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
          element: (
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          ),
        },
        {
          path: "/blog",
          element: (
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          ),
        },
        {
          path: "/space-shop",
          element: (
            <PrivateRoute>
              <Shop />
            </PrivateRoute>
          ),
        },
        {
          path: "/space-history",
          element: <ShopHistory />,
        },
        {
          path: "/combined-section",
          element: <CombinedSection />,
        },
        {
          path: "/monkey-type",
          element: <MonkeyType />,
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
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
