import { Button } from "@/components/ui/button";
import { ProductProps } from "@/types/product";
import ProductDetail from "./ProductDetail";
import { cartApi } from "@/api/services/cart";
import { toast } from "sonner";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const ProductCard = ({
  product,
  onClick,
  onAddToCart,
}: ProductProps & { onAddToCart: () => void }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const addToCart = async (id: string, qty: number) => {
    try {
      setIsLoading(true);
      await cartApi.create({ data: { product_id: id, qty: qty } });
      onAddToCart();
      setIsLoading(false);
      toast.success("已加入購物車");
    } catch (error) {
      console.log(error);
      toast.error("加入購物車失敗");
    }
  };
  return (
    <div
      className="flex border rounded-lg border-gray-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="relative h-[12.5rem] aspect-square">
        <img
          className="absolute object-cover size-full"
          src={product.imageUrl}
          alt={product.title}
        />
      </div>
      <div className="flex flex-col justify-between w-full p-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <span className="rounded-lg bg-accent text-sm font-bold text-muted px-2 py-1">
              {product.category}
            </span>
            <div className="text-xl font-bold">{product.title}</div>
          </div>
          <div className="text-gray-500">{product.content}</div>
        </div>
        <div className="flex items-center gap-3 justify-end">
          <div className="text-base text-gray-400 line-through">
            NT${product.origin_price}
          </div>
          <div className="text-2xl text-accent">NT${product.price}</div>
        </div>
        <div className="flex justify-end gap-4">
          <ProductDetail product={product} addToCart={addToCart} />
          <Button onClick={() => addToCart(product.id, 1)} disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin" />}
            加入購物車
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
