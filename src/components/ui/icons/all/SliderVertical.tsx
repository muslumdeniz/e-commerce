import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.42 5.3V4.21a3 3 0 0 0-3-3H7.54a3 3 0 0 0-3 3V5.3A3.68 3.68 0 0 0 1.25 9v6a3.68 3.68 0 0 0 3.33 3.7v1.09a3 3 0 0 0 3 3h8.92a3 3 0 0 0 3-3V18.7a3.68 3.68 0 0 0 3.25-3.7V9a3.68 3.68 0 0 0-3.33-3.7M6.08 4.21a1.47 1.47 0 0 1 1.46-1.46h8.92a1.47 1.47 0 0 1 1.46 1.46v1H6.08zm11.84 15.58a1.47 1.47 0 0 1-1.46 1.46H7.54a1.47 1.47 0 0 1-1.46-1.46v-1.05h11.84zM21.25 15a2.21 2.21 0 0 1-2.2 2.2H5A2.21 2.21 0 0 1 2.75 15V9A2.21 2.21 0 0 1 5 6.76h14.1A2.21 2.21 0 0 1 21.25 9z"
    />
  </svg>
);
export default SvgSliderVertical;
