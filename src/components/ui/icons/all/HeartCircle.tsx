import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m.759 16.027a1.84 1.84 0 0 1-1.485 0c-1.606-.77-5.291-2.959-5.236-6.699A3.53 3.53 0 0 1 8.7 6.874a3.8 3.8 0 0 1 2.772.308 1.1 1.1 0 0 0 1.1 0 3.86 3.86 0 0 1 3.058-.231 3.54 3.54 0 0 1 2.376 3.3c-.121 4.18-3.663 6.149-5.247 6.776"
    />
  </svg>
);
export default SvgHeartCircle;
