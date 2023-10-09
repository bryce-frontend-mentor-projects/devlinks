import Image from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import GithubIcon from "../../images/icon-github.svg";

export interface DropdownItemProps extends ComponentPropsWithoutRef<"div"> {
  isActive?: boolean;
  iconLeft?: React.ReactNode;
}

export const DropdownItem = (props: DropdownItemProps) => {
  const { isActive = false, children, iconLeft, ...htmlProps } = props;

  console.log("isActive", isActive);

  return (
    <div
      {...htmlProps}
      className={`flex items-center gap-3 py-3 first:pt-0 border-b border-borders last:border-b-0 last:pb-0 cursor-pointer ${
        isActive ? "text-purple" : ""
      } `}
    >
      {iconLeft && <>{iconLeft}</>}
      {children} {isActive && <span>(Selected)</span>}
    </div>
  );
};
