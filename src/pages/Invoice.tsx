import { Link } from "react-router-dom";
import useGetInvoice from "../costumHooks/useGetInvoice";



export default function Invoice() {
  const invoice = useGetInvoice();
 




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
   
    </div>
  );
}
