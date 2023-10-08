import React, { forwardRef } from "react";

export interface DropdownFieldProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export const DropdownField = forwardRef<HTMLButtonElement, DropdownFieldProps>(
  (props, ref) => {
    return <button ref={ref} {...props}></button>;
  }
);

DropdownField.displayName = "DropdownField";
