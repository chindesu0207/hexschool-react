import { productApi } from "@/api/services/product";
import { ProductSchemaType } from "@/api/services/product/types";
import FormRender from "@/components/FormRender";
import { FormFieldType } from "@/components/FormRender/type";
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
import { ProductProps } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EditDailog = ({ product, category, onSave }: ProductProps) => {
  const [open, setOpen] = useState(false);
  const imagesNum = {
    [product.id]: product.imagesUrl.filter((image) => image !== "").length,
  };
  const [imagesFields, setImagesFields] = useState<{
    [productId: string]: number;
  }>(imagesNum);
  const inputFields: FormFieldType<ProductSchemaType>[] = [
    {
      label: "品名",
      name: "title",
      type: "text",
      value: product.title,
      width: 1,
    },
    {
      label: "類別",
      name: "category",
      type: "select",
      options: (category ?? []).map((item) => ({
        label: item,
        value: item,
      })),
      value: product.category,
      width: 1,
    },
    {
      label: "商品簡介",
      name: "content",
      type: "textarea",
      value: product.content,
    },
    {
      label: "商品描述",
      name: "description",
      type: "textarea",
      value: product.description,
    },
    {
      label: "單位",
      name: "unit",
      type: "text",
      placeholder: "請填寫產品單位",
      width: 1,
    },
    {
      label: "商品原價",
      name: "origin_price",
      type: "number",
      placeholder: "請填寫產品原價",
      width: 1,
    },
    {
      label: "商品售價",
      name: "price",
      type: "number",
      placeholder: "請填寫產品售價",
      width: 1,
    },
    {
      label: "商品主圖",
      name: "imageUrl",
      type: "text",
      value: product.imageUrl,
    },
    ...[...Array(imagesFields[product.id] || 0)].map(
      (_, index): FormFieldType<ProductSchemaType> => ({
        label: `商品圖片${index + 1}`,
        name: `imagesUrl.${index}`,
        type: "text",
        width: 1,
      })
    ),
    ...(imagesFields[product.id] < 5
      ? [
          {
            label: "新增圖片",
            name: "addImage",
            type: "button",
            width: 1,
          },
        ]
      : []),
    {
      label: "是否啟用",
      name: "is_enabled",
      type: "switch",
      checked: false,
    },
  ];

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: product.title,
      category: product.category,
      content: product.content,
      description: product.description,
      origin_price: product.origin_price,
      price: product.price,
      unit: product.unit,
      is_enabled: product.is_enabled,
      imageUrl: product.imageUrl,
      imagesUrl: product.imagesUrl,
    },
  });

  const onButtonClick = () => {
    setImagesFields((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const handleDialogClose = (isOpen: boolean) => {
    if (!isOpen) {
      form.reset();
    }
    setOpen(isOpen);
  };

  const onSubmit = async (formData: z.infer<typeof productSchema>) => {
    const data = {
      data: {
        ...formData,
        is_enabled: formData.is_enabled ? 1 : 0,
      },
    };
    try {
      await productApi.update(product.id, data);
      onSave?.({ id: product.id, ...formData });
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogTrigger asChild>
        <Button>編輯</Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-screen-md"
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form className="space-y-3">
              {inputFields.length > 7 ? (
                <div className="grid grid-cols-2 gap-10">
                  <section>
                    <FormRender
                      methods={form}
                      formFields={inputFields.slice(0, 7)}
                      onButtonClick={onButtonClick}
                    />
                  </section>
                  <section>
                    <FormRender
                      methods={form}
                      formFields={inputFields.slice(7)}
                      onButtonClick={onButtonClick}
                    />
                  </section>
                </div>
              ) : (
                <FormRender
                  methods={form}
                  formFields={inputFields}
                  onButtonClick={onButtonClick}
                />
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
                console.error("Validation errors:", errors)
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

export default EditDailog;
