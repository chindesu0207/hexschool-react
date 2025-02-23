import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { FieldValues, useFormContext } from "react-hook-form";
import type { FormSwitch } from "../type";

const FormSwitch = <T extends FieldValues>({ label, name }: FormSwitch<T>) => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="mt-8">
            <div className="flex items-center gap-4">
              <FormLabel>{label}</FormLabel>
              <FormControl>
                <Switch
                  checked={Boolean(field.value)}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </div>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormSwitch;
