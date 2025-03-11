import * as React from "react";
import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M10.44 15.69a1.8 1.8 0 0 1-1.81-1.81v-3.75a1.81 1.81 0 0 1 2.75-1.56l3.11 1.87a1.82 1.82 0 0 1 0 3.12l-3.11 1.87a1.8 1.8 0 0 1-.94.26m0-5.88a.31.31 0 0 0-.31.32v3.75a.29.29 0 0 0 .16.27.3.3 0 0 0 .31 0l3.12-1.88a.32.32 0 0 0 0-.54L10.6 9.85a.3.3 0 0 0-.16-.04m6.63 10.94H6.93a5.69 5.69 0 0 1-5.68-5.68V8.93a5.69 5.69 0 0 1 5.68-5.68h10.14a5.69 5.69 0 0 1 5.68 5.68v6.14a5.69 5.69 0 0 1-5.68 5.68m-10.14-16a4.19 4.19 0 0 0-4.18 4.18v6.14a4.18 4.18 0 0 0 4.18 4.18h10.14a4.18 4.18 0 0 0 4.18-4.18V8.93a4.19 4.19 0 0 0-4.18-4.18z"
    />
  </svg>
);
export default SvgYoutube;
