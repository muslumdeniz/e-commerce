import * as React from "react";
import type { SVGProps } from "react";
const SvgAndroid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.87 10.908v6.885a2.444 2.444 0 0 1-2.445 2.432H8.564a2.444 2.444 0 0 1-2.444-2.432v-6.885a2.444 2.444 0 0 1 2.444-2.433h6.861a2.444 2.444 0 0 1 2.444 2.433M3.77 16.3v-4.7a1.175 1.175 0 1 0-2.35 0v4.7a1.175 1.175 0 1 0 2.35 0m4.794 3.924v2.35a1.175 1.175 0 1 0 2.35 0v-2.35zm6.861 0H13.17v2.35a1.175 1.175 0 1 0 2.35 0v-2.35zm7.144-3.924v-4.7a1.175 1.175 0 1 0-2.35 0v4.7a1.175 1.175 0 1 0 2.35 0m-8.424-9.482a2.127 2.127 0 0 0 2.162-2.021 4.62 4.62 0 0 0-4.7-4.547 4.62 4.62 0 0 0-4.7 4.547 2.127 2.127 0 0 0 2.162 2.02z"
    />
  </svg>
);
export default SvgAndroid;
