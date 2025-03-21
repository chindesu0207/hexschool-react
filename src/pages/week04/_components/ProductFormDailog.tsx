import { productApi } from "@/api/services/product";
import FormRender from "@/components/FormRender";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { productSchema } from "@/schema/productSchema";
import { ProductFormProps } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { getProductFormFields } from "./productFormField";

const ProductFormDailog = ({
  product,
  category,
  isCreateMode,
  onSuccess,
}: ProductFormProps) => {
  const [open, setOpen] = useState(false);

  const formFields = isCreateMode
    ? getProductFormFields("create")
    : getProductFormFields("edit", category);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: isCreateMode
      ? {
          title: "",
          category: "",
          content: "",
          description: "",
          origin_price: 0,
          price: 0,
          unit: "",
          imageUrl: "",
          imagesUrl: [],
          is_enabled: 1,
        }
      : product,
  });

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      form.reset();
    }
    setOpen(isOpen);
  };

  const onSubmit = async (formData: z.infer<typeof productSchema>) => {
    console.log(formData);
    try {
      if (isCreateMode) {
        await productApi.create({ data: formData });
        form.reset();
      } else if (product) {
        const data = {
          data: {
            ...formData,
            is_enabled: formData.is_enabled ? 1 : 0,
          },
        };
        await productApi.update(product.id, data);
      }
      toast.success(`${isCreateMode ? "新增成功" : "編輯成功"}`);
      setOpen(false);
      onSuccess();
    } catch (error) {
      console.log(error);
      toast.error("刪除失敗");
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <Button className="ml-auto">
          {isCreateMode ? "新增產品" : "編輯"}
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-screen-md"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>
            {isCreateMode ? "新增產品" : product?.title}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form className="space-y-3">
              {formFields.length > 7 ? (
                <div className="grid grid-cols-2 gap-10">
                  <section>
                    <FormRender
                      methods={form}
                      formFields={formFields.slice(0, 7)}
                    />
                  </section>
                  <section>
                    <FormRender
                      methods={form}
                      formFields={formFields.slice(7)}
                    />
                  </section>
                </div>
              ) : (
                <FormRender methods={form} formFields={formFields} />
              )}
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              取消
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              onClick={form.handleSubmit(onSubmit, (errors) =>
                console.error("Validation errors:", errors),
              )}
            >
              儲存
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormDailog;
