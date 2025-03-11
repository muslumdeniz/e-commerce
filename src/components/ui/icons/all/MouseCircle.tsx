import * as React from "react";
import type { SVGProps } from "react";
const SvgMouseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.35 22.81h-.05a2.23 2.23 0 0 1-2.14-1.61l-1.82-6a2.35 2.35 0 0 1 2.95-2.93l5.85 1.85a2.29 2.29 0 0 1 .09 4.33l-1.67.6a.77.77 0 0 0-.45.45l-.6 1.75a2.26 2.26 0 0 1-2.16 1.56m-1.77-9.13a.86.86 0 0 0-.81 1.1l1.82 6a.78.78 0 0 0 .74.56.76.76 0 0 0 .76-.53l.6-1.75a2.25 2.25 0 0 1 1.36-1.37l1.67-.6a.77.77 0 0 0 .52-.76.76.76 0 0 0-.55-.73l-5.85-1.85a.8.8 0 0 0-.26-.07m-2.32 7.26a.75.75 0 0 0-.75-.75 8.75 8.75 0 1 1 8.75-8.75.75.75 0 1 0 1.5 0 10.25 10.25 0 1 0-10.25 10.25.74.74 0 0 0 .75-.75"
    />
  </svg>
);
export default SvgMouseCircle;
