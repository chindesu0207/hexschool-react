export interface Product {
  category: string;
  content: string;
  description: string;
  id: string;
  is_enabled: 1 | 0;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
  num: number;
  imageUrl: string;
  imagesUrl: string[];
}

export type ProductProps = {
  product: Product;
  onClick?: () => void;
};
