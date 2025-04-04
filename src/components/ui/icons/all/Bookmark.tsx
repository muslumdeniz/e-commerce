import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.91 1.31H7.73L7 1.28v.05A6.7 6.7 0 0 0 1.25 8v8.1A6.71 6.71 0 0 0 8 22.75h8.1a6.71 6.71 0 0 0 6.7-6.7V8a6.71 6.71 0 0 0-5.89-6.69M15.5 2.75v9.83a.11.11 0 0 1-.06.1.21.21 0 0 1-.22 0l-2.51-1.12a1.8 1.8 0 0 0-.71-.15c-.241 0-.48.05-.7.15L8.78 12.7a.21.21 0 0 1-.22 0 .11.11 0 0 1-.06-.1V2.75zm5.75 13.3a5.21 5.21 0 0 1-5.2 5.2H8a5.21 5.21 0 0 1-5.2-5.2V8A5.2 5.2 0 0 1 7 2.85v9.73a1.61 1.61 0 0 0 .75 1.36 1.71 1.71 0 0 0 1.64.13L11.91 13a.19.19 0 0 1 .18 0l2.52 1.12c.224.098.466.15.71.15a1.66 1.66 0 0 0 .93-.28 1.61 1.61 0 0 0 .75-1.41V2.85A5.2 5.2 0 0 1 21.25 8z"
    />
  </svg>
);
export default SvgBookmark;
