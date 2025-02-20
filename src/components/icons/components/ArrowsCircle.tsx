import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.47 10.382a.75.75 0 0 1-.711.594h-.166a.75.75 0 0 1-.575-.897 9.193 9.193 0 0 1 15.599-4.358v-2.68a.75.75 0 0 1 .74-.761.76.76 0 0 1 .761.76v4.534a.76.76 0 0 1-.76.75h-4.612a.76.76 0 1 1 0-1.51h2.818A7.682 7.682 0 0 0 4.47 10.381m15.921 2.651a.74.74 0 0 0-.887.585 7.683 7.683 0 0 1-13.21 3.627h2.924a.76.76 0 0 0 .703-1.05.75.75 0 0 0-.703-.461h-4.23a.75.75 0 0 0-.761.75v4.388a.76.76 0 1 0 1.51 0v-2.048a9.184 9.184 0 0 0 15.239-4.874.74.74 0 0 0-.585-.917"
    />
  </svg>
);
export default SvgArrowsCircle;
