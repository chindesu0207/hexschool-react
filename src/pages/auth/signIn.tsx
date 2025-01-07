import { useLocation, useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInSchema } from "@/schema/authSchema";
import { authApi } from "@/api/services/auth";
import { useAuth } from "@/hooks/useAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectBack = (fallbackPath: string = "/") => {
    const from = location.state?.from?.pathname || fallbackPath;
    navigate(from, { replace: true });
  };

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInSchema>) => {
    try {
      const res = await authApi.signIn(values);
      if (res.success) {
        signIn(res.uid, res.token);
        redirectBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container w-4/6 mx-auto flex flex-col gap-16">
      <h3>登入</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="請輸入您的 Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密碼</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="請輸入您的密碼"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-5">
            <Button type="submit">登入</Button>
            <a target="_blank" href="https://ec-course-api.hexschool.io/">
              還沒有註冊？
            </a>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
