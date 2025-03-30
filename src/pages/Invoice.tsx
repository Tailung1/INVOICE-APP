
import useGetInvoice from "../customHooks/useGetInvoice";

export default function Invoice() {
    const invoice =useGetInvoice()

  return (
    <div>
      {invoice?.map((invoice: IInvoice) => (
        <div
          style={{
            paddingLeft: "50px",
            border: "2px solid",
            borderColor: "green",
          }}
          key={invoice.id}
        >
          <h1>{invoice.client}</h1>
          {invoice.items.map((item: IItem, index: number) => (
            <div>
              <h2 style={{ color: "red" }}>Item {index + 1} </h2>
              <h3>{item.description}</h3>
              <h3>{item.quantity}</h3>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
