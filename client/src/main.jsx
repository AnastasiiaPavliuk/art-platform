import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from './error-page';
import Root from "./routes/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Index from "./routes";
import OverviewPage from "./routes/overviewPage";
import CreateTownPage from "./routes/createTownPage";
import LoginPage from "./routes/auth/loginPage";
import RegisterPage from "./routes/auth/registerPage";

import "./styles/index.css";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <Root />,
    errorElement : <ErrorPage /> ,
    loader: Root.loader,
    children: [
      { index: true, element: <Index />, loader: Index.loader },
      {
        element: <OverviewPage/>,
        path: "/overview",
        action: OverviewPage.action,
        loader: OverviewPage.loader,
      },
      {
        element: <CreateTownPage/>,
        path: "/create-artwork",
        action: CreateTownPage.action,
        loader: CreateTownPage.loader,
      },
            {
        element: <LoginPage/>,
        path: "/auth/login",
        action: LoginPage.action,
        loader: LoginPage.loader,
      },
            {
        element:<RegisterPage/>,
        path: "/auth/register",
        action: RegisterPage.action,
        loader: RegisterPage.loader,
      },
      ]}]
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


