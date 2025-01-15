import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { FieldValues, useFormContext } from "react-hook-form";
import type { FormTextarea } from "../type";

const FormTextarea = <T extends FieldValues>({
  label,
  name,
  placeholder,
}: FormTextarea<T>) => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea {...field} placeholder={placeholder} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormTextarea;
