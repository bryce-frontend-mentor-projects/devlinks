import React, { ComponentPropsWithoutRef, forwardRef, useState } from "react";
import { Field } from "./Field";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  onValueChange?: (value: string) => void;

  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    placeholder = "Text Field Empty",
    value,
    onValueChange,
    icon,
    ...htmlProps
  } = props;

  return (
    <Field iconLeft={icon}>
      <input
        ref={ref}
        type="text"
        placeholder="Text Field Empty"
        {...htmlProps}
        value={value}
        onChange={(e) => {
          onValueChange?.(e.target.value);
        }}
      />
    </Field>
  );
});

Input.displayName = "Input";
