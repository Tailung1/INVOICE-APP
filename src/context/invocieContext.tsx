import {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";
import data from "../data/invoices.json";

interface IInvoiceContext {
  invoices: TInvoices;
  setInvoices: React.Dispatch<React.SetStateAction<TInvoices>>;
}

const invoiceContext = createContext<IInvoiceContext>({
  invoices: [],
  setInvoices: () => {},
});

export default function InvoiceProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [invoices, setInvoices] = useState<TInvoices>(data);

  return (
    <div>
      <invoiceContext.Provider value={{ invoices, setInvoices }}>
        {children}
      </invoiceContext.Provider>
    </div>
  );
}

export const useInvoice = () => {
  const context = useContext(invoiceContext);
  return context;
};
