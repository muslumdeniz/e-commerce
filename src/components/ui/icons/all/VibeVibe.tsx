import * as React from "react";
import type { SVGProps } from "react";
const SvgVibeVibe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 25"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.15 8.52a.52.52 0 0 1 .41-.85h4.94a.53.53 0 0 1 .42.85l-2.42 3.24a.53.53 0 0 1-.84 0zm8.22.71a.75.75 0 0 0-1.05.17L12 15.31 7.67 9.39a.75.75 0 1 0-1.2.89l5 6.74a.76.76 0 0 0 .6.31.73.73 0 0 0 .61-.31l4.9-6.74a.75.75 0 0 0-.21-1.05M12 23.25A10.75 10.75 0 1 1 22.75 12.5 10.76 10.76 0 0 1 12 23.25m0-20a9.25 9.25 0 1 0 9.25 9.25A9.26 9.26 0 0 0 12 3.25"
    />
  </svg>
);
export default SvgVibeVibe;
