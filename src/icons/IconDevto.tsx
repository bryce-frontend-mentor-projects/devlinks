import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgIconDevto = (
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
    <g clipPath="url(#icon-devto_svg__a)">
      <path
        fill="currentColor"
        d="M12.25 0h-8.5A3.75 3.75 0 0 0 0 3.75v8.5A3.75 3.75 0 0 0 3.75 16h8.5A3.75 3.75 0 0 0 16 12.25v-8.5A3.75 3.75 0 0 0 12.25 0Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M5.46 9.201c0 .639-.393 1.606-1.638 1.604H2.25V5.188h1.605c1.201 0 1.605.966 1.606 1.605V9.2ZM3.912 6.24c.132 0 .264.049.395.147.131.099.197.247.198.444v2.365c0 .197-.066.345-.197.443a.657.657 0 0 1-.395.148H3.32V6.239h.591Z"
        clipRule="evenodd"
      />
      <path
        fill="#fff"
        d="M8.872 6.19H7.067v1.305h1.104V8.5H7.067v1.304h1.806v1.004H6.766a.685.685 0 0 1-.702-.668V5.89a.686.686 0 0 1 .668-.703h2.14V6.19Zm3.512 3.915c-.447 1.044-1.248.836-1.607 0L9.47 5.19h1.104l1.007 3.861 1.001-3.861h1.104l-1.303 4.916Z"
      />
    </g>
    <defs>
      <clipPath id="icon-devto_svg__a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgIconDevto);
export default ForwardRef;
