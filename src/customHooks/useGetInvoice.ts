import { useParams } from "react-router-dom";
import { useInvoice } from "../context/invocieContext";

export default function useGetInvoice() {
  const { invoices } = useInvoice();
  const { id } = useParams();

  const invoice = invoices.find(
    (invoice) => invoice.id === Number(id)
  );

  return invoice;
}
