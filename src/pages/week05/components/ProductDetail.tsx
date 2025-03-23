import Counter from "@/components/Counter";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CartProps } from "@/types/cart";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useState } from "react";

const ProductDetail = ({ product, addToCart }: CartProps) => {
  const [qty, setQty] = useState(1);

  const handleQtyChange = (newQty: number) => {
    setQty(newQty);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">查看更多</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-screen-md"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        <div className="flex gap-4 py-4">
          <div className="relative h-[18.75rem] aspect-square">
            <img
              className="absolute object-cover size-full"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="text-gray-500">{product.description}</div>
              <div>商品描述: {product.content}</div>
              <div>
                剩餘數量:{product.is_enabled ? product.num : "目前缺貨"}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-accent my-6">
                NT${product.price}/{product.unit}
              </span>
              <span className="text-base text-gray-400 line-through">
                NT${product.origin_price}/{product.unit}
              </span>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Counter max={product.num ?? 1} onChange={handleQtyChange} />
          <DialogClose asChild>
            <Button type="button" variant="outline">
              關閉
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button" onClick={() => addToCart(product.id, qty)}>
              加入購物車
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;
