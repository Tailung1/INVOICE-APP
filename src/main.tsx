import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Invoices from "./pages/Invoices";
import { createBrowserRouter, RouterProvider,Navigate } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Navigate to={"/invoices"} />
    },
  {
    path: "/invoices",
    element: <Invoices />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
