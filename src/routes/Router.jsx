import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Main = lazy(() => import("../layouts/Main"));


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <HomePage/>
      }
    ]
  }
]);

