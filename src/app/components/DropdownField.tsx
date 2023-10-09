import React, { forwardRef, useState } from "react";
import { useTransition, animated } from "@react-spring/web";

import * as Popover from "@radix-ui/react-popover";
import { Field } from "./Field";
import { DropdownItem } from "./DropdownItem";
import {
  IconGithub,
  IconLinkedin,
  IconYoutube,
  IconChevronDown,
  IconLink,
} from "../icons";
import { PlatformType } from "../data/types";

const emptyValue = {
  id: -1,
  label: "Add new link",
  icon: <IconLink />,
};

export interface DropdownFieldProps
  extends Omit<React.ComponentPropsWithoutRef<"button">, "value"> {
  value?: PlatformType;
  items?: PlatformType[];
  onValueChange?: (value: PlatformType) => void;
}

export const DropdownField = forwardRef<HTMLButtonElement, DropdownFieldProps>(
  (props, ref) => {
    const { value = emptyValue, items = [], onValueChange } = props;

    const [isOpen, setIsOpen] = useState(false);

    const transitions = useTransition(isOpen, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    });

    const handleItemSelected = (item: PlatformType) => {
      onValueChange?.(item);
      setIsOpen(false);
    };

    return (
      <Popover.Root open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
        <Popover.Trigger asChild>
          <Field
            iconLeft={value.icon}
            iconRight={
              <IconChevronDown
                className={`transition-transform duration-500 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            }
          >
            <button>{value.label}</button>
          </Field>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            className="shadow-popover"
            sideOffset={8}
            style={{
              width: "var(--radix-popper-anchor-width)",
            }}
          >
            {transitions((style, item) => (
              <>
                {item && (
                  <animated.div
                    style={{
                      ...style,
                      height: "var(--radix-popper-available-height)",
                    }}
                    className="px-4 py-3 border border-borders bg-white rounded-lg overflow-y-auto"
                  >
                    <ul className="flex flex-col ">
                      {items.map((i) => (
                        <DropdownItem
                          key={i.id}
                          iconLeft={i.icon}
                          isActive={i.id === value.id}
                          onClick={() => handleItemSelected(i)}
                        >
                          {i.label}
                        </DropdownItem>
                      ))}
                    </ul>
                  </animated.div>
                )}
              </>
            ))}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }
);

DropdownField.displayName = "DropdownField";
