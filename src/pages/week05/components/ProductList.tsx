import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  onAddToCart,
}: {
  products: Product[];
  onAddToCart: () => void;
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((item) => (
        <ProductCard product={item} onAddToCart={onAddToCart} key={item.id} />
      ))}
    </div>
  );
};

export default ProductList;
