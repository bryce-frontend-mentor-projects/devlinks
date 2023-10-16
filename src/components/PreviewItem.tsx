import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { PlatformType } from "../data/types";
import { IconArrowRight } from "../icons";

export type PreviewItemProps = Omit<ComponentPropsWithoutRef<"div">, "id"> &
  PlatformType & { onClick?: (e: React.MouseEvent) => void };

export const PreviewItem = forwardRef<HTMLDivElement, PreviewItemProps>(
  (props, ref) => {
    const { id, label, icon, styles, className, onClick, ...divProps } = props;

    return (
      <div
        ref={ref}
        {...divProps}
        className={`preview-item ${className ?? ""}`}
        onClick={(e) => onClick?.(e)}
        style={{ ...styles }}
      >
        {icon}
        <span>{label}</span>
        <IconArrowRight />
      </div>
    );
  }
);

PreviewItem.displayName = "PreviewItem";
