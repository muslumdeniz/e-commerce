import * as React from "react";
import type { SVGProps } from "react";
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.76 21.75a10 10 0 0 1-2-.2 9.88 9.88 0 0 1-6.63-4.75 10 10 0 0 1 5-14.41 2.1 2.1 0 0 1 2.23.49A2 2 0 0 1 11.82 5a6.8 6.8 0 0 0 .85 6.68A6.89 6.89 0 0 0 19 14.41a1.94 1.94 0 0 1 1.95 1 2.08 2.08 0 0 1-.11 2.28 9.6 9.6 0 0 1-2.08 2.1 10 10 0 0 1-6 1.96m-2.85-18a.5.5 0 0 0-.21 0A8.5 8.5 0 0 0 5.42 16a8.52 8.52 0 0 0 12.44 2.52 8.8 8.8 0 0 0 1.77-1.78.57.57 0 0 0 0-.64.46.46 0 0 0-.47-.25 8.34 8.34 0 0 1-8.73-11.39.49.49 0 0 0-.11-.53.58.58 0 0 0-.41-.18"
    />
  </svg>
);
export default SvgMoon;
