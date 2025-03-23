import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMemo, useState } from "react";
import DeleteDialog from "./DeleteDialog";
import { X } from "lucide-react";
import Counter from "@/components/Counter";
import { CartListProps } from "../types";
import { cartApi } from "@/api/services/cart";
import { CartItem } from "@/types/cart";
import { toast } from "sonner";

const CartList = ({ products, cart, onRefresh }: CartListProps) => {
  const [open, setOpen] = useState(false);
  const [targetItem, setTargetItem] = useState<{
    id: string;
    title: string;
    qty: number;
  } | null>(null);

  const { carts, final_total } = cart;
  const productMap = useMemo(() => {
    return new Map(products.map((product) => [product.id, product]));
  }, [products]);

  const handleQtyChange = async (qty: number, item: CartItem) => {
    if (qty === 0) {
      const targetData = {
        id: item.id,
        title: item.product.title,
        qty,
      };
      setTargetItem(targetData);
      setOpen(true);
    } else {
      try {
        await cartApi.update(item.id, {
          data: { product_id: item.product_id, qty: qty },
        });
        onRefresh();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteCartItem = async (id: string) => {
    try {
      await cartApi.delete(id);
      onRefresh();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="text-center">購物車</h3>
      <Button
        onClick={() =>
          carts.length !== 0 ? setOpen(true) : toast("目前購物車沒有商品")
        }
      >
        清空購物車
      </Button>
      <DeleteDialog
        open={open}
        setOpen={setOpen}
        targetItem={targetItem}
        onRefresh={onRefresh}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]"></TableHead>
            <TableHead className="text-center">商品明細</TableHead>
            <TableHead></TableHead>
            <TableHead className="text-center w-[100px]">數量</TableHead>
            <TableHead className="text-right">小記</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {carts.map((item) => {
            const matchProduct = productMap.get(item.product_id);
            const maxQty = matchProduct?.num ?? 99;
            return (
              <TableRow key={item.id}>
                <TableCell className="font-medium">
                  <X
                    className="cursor-pointer"
                    onClick={() => deleteCartItem(item.id)}
                  />
                </TableCell>
                <TableCell className="relative size-[8rem] aspect-square">
                  <img
                    className="object-cover size-full"
                    src={item.product.imageUrl}
                    alt={item.product.title}
                  />
                </TableCell>
                <TableCell>{item.product.title}</TableCell>
                <TableCell>
                  <Counter
                    value={item.qty}
                    max={maxQty}
                    onChange={(value) => {
                      handleQtyChange(value, item);
                    }}
                  />
                </TableCell>
                <TableCell className="text-right">
                  NT$ {item.final_total}
                </TableCell>
              </TableRow>
            );
          })}
          {carts.length === 0 && (
            <TableCell colSpan={5} className="text-center h-36">
              目前購物車沒有商品
            </TableCell>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">NT$ {final_total}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  );
};

export default CartList;
