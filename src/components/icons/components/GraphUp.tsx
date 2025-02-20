import * as React from "react";
import type { SVGProps } from "react";
const SvgGraphUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.418 1.25H7.582A6.45 6.45 0 0 0 1.25 7.7v8.6a6.45 6.45 0 0 0 6.332 6.45h8.836a6.45 6.45 0 0 0 6.332-6.45V7.7a6.45 6.45 0 0 0-6.332-6.45M8.023 19.084a.806.806 0 1 1-1.602 0V16a.807.807 0 1 1 1.602 0zm5.17 0a.806.806 0 1 1-1.601 0v-4.461a.806.806 0 1 1 1.601 0zm5.106 0a.806.806 0 1 1-1.612 0v-7.331a.806.806 0 1 1 1.612 0zm0-11.384a.806.806 0 1 1-1.612 0v-.28a14.1 14.1 0 0 1-9.191 4.677.828.828 0 0 1 0-1.645 12.52 12.52 0 0 0 8.331-4.461h-.806a.817.817 0 0 1 0-1.634h2.752l.15.075H18l.107.129a.5.5 0 0 1 .086.129s0 .086.054.14v.226z"
    />
  </svg>
);
export default SvgGraphUp;
