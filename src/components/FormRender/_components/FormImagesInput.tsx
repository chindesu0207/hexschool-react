import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  FieldValues,
  useController,
  useFieldArray,
  useFormContext,
} from "react-hook-form";
import type { FormImagesInput } from "../type";
import { useState } from "react";
import { productApi } from "@/api/services/product";
import { toast } from "sonner";
import { X } from "lucide-react";

const FormImagesInput = <T extends FieldValues>({
  label,
  name,
  placeholder,
  maxCount = 1,
}: FormImagesInput<T>) => {
  const { control } = useFormContext();

  const { field } = useController({
    control,
    name,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const [isUploading, setIsUploading] = useState(false);

  const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append("file-to-upload", image);

    const { imageUrl } = await productApi.uploadImage(formData);
    return imageUrl;
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);
      const imageUrl = await uploadImage(file);
      if (maxCount > 1) {
        append(imageUrl);
      } else {
        field.onChange(imageUrl);
      }
    } catch (error) {
      console.log(error);
      toast.error("圖片上傳失敗");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  };

  const handleRemove = (index?: number) => {
    if (maxCount > 1 && index !== undefined) {
      remove(index);
    } else {
      field.onChange("");
    }
  };

  return (
    <div className="space-y-2">
      <FormLabel>{label}</FormLabel>
      {maxCount > 1 ? (
        <div className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <FormField
              control={control}
              key={field.id}
              name={`${name}.${index}`}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-3">
                    <FormControl>
                      <Input {...field} type="text" placeholder={placeholder} />
                    </FormControl>
                    <X onClick={() => handleRemove(index)} />
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
      ) : field.value != "" ? (
        <FormItem>
          <div className="flex items-center gap-3">
            <FormControl>
              <Input {...field} type="text" placeholder={placeholder} />
            </FormControl>
            <X onClick={() => handleRemove()} />
          </div>
          <FormMessage />
        </FormItem>
      ) : null}
      {(maxCount > 1 ? fields.length < maxCount : field.value == "") && (
        <div className="flex items-center space-x-2">
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="w-full"
          />
          {isUploading && <span>上傳中...</span>}
        </div>
      )}
    </div>
  );
};

export default FormImagesInput;
