import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import FormRender from "@/components/FormRender";
import { toast } from "sonner";
import { OrderFormFields } from "./OrderFormField";
import { orderSchema } from "@/schema/orderSchema";
import { orderApi } from "@/api/services/order";

const OrderForm = ({
  hasCart,
  onOrderSubmit,
}: {
  hasCart: boolean;
  onOrderSubmit: () => void;
}) => {
  const form = useForm<z.infer<typeof orderSchema>>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      user: {
        name: "",
        email: "",
        tel: "",
        address: "",
      },
      message: "",
    },
  });

  const resetForm = () => {
    form.reset();
  };

  const onSubmit = async (formFields: z.infer<typeof orderSchema>) => {
    if (hasCart) {
      try {
        const res = await orderApi.create({ data: formFields });
        console.log(res);
        onOrderSubmit();
        toast.success("新增成功");
        form.reset();
      } catch (error) {
        console.log(error);
        toast.error("刪除失敗");
      }
    } else {
      toast("目前購物車沒有商品");
    }
  };
  return (
    <div>
      <h3 className="text-center">收件資訊</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormRender methods={form} formFields={OrderFormFields} />
          <div className="flex items-center justify-center gap-5">
            <Button type="button" variant="outline" onClick={resetForm}>
              重設表單
            </Button>
            <Button type="submit">送出訂單</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OrderForm;
