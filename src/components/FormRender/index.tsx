import { FieldValues, FormProvider } from "react-hook-form";
import { FormFieldType, FormRenderProps } from "./type";
import FormInput from "./_components/FormInput";
import FormTextarea from "./_components/FormTextarea";
import FormSwitch from "./_components/FormSwitch";
import FormSelect from "./_components/FormSelect";
import FormButton from "./_components/FormButton";
import FormImagesInput from "./_components/FormImagesInput";

const FormRender = <T extends FieldValues>({
  formFields,
  methods,
  onButtonClick,
}: FormRenderProps<T>) => {
  const renderField = (field: FormFieldType<T>) => {
    switch (field.type) {
      case "text":
      case "tel":
      case "number":
        return <FormInput {...field} />;
      case "select":
        return <FormSelect {...field} />;
      case "button":
        return <FormButton {...field} onClick={onButtonClick} />;
      case "textarea":
        return <FormTextarea {...field} />;
      case "switch":
        return <FormSwitch {...field} />;
      case "images":
        return <FormImagesInput {...field} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="grid grid-cols-2 gap-4">
        {formFields.map((formField: FormFieldType<T>) => (
          <div
            key={formField.name}
            className={formField.width === 1 ? "col-span-1" : "col-span-2"}
          >
            {renderField(formField)}
          </div>
        ))}
      </div>
    </FormProvider>
  );
};

export default FormRender;
