import React from "react";
import { FormLabel } from "./ui/form";
import { FormControl } from "./ui/form";
import { FormDescription, FormMessage } from "./ui/form";
import { FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface FormFieldProps<T extends FieldValues> extends FieldValues {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: "text" | "email" | "password" | "file";
}

const FormField = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = "text",
}: FormFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormItem>
        <FormLabel className="label">{label}</FormLabel>
        <FormControl>
          <Input className="input" placeholder={placeholder} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export default FormField;
