import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface FormInput<T extends FieldValues> {
  type: "text" | "number";
  label: string;
  name: Path<T>;
  value?: string;
  placeholder?: string;
}

export interface FormTextarea<T extends FieldValues> {
  type: "textarea";
  label: string;
  name: Path<T>;
  value?: string;
  placeholder?: string;
}

export interface FormSelect<T extends FieldValues> {
  type: "select";
  label: string;
  name: Path<T>;
  options: { label: string; value: string }[];
  value?: string;
  placeholder?: string;
}

export interface FormSwitch<T extends FieldValues> {
  type: "switch";
  label: string;
  name: Path<T>;
  checked?: boolean;
  // onChange?: (value: boolean) => void;
}

export type FormFieldType<T extends FieldValues> =
  | FormInput<T>
  | FormTextarea<T>
  | FormSelect<T>
  | FormSwitch<T>;

export type FormRenderProps<T extends FieldValues> = {
  formFields: FormFieldType<T>[];
  methods: UseFormReturn<T>;
};
