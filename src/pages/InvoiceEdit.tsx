import { useRef } from "react";
import { useInvoice } from "../context/invocieContext";
import useGetInvoice from "../customHooks/useGetInvoice";
import { useNavigate } from "react-router-dom";

export default function InvoiceEdit() {
  const navigate = useNavigate();
  const { setInvoices } = useInvoice();
  const invoice = useGetInvoice();
  const clientInput = useRef<HTMLInputElement>(null);
  const handleEdit = () => {
    event?.preventDefault();
    if (clientInput.current?.value !== invoice?.client) {
      setInvoices((prevInvoice) =>
        prevInvoice.map((itemObj) =>
          itemObj.id === invoice?.id
            ? {
                ...itemObj,
                client: clientInput.current?.value || itemObj.client,
                //                                  // Ensures client is always a string and not undefined
              }
            : itemObj
        )
      );
      navigate(`/invoices/${invoice?.id}`);
    }
  };

  const handleDelete = (id: number | undefined) => {
    event?.preventDefault();
    if (id)
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoiceObj) => invoiceObj.id !== id)
      );
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleEdit}>
        <input defaultValue={invoice?.client} ref={clientInput} />
        {invoice?.items.map((item: IItem) => (
          <div key={item.description}>
            <input defaultValue={item.description} readOnly />
            <input defaultValue={item.quantity} readOnly />
            <input defaultValue={item.price} readOnly />
          </div>
        ))}
        <button type='submit'>Edit</button>
        <button
          onClick={() => {
            handleDelete(invoice?.id);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
