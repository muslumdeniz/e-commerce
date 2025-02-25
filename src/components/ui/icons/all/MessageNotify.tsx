import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageNotify = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.85 4.078a2.875 2.875 0 1 1-2.897-2.908 2.864 2.864 0 0 1 2.897 2.908m-.782 3.884v6.825a5.07 5.07 0 0 1-5.066 5.067h-1.693a1.44 1.44 0 0 0-1.172.607l-1.16 1.66a1.67 1.67 0 0 1-2.735 0l-1.16-1.66a1.44 1.44 0 0 0-1.173-.607H6.25a5.067 5.067 0 0 1-5.099-5.067V7.062a5.067 5.067 0 0 1 5.1-5.067h9.819a4.23 4.23 0 0 0-.554 2.083 4.406 4.406 0 0 0 6.51 3.884zM8.475 11.37a1.085 1.085 0 1 0-2.17 0 1.085 1.085 0 0 0 2.17 0m4.177 0a1.085 1.085 0 1 0-2.17 0 1.085 1.085 0 0 0 2.17 0m4.166 0a1.084 1.084 0 1 0-2.169 0 1.084 1.084 0 0 0 2.17 0"
    />
  </svg>
);
export default SvgMessageNotify;
