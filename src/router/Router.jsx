import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loadable from "../components/Loadable/Loadable";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import CombinedSection from "../pages/Home/Monkentype"; // Ensure this path is correct
import MonkeyType from "../pages/Home/Monkentype";

const App = Loadable(lazy(() => import("../App")));
const Home = Loadable(lazy(() => import("../pages/Home/Home")));

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
          path: "/combined-section",
          element: <CombinedSection />,
        },
        {
          path: "/monkey-type",
          element: <MonkeyType />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterConfig;
