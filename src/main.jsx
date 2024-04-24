import * as React from "react";
import * as ReactDOM from "react-dom/client";
import ErrorPage from './error-page';
import Overview from "./routes/overview";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/root";

import "./index.css";
import Town from "./routes/town";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
      errorElement : <ErrorPage /> ,
      children: [
        {
          element: <Overview />,
          path: "/overview",
        },
    {
      element: <Town/>,
      path: "/town",
    },
      ]}]
  }

    ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


