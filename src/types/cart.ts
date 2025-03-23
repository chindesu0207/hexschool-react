import { Product } from "./product";

export interface CartItem {
  id: string;
  product: Product;
  product_id: string;
  qty: number;
  total: number;
  final_total: number;
}

export interface Coupon {
  id: string;
  code: string;
  title: string;
  percent: number;
  due_date: number;
  is_enabled: number;
}

export interface CartData {
  carts: CartItem[];
  total: number;
  final_total: number;
  coupon?: Coupon;
}

export type CartProps = {
  product: Product;
  addToCart: (id: string, qty: number) => void;
};
