import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import InvoiceProvider from "./context/invocieContext";


import Invoice from "./pages/Invoice";
import Invoices from "./pages/Invoices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Invoices />,
  },{
    path:"/invoices/:id",
    element:<Invoice/>
  }
  
]);


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InvoiceProvider>
        <RouterProvider router={router}/>
    </InvoiceProvider>
    

  </StrictMode>
);
