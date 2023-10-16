import React, { ComponentPropsWithoutRef, forwardRef } from "react";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary";
  onClick?: (e: React.MouseEvent) => void;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...buttonProps }, ref) => {
    return (
      <button
        ref={ref}
        className={`btn ${
          variant == "primary" ? "btn-primary" : "btn-secondary"
        } ${className}`}
        {...buttonProps}
      />
    );
  },
);

Button.displayName = "Button";
