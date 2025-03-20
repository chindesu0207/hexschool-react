import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormFieldType } from "@/components/FormRender/type";
import FormRender from "@/components/FormRender";
import { productSchema } from "@/schema/productSchema";
import { ProductSchemaType } from "@/api/services/product/types";
import { productApi } from "@/api/services/product";
import { toast } from "sonner";

interface AddProductProps {
  onAddProduct: () => void;
}

const AddProduct = ({ onAddProduct }: AddProductProps) => {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
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
    },
  });

  const formFields: FormFieldType<ProductSchemaType>[] = [
    {
      label: "產品名稱",
      name: "title",
      type: "text",
      placeholder: "請填寫產品名稱",
      width: 1,
    },
    {
      label: "產品分類",
      name: "category",
      type: "text",
      placeholder: "請填寫產品分類",
      width: 1,
    },
    {
      label: "產品說明",
      name: "content",
      type: "textarea",
      placeholder: "請填寫產品說明",
    },
    {
      label: "產品描述",
      name: "description",
      type: "textarea",
      placeholder: "請填寫產品描述",
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
      label: "產品主圖",
      name: "imageUrl",
      type: "images",
    },
    {
      label: "圖片名稱",
      name: `imagesUrl`,
      type: "images",
      maxCount: 5,
    },
    {
      label: "是否啟用",
      name: "is_enabled",
      type: "switch",
      checked: false,
    },
  ];

  const onSubmit = async (formFields: z.infer<typeof productSchema>) => {
    console.log(formFields);

    try {
      const res = await productApi.create({ data: formFields });
      console.log(res);
      toast.success("新增成功");
      form.reset();
      onAddProduct();
    } catch (error) {
      console.log(error);
      toast.error("刪除失敗");
    }
  };
  return (
    <div className="container mx-auto flex flex-col gap-16">
      <h3>新增產品</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormRender methods={form} formFields={formFields} />
          <div className="flex items-center gap-5">
            <Button type="submit">新建</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProduct;
