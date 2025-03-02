import { useRef } from "react";
import { useInvoice } from "../contexts/InvoiceContext";
import useGetInvoice from "../costumHooks/useGetInvoice";
import { useNavigate } from "react-router-dom";

export default function InvoiceEdit() {
  const { setInvoices } = useInvoice();
  const invoice = useGetInvoice();
  const clientInput = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleEdit = () => {
    event?.preventDefault();
    if (clientInput) {
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoiceObj) =>
          invoiceObj.id === invoice?.id
            ? { ...invoiceObj, client: clientInput.current.value }
            : invoiceObj
        )
      );
      navigate(`/invoices/${invoice?.id}`);
    }
  };
  return (
    <form onSubmit={handleEdit}>
      <input
        type="text"
        defaultValue={invoice?.client}
        ref={clientInput}
      />
      {invoice?.items.map((item) => {
        return (
          <div key={item.description}>
            <input type="text" defaultValue={item.description} readOnly />
            <input type="number" defaultValue={item.quantity} readOnly />
            <input type="number" defaultValue={item.price} readOnly />
          </div>
        );
      })}
      <button type="submit">Save Edit</button>
    </form>
  );
}
