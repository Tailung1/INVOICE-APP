import { Link } from "react-router-dom";
import useGetInvoice from "../costumHooks/useGetInvoice";
import { useInvoice } from "../contexts/InvoiceContext";
import { useNavigate } from "react-router-dom";

export default function Invoice() {
  const invoice = useGetInvoice();
  const { setInvoices } = useInvoice();
  const navigate = useNavigate()

  const handleDelete = () => {
    setInvoices((prevInvoices) =>
      prevInvoices.filter((invoiceObj) => invoiceObj.id !== invoice?.id)
    );
    navigate("/invoices")
  };

  return (
    <div key={invoice?.id}>
      <h2>{invoice?.client}</h2>
      {invoice?.items.map((item, index) => {
        return (
          <div key={item.description}>
            <h3 style={{ textDecoration: "underline" }}>
              Item N{index + 1}
            </h3>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
          </div>
        );
      })}
      <Link to={`/invoices/${invoice?.id}/edit`}>Edit</Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
