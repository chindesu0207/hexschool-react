import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ProductProps } from "@/types/product";
import { productAdminApi } from "@/api/services/product";
import { toast } from "sonner";

const DeleteDailog = ({ product, onDelete }: ProductProps) => {
  const onSubmit = async (id: string) => {
    try {
      await productAdminApi.delete(id);
      toast.success("刪除成功");
      onDelete?.(id);
    } catch (error) {
      console.log(error);
      toast.error("刪除失敗");
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={"outline"}>刪除</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>確定要刪除 "{product.title}" 嗎？</AlertDialogTitle>
          <AlertDialogDescription>
            一但確定，資料將直接被刪除，無法復原。確定要這麼做嗎？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>取消</AlertDialogCancel>
          <AlertDialogAction onClick={() => onSubmit(product.id)}>
            確定
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDailog;
