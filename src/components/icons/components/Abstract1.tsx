import * as React from "react";
import type { SVGProps } from "react";
const SvgAbstract1 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m11.486 22.268-3.829-5.754a1.95 1.95 0 0 1 0-2.16l3.705-5.597a.49.49 0 0 0 0-.526l-2.72-3.974a1.623 1.623 0 0 1 .448-2.24l1.12-.75a1.623 1.623 0 0 1 2.238.449l3.896 5.787a1.95 1.95 0 0 1 0 2.16l-3.706 5.598a.49.49 0 0 0 0 .526l2.72 3.918a1.62 1.62 0 0 1-.447 2.238l-1.12.75a1.624 1.624 0 0 1-2.306-.425"
    />
  </svg>
);
export default SvgAbstract1;
