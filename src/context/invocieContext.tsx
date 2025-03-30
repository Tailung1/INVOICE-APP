import { createContext, useState } from "react";
import data from "../data/invoices.json";

interface IInvoiceContext {
  invoices: TInvoices;
  setInvoices: React.Dispatch<React.SetStateAction<TInvoices>>;
}

const invoiceContext = createContext<IInvoiceContext>({
  invoices: [],
  setInvoices: () => {},
});

export default function invoiceProvider() {
  const [invoices, setInvoices] = useState<TInvoices>(data);

  return (
    <div>
      <invoiceContext.Provider
        value={{ invoices, setInvoices }}
      ></invoiceContext.Provider>
    </div>
  );
}
