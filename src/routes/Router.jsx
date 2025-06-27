import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const Main = lazy(() => import("../layouts/Main"));
const ProjectPage = lazy(() => import("../pages/Projects/ProjectPage"));


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/projects",
        element: <ProjectPage />
      }
    ]
  }
]);

