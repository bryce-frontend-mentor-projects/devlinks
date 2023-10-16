import Image from "next/image";
import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface FieldProps extends React.ComponentPropsWithoutRef<"input"> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  error?: boolean;
}

export const Field = forwardRef<HTMLDivElement, FieldProps>((props, ref) => {
  const { iconLeft, iconRight, error = false, children, ...htmlProps } = props;

  const slotProps = {
    className:
      "flex-1 text-dark-grey placeholder:text-dark-grey/50 focus:outline-none text-left",
    children,
  };

  return (
    <div
      ref={ref}
      className={`flex items-center relative gap-3 border border-borders focus-within:border-purple text-grey focus-within:shadow-focus-input rounded-lg py-3 px-4 ${
        error ? "border-red" : ""
      }`}
      {...htmlProps}
    >
      {iconLeft && <>{iconLeft}</>}
      <Slot {...slotProps} />
      {error && <span className="text-red">Please Check Again</span>}
      {iconRight && <>{iconRight}</>}
    </div>
  );
});

Field.displayName = "Field";
