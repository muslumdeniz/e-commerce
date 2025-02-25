import * as React from "react";
import type { SVGProps } from "react";
const SvgSwitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.323 10.963H5.898a4.677 4.677 0 0 1-4.677-4.677A4.687 4.687 0 0 1 5.898 1.62h12.425A4.687 4.687 0 0 1 23 6.286a4.677 4.677 0 0 1-4.677 4.677M15.75 6.286a2.595 2.595 0 1 0 5.19 0 2.595 2.595 0 0 0-5.19 0m2.595 8.235a3.192 3.192 0 0 1 0 6.382H5.898a3.19 3.19 0 1 1 0-6.382h12.425m0-1.486H5.898a4.675 4.675 0 0 0-4.52 6.512 4.68 4.68 0 0 0 4.52 2.83h12.425a4.676 4.676 0 0 0 0-9.342m-14.14 4.834a2.093 2.093 0 1 0 4.183.125 2.093 2.093 0 0 0-4.184-.125"
    />
  </svg>
);
export default SvgSwitch;
