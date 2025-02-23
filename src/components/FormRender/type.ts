import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export interface FormInput<T extends FieldValues> {
  type: "text" | "number";
  label: string;
  name: Path<T> | string;
  value?: string;
  placeholder?: string;
  width?: number;
}

export interface FormTextarea<T extends FieldValues> {
  type: "textarea";
  label: string;
  name: Path<T>;
  value?: string;
  placeholder?: string;
  width?: number;
}

export interface FormSelect<T extends FieldValues> {
  type: "select";
  label: string;
  name: Path<T>;
  options: { label: string; value: string }[];
  value?: string;
  placeholder?: string;
  width?: number;
}

export interface FormSwitch<T extends FieldValues> {
  type: "switch";
  label: string;
  name: Path<T>;
  checked?: boolean;
  width?: number;
}

export interface FormButton<T extends FieldValues> {
  type: "button";
  label: string;
  name: Path<T>;
  onClick?: () => void;
  width?: number;
}

export interface FormImagesInput<T extends FieldValues> {
  type: "images";
  label: string;
  name: Path<T> | string;
  placeholder?: string;
  width?: number;
  maxCount?: number;
}

export type FormFieldType<T extends FieldValues> =
  | FormButton<T>
  | FormInput<T>
  | FormTextarea<T>
  | FormSelect<T>
  | FormSwitch<T>
  | FormImagesInput<T>;

export type FormRenderProps<T extends FieldValues> = {
  formFields: FormFieldType<T>[];
  methods: UseFormReturn<T>;
  onButtonClick?: () => void;
};
