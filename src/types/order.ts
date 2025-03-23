export interface Order {
  create_at: number;
  id: string;
  is_paid: boolean;
  products: { id: string; product_id: string; qty: string }[];
  user: { name: string; email: string; tel: string; address: string };
  num: number;
}
