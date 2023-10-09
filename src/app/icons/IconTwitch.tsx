import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconTwitch = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 16"
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      d="M7.76 3.954h.954v2.853H7.76m2.62-2.854h.954v2.854h-.954M4.667 1.333l-2.38 2.38v8.574H5.14v2.38l2.387-2.38h1.9L13.714 8V1.333m-.954 6.194-1.9 1.9H8.954l-1.667 1.667V9.427H5.14v-7.14h7.62v5.24Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgIconTwitch);
export default ForwardRef;
