import * as React from "react";
import type { SVGProps } from "react";
const SvgBucketSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.053 1.25H6.946A5.687 5.687 0 0 0 1.25 6.948v10.104a5.687 5.687 0 0 0 5.698 5.698h10.104a5.687 5.687 0 0 0 5.698-5.698V6.948a5.687 5.687 0 0 0-5.698-5.698m-8.6 14.964-2.451-2.419a2.29 2.29 0 0 1 0-3.225l3.397-3.397-.624-.666a.806.806 0 0 1 1.14-1.14l1.87 1.925 3.924 3.912a.71.71 0 0 1 0 .99l-4.031 4.03a2.3 2.3 0 0 1-3.247 0zm8.6 1.989a1.623 1.623 0 0 1-1.667-1.57 4.43 4.43 0 0 1 1.075-2.397.775.775 0 0 1 1.226 0 4.3 4.3 0 0 1 1.075 2.408 1.623 1.623 0 0 1-1.753 1.57z"
    />
  </svg>
);
export default SvgBucketSquare;
