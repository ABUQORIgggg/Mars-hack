import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loadable from "../components/Loadable/Loadable";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import ShopHistory from "../pages/Shop-Hisotry/ShopHistory";

const App = Loadable(lazy(() => import("../App")));
const Home = Loadable(lazy(() => import("../pages/Home/Home")));

const RouterConfig = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
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
          path: "/space-history",
          element: <ShopHistory />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
