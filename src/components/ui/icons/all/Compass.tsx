import * as React from "react";
import type { SVGProps } from "react";
const SvgCompass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.85 5.8 8.59 8.59 5.8 15.85a1.81 1.81 0 0 0 1.69 2.47c.225 0 .449-.04.66-.12l7.26-2.79 2.79-7.26a1.82 1.82 0 0 0-2.35-2.35m-8.23 11a.32.32 0 0 1-.35-.07.34.34 0 0 1-.07-.35l2.26-5.86 4 4zm9.18-9.19-2.26 5.87-4-4 5.85-2.28a.31.31 0 0 1 .423.23.33.33 0 0 1-.013.18M12 1.25A10.75 10.75 0 1 0 22.75 12 10.76 10.76 0 0 0 12 1.25m0 20A9.25 9.25 0 1 1 21.25 12 9.26 9.26 0 0 1 12 21.25"
    />
  </svg>
);
export default SvgCompass;
