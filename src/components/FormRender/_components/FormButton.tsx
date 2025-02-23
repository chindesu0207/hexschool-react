import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { FieldValues, useFormContext } from "react-hook-form";
import type { FormButton } from "../type";
import { Button } from "@/components/ui/button";

const FormButton = <T extends FieldValues>({
  name,
  label,
  onClick,
}: FormButton<T>) => {
  const { control } = useFormContext();
  return (
    <>
      <FormField
        control={control}
        name={name}
        render={() => (
          <FormItem className="mt-8">
            <FormControl>
              <Button type="button" className="w-full" onClick={onClick}>
                {label}
              </Button>
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormButton;
