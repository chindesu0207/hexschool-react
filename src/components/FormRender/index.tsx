import { FieldValues, FormProvider } from "react-hook-form";
import { FormFieldType, FormRenderProps } from "./type";
import FormInput from "./_components/FormInput";
import FormTextarea from "./_components/FormTextarea";
import FormSwitch from "./_components/FormSwitch";

const FormRender = <T extends FieldValues>({
  formFields,
  methods,
}: FormRenderProps<T>) => {
  const renderField = (field: FormFieldType<T>) => {
    switch (field.type) {
      case "text":
      case "number":
        return <FormInput {...field} />;
      // case "select":
      //   return <FormSelect {...field} />;
      // case "checkbox":
      //   return <FormCheckbox {...field} />;
      case "textarea":
        return <FormTextarea {...field} />;
      case "switch":
        return <FormSwitch {...field} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      {formFields.map((formField: FormFieldType<T>) => (
        <div key={formField.name}>{renderField(formField)}</div>
      ))}
    </FormProvider>
  );
};

export default FormRender;
