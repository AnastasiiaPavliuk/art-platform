import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes";
import Login from "./routes/auth/login";
// import CreateCheese from "./routes/createCheese";
import Root from "./routes/root";
import "./styles/index.css";
import Register from "./routes/auth/register";
import ErrorPage from "./routes/error-page";
import CreateTown from "./routes/createTown";
import Overview from "./routes/overview";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Root.loader,
    children: [
      { index: true, element: <Index />, loader: Index.loader },
      {
        path: "/create-town",
        element: <CreateTown />,
        // action: CreateCheese.action,
        // loader: CreateCheese.loader,
      },
      {
        path: "/overview",
        element: <Overview />,
        loader: Overview.loader,
      },
      {
        path: "/auth/login",
        element: <Login />,
        action: Login.action,
        loader: Login.loader,
      },
      {
        path: "/auth/register",
        element: <Register />,
        action: Register.action,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


