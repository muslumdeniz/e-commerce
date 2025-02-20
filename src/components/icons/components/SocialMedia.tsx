import * as React from "react";
import type { SVGProps } from "react";
const SvgSocialMedia = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.804 14.138a.815.815 0 0 1-.804.804H9.829a.804.804 0 1 1 0-1.608h4.224a.815.815 0 0 1 .751.804m7.946 2.144a6.434 6.434 0 0 1-6.359 6.434H7.684a6.434 6.434 0 0 1-6.434-6.358V7.704A6.434 6.434 0 0 1 7.555 1.27h8.708a6.434 6.434 0 0 1 6.433 6.359zm-4.343-4.385a.91.91 0 0 0-.911-.912 1.223 1.223 0 0 1-1.233-1.222v-2.06a2.145 2.145 0 0 0-2.145-2.144H7.684a2.145 2.145 0 0 0-2.145 2.145v8.579a2.145 2.145 0 0 0 2.145 2.144h8.578a2.145 2.145 0 0 0 2.145-2.145zm-8.686-1.244h2.252a.804.804 0 1 0 0-1.609H9.721a.804.804 0 0 0 0 1.609"
    />
  </svg>
);
export default SvgSocialMedia;
