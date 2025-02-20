import * as React from "react";
import type { SVGProps } from "react";
const SvgMouse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.325 3.7h-.65c-1.757 0-4.441.715-5.684 1.987a6.86 6.86 0 0 0-1.941 4.795v6.498a6.86 6.86 0 0 0 1.945 4.788c1.243 1.27 3.925 1.982 5.68 1.982h.65c1.755 0 4.437-.713 5.68-1.982a6.86 6.86 0 0 0 1.945-4.788v-6.498a6.9 6.9 0 0 0-.504-2.595 6.8 6.8 0 0 0-1.437-2.2 6.6 6.6 0 0 0-2.15-1.47c-.804-.341-2.664-.517-3.534-.517m.544 7.968a.9.9 0 0 1-.255.629.859.859 0 0 1-1.229 0 .9.9 0 0 1-.254-.629V8.206a.9.9 0 0 1 .255-.629.86.86 0 0 1 1.229 0 .9.9 0 0 1 .254.629zM11.131 3.7V1.14a.9.9 0 0 1 .255-.63.86.86 0 0 1 1.229 0 .9.9 0 0 1 .254.63V3.7h-1.738"
    />
  </svg>
);
export default SvgMouse;
