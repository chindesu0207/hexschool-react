import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FieldValues, useFieldArray, useFormContext } from "react-hook-form";
import type { FormImagesInput } from "../type";
import { Button } from "@/components/ui/button";

const FormImagesInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  maxCount = 5,
}: FormImagesInput<T>) => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name,
  });

  const handleInputAdd = () => {
    if (fields.length < maxCount) {
      append("");
    }
  };

  return (
    <div className="space-y-2">
      <FormLabel>{label}</FormLabel>
      <div className="grid grid-cols-2 gap-4">
        {fields.map((field, index) => (
          <FormField
            control={control}
            key={field.id}
            name={`${name}.${index}`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" placeholder={placeholder} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
      {fields.length < maxCount && (
        <Button type="button" onClick={handleInputAdd}>
          新增圖片
        </Button>
      )}
    </div>
  );
};

export default FormImagesInput;
