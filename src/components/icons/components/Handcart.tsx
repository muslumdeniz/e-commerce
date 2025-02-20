import * as React from "react";
import type { SVGProps } from "react";
const SvgHandcart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.28 20.887a1.798 1.798 0 1 1-1.788-1.756 1.777 1.777 0 0 1 1.787 1.756m6.251-1.756a1.766 1.766 0 1 0 1.799 1.756 1.777 1.777 0 0 0-1.799-1.756m2.966-15.608H8.175q-.256 0-.503.064a.3.3 0 0 0 0-.096l-1.07-1.788a.87.87 0 0 0-.76-.418H2.19a.846.846 0 1 0 0 1.681h3.211l.814 1.37a.7.7 0 0 0 .107.16 2.14 2.14 0 0 0-.385 1.071l-.172 2.216h16.829l.15-1.894a2.215 2.215 0 0 0-2.248-2.366M5.274 14.399a2.216 2.216 0 0 0 2.237 2.366h12.333a2.237 2.237 0 0 0 2.237-2.045l.386-5.256H5.617z"
    />
  </svg>
);
export default SvgHandcart;
