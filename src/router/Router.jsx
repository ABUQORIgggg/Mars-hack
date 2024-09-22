import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Loadable from "../components/Loadable/Loadable";
import Blog from "../pages/Blog/Blog";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute"; // Import PrivateRoute

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
