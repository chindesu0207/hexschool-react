import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { cartApi } from "@/api/services/cart";
import { DeleteDailogProps } from "../types";

const DeleteDialog = ({
  open,
  setOpen,
  targetItem,
  onRefresh,
}: DeleteDailogProps) => {
  const onSubmit = async () => {
    try {
      if (targetItem === null) {
        await cartApi.deleteAll();
      } else {
        await cartApi.delete(targetItem.id);
      }
      await onRefresh();
      setOpen(false);
      toast.success(targetItem === null ? "購物車已清空" : "刪除成功");
    } catch (error) {
      console.log(error);
      toast.error("刪除失敗");
      setOpen(false);
    }
  };
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            確定要刪除 "{targetItem !== null ? targetItem.title : "全部"}" 嗎？
          </AlertDialogTitle>
          <AlertDialogDescription>
            一但確定，資料將直接被刪除，無法復原。確定要這麼做嗎？
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            取消
          </AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>確定</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDialog;
