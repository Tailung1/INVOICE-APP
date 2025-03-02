interface IItem {
  description: string;
  quantity: number;
  price: number;
}

type IItems = IItem[];

interface IInvoice {
  id: number;
  client: string;
  items: IItems;
}

type TInvoices = IInvoice[];