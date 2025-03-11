import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1.33a10.58 10.58 0 0 0-7.43 3h-.05a10.67 10.67 0 1 0 7.48-3m0 19.84A9.16 9.16 0 0 1 5.07 6l11.18 11.42a.76.76 0 0 0 .54.22.77.77 0 0 0 .53-.21.75.75 0 0 0 0-1.06L6.13 5A9.17 9.17 0 1 1 12 21.17"
    />
  </svg>
);
export default SvgPill;
