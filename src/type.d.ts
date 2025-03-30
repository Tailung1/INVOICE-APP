interface IItem {
  description: string;
  quantity: number;
  price: number;
}
type TItems = IItem[];

interface IInvoice {
  id: number;
  client: string;
  items: IItems;
}

type TInvoices = IInvoice[];
