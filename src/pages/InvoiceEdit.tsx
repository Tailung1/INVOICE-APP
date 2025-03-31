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
    if (clientInput.current?.value) {
      event?.preventDefault();
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
    }
  };

  const handleDelete = (id: number | undefined) => {
    event?.preventDefault();
    if (id)
      setInvoices((prevInvoices) =>
        prevInvoices.filter((invoiceObj) => invoiceObj.id !== id)
      );
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
        <button
          onClick={() => navigate(`/invoices/${invoice?.id}`)}
          type='submit'
        >
          Edit
        </button>
        <button
          onClick={() => {
            handleDelete(invoice?.id);
            navigate("/");
          }}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
