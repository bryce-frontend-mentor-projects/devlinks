import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconHashnode = (
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
    <g clipPath="url(#icon-hashnode_svg__a)">
      <path
        fill="currentColor"
        d="M1.1 5.347c-1.466 1.438-1.466 3.84 0 5.306L5.346 14.9c1.437 1.466 3.84 1.466 5.306 0l4.247-4.247c1.465-1.465 1.465-3.868 0-5.306L10.653 1.1C9.187-.366 6.784-.366 5.347 1.1L1.099 5.347ZM9.86 9.86a2.63 2.63 0 0 1-3.716 0 2.624 2.624 0 0 1 0-3.716 2.624 2.624 0 0 1 3.715 0 2.63 2.63 0 0 1 0 3.716Z"
      />
    </g>
    <defs>
      <clipPath id="icon-hashnode_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgIconHashnode);
export default ForwardRef;
