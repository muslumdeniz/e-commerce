import * as React from "react";
import type { SVGProps } from "react";
const SvgPointers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.17 5.9 21 4.13a2 2 0 0 0-1.65-.88h-4.6a2 2 0 0 0-2-2h-1.46a2 2 0 0 0-2 2v6H4.66a2 2 0 0 0-1.66.88L1.83 11.9a2 2 0 0 0 0 2.2L3 15.87a2 2 0 0 0 1.65.88h4.6v4a2 2 0 0 0 2 2h1.42a2 2 0 0 0 2-2v-10h4.59A2 2 0 0 0 21 9.87l1.17-1.77a2 2 0 0 0 0-2.2M4.66 15.25a.47.47 0 0 1-.4-.22l-1.18-1.76a.48.48 0 0 1 0-.54L4.26 11a.47.47 0 0 1 .4-.22h4.59v4.5zm8.59 5.46a.54.54 0 0 1-.54.54h-1.42a.54.54 0 0 1-.54-.54V3.29a.54.54 0 0 1 .54-.54h1.42a.54.54 0 0 1 .54.54zm7.67-13.44L19.74 9a.47.47 0 0 1-.4.22h-4.59V4.75h4.59a.47.47 0 0 1 .4.22l1.18 1.76a.48.48 0 0 1 0 .54"
    />
  </svg>
);
export default SvgPointers;
