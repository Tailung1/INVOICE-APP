import { useInvoice } from "../contexts/InvoiceContext";
import { Link } from "react-router-dom";
export default function Invoices() {
  const { invoices } = useInvoice();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {invoices.map((invoice) => {
        return (
          <div
            key={invoice.id}
            style={{ border: "2px solid red", padding: "10px" }}
          >
            <h2>{invoice.client}</h2>
            {invoice.items.map((item, index) => {
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
            <Link to={`/invoices/${invoice.id}`}>Show Options</Link>
          </div>
        );
      })}
    </div>
  );
}
