import useGetInvoice from "../customHooks/useGetInvoice";
import { Link } from "react-router-dom";

export default function Invoice() {
  const invoice = useGetInvoice();

  return (
    <div style={{ marginLeft: "50px" }}>
      <h1>{invoice?.client}</h1>
      {invoice?.items.map((item: IItem, index: number) => (
        <div key={item.description}>
          <h1 style={{ color: "red" }}>Item {index + 1} </h1>
          <h2>{item.description}</h2>
          <h2>{item.quantity}</h2>
          <h3>{item.price}</h3>
        </div>
      ))}
      <Link to={`/invoices/${invoice?.id}/invoiceEdit`}>Edit</Link>
    </div>
  );
}
