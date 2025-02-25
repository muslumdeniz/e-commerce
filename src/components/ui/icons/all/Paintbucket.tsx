import * as React from "react";
import type { SVGProps } from "react";
const SvgPaintbucket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.382 8.344 15.15 2.112a3.465 3.465 0 0 0-4.894 0l-8.494 8.494a3.465 3.465 0 0 0 0 4.894l6.232 6.232a3.465 3.465 0 0 0 4.894 0l8.494-8.494a3.465 3.465 0 0 0 0-4.894m-1.068 2.464a.843.843 0 0 1-.957.585 40.9 40.9 0 0 0-16.56.54l8.809-8.809a1.586 1.586 0 0 1 2.25 0l6.019 6.064a1.61 1.61 0 0 1 .439 1.62m2.936 9.574a2.52 2.52 0 0 1-5.04 0 6.7 6.7 0 0 1 1.597-3.634 1.125 1.125 0 0 1 1.857 0 6.46 6.46 0 0 1 1.586 3.634"
    />
  </svg>
);
export default SvgPaintbucket;
