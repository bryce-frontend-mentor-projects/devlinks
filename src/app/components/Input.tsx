import Image from "next/image";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean;
}

export const Input = forwardRef<HTMLElement, InputProps>((props, ref) => {
  const { iconLeft, iconRight, error = false, ...htmlProps } = props;

  const slotProps = {
    className:
      "flex-1 placeholder:text-dark-grey/50 focus:outline-none text-left",
    ...htmlProps,
  };

  return (
    <div
      className={`flex relative gap-3 border border-borders focus-within:border-purple focus-within:shadow-focus-input rounded-lg py-3 px-4 ${
        error ? "border-red" : ""
      }`}
    >
      {iconLeft && <>{iconLeft}</>}
      <Slot {...slotProps} />
      {error && <span className="text-red">Please Check Again</span>}
      {iconRight && <>{iconRight}</>}
    </div>
  );
});

Input.displayName = "Input";
