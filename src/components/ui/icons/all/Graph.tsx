import * as React from "react";
import type { SVGProps } from "react";
const SvgGraph = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 16.88a.7.7 0 0 0 .7-.71V7.83a.7.7 0 0 0-1.4 0v8.34a.7.7 0 0 0 .7.71M17.18 14.41a.71.71 0 0 0 .7-.72V10.3a.702.702 0 0 0-1.195-.495.7.7 0 0 0-.205.495v3.39a.71.71 0 0 0 .7.72M6.76 14.41a.71.71 0 0 0 .7-.72V10.3a.7.7 0 0 0-1.4 0v3.39a.71.71 0 0 0 .7.72"
    />
    <path
      fill={props.color}
      d="M16.18 2.75a5.07 5.07 0 0 1 5.07 5.07v8.36a5.07 5.07 0 0 1-5.07 5.07H7.82a5.07 5.07 0 0 1-5.07-5.07V7.82a5.07 5.07 0 0 1 5.07-5.07zm0-1.5H7.82a6.57 6.57 0 0 0-6.57 6.57v8.36a6.57 6.57 0 0 0 6.57 6.57h8.36a6.57 6.57 0 0 0 6.57-6.57V7.82a6.57 6.57 0 0 0-6.57-6.57"
    />
  </svg>
);
export default SvgGraph;
