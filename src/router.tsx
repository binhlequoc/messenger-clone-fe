import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/templates/Layout";
import { PATH } from "./constants";
import HomePage from "./pages/home";

const AuthPage = lazy(() => import("./pages/auth/index"));

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <Layout />,
    children: [
      {
        path: PATH.SIGN_IN,
        element: <AuthPage />,
      },
      {
        path: PATH.HOME,
        element: <HomePage />,
      },
    ],
  },
]);
