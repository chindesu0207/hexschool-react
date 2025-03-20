import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, useFormContext } from "react-hook-form";
import type { FormInput } from "../type";

const FormInput = <T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
}: FormInput<T>) => {
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
              <Input
                {...field}
                type={type === "number" ? "number" : type}
                placeholder={placeholder}
                inputMode={type === "number" ? "numeric" : undefined}
                min={type === "number" ? 0 : undefined}
                onChange={(e) => {
                  const value = e.target.value;
                  if (type === "number") {
                    field.onChange(
                      value === "" ? "" : Math.max(0, Number(value)),
                    );
                  } else {
                    field.onChange(value);
                  }
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default FormInput;
