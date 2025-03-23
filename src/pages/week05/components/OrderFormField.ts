import { OrderSchemaType } from "@/api/services/order/types";
import { FormFieldType } from "@/components/FormRender/type";

export const OrderFormFields: FormFieldType<OrderSchemaType>[] = [
  {
    label: "收件人姓名",
    name: "user.name",
    type: "text",
    placeholder: "請填寫收件人姓名",
    width: 2,
  },
  {
    label: "Email",
    name: "user.email",
    type: "text",
    placeholder: "請填寫Email",
    width: 2,
  },
  {
    label: "收件人電話",
    name: "user.tel",
    type: "tel",
    placeholder: "請填寫收件人電話",
    width: 2,
  },
  {
    label: "收件人地址",
    name: "user.address",
    type: "text",
    placeholder: "請填寫收件人地址",
    width: 2,
  },
  {
    label: "備註",
    name: "message",
    type: "textarea",
    placeholder: "如需有特殊需求請填寫備註內容",
    width: 2,
  },
];
