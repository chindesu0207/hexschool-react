export interface Product {
  category: string;
  content: string;
  description: string;
  id: string;
  is_enabled: number;
  origin_price: number;
  price: number;
  title: string;
  unit: string;
  num?: number;
  imageUrl: string;
  imagesUrl: string[];
}

export type ProductListProps = {
  products: Product[];
  onUpdateProduct: (updatedProduct?: Product) => void;
  onDeleteProduct: (deleteProduct: string) => void;
};

export type ProductProps = {
  product: Product;
  category?: string[];
  onClick?: () => void;
  onSave?: (updatedProduct: Product) => void;
  onDelete?: (deleteProduct: string) => void;
};

export type ProductFormProps = Omit<ProductProps, "product"> & {
  product?: Product;
  isCreateMode?: boolean;
  onSuccess: () => void;
};
