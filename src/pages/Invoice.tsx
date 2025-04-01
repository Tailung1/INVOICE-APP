import useGetInvoice from "../customHooks/useGetInvoice";
import { Link } from "react-router-dom";

export default function Invoice() {
  const invoice = useGetInvoice();

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>{invoice?.client}</h1>
      {invoice?.items.map((item: IItem, index: number) => (
        <div key={item.description}>
          <h2 style={{ color: "red" }}>Item {index + 1} </h2>
          <h3>{item.description}</h3>
          <h3>{item.quantity}</h3>
          <h3>{item.price}</h3>
        </div>
      ))}
      <Link to={`/invoices/${invoice?.id}/invoiceEdit`}>Edit</Link>
    </div>
  );
}
