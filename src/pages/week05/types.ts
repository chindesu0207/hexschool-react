import { CartData } from "@/types/cart";
import { Product } from "@/types/product";

export type DeleteDailogProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  targetItem: {
    id: string;
    title: string;
    qty: number;
  } | null;
  onRefresh: () => void;
};

export type CartListProps = {
  products: Product[];
  cart: CartData;
  onRefresh: () => void;
};
