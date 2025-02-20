import * as React from "react";
import type { SVGProps } from "react";
const SvgArchive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.85 9.943H4.137A2.717 2.717 0 0 1 1.42 7.215V4.043A2.717 2.717 0 0 1 4.137 1.4H19.85a2.717 2.717 0 0 1 2.717 2.664v3.173a2.72 2.72 0 0 1-2.717 2.706m0 0h.063-15.86zm.063 1.576v8.68a2.4 2.4 0 0 1-2.4 2.4H6.474a2.4 2.4 0 0 1-2.4-2.4v-8.68h15.86zm-4.747 3.711a.793.793 0 0 0-.793-.793h-3.839a.793.793 0 0 0 0 1.586h3.796a.803.803 0 0 0 .836-.793"
    />
  </svg>
);
export default SvgArchive;
