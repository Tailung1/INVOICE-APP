import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";
import InvoiceEdit from "./pages/InvoiceEdit";
import InvoiceProvider from "./contexts/InvoiceContext";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/invoices"} />,
  },
  {
    path: "/invoices",
    element: <Invoices />,
  },
  { path: "/invoices/:id", element: <Invoice /> },
  {
    path: "/invoices/:id/edit",
    element: <InvoiceEdit />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InvoiceProvider>
      <RouterProvider router={router} />
    </InvoiceProvider>
  </StrictMode>
);
