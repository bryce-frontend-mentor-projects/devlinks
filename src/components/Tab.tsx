import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { IconLink } from "../icons";

export interface TabProps extends ComponentPropsWithoutRef<"div"> {
  isActive?: boolean;
  onClick: (e: React.MouseEvent) => void;
}

export const Tab = forwardRef<HTMLDivElement, TabProps>(
  ({ isActive = false, children, className, ...tabProps }, ref) => {
    return (
      <div
        ref={ref}
        className={`tab ${isActive ? "tab-active" : ""}`}
        {...tabProps}
      >
        <IconLink />
        {children}
      </div>
    );
  }
);

Tab.displayName = "Tab";
