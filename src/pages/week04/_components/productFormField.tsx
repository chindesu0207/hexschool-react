import { ProductSchemaType } from "@/api/services/product/types";
import { FormFieldType } from "@/components/FormRender/type";

export const getProductFormFields = (
  mode: "create" | "edit",
  category?: string[],
): FormFieldType<ProductSchemaType>[] => {
  const createProductFormFields: FormFieldType<ProductSchemaType>[] = [
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

  const editProductFormFields: FormFieldType<ProductSchemaType>[] = [
    {
      label: "品名",
      name: "title",
      type: "text",
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
      width: 1,
    },
    {
      label: "商品簡介",
      name: "content",
      type: "textarea",
    },
    {
      label: "商品描述",
      name: "description",
      type: "textarea",
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
  return mode === "create" ? createProductFormFields : editProductFormFields;
};
