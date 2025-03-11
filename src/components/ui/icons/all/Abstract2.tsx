import * as React from "react";
import type { SVGProps } from "react";
const SvgAbstract2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 22.75A10.76 10.76 0 0 1 1.25 12V3A1.75 1.75 0 0 1 3 1.25h18A1.76 1.76 0 0 1 22.75 3v9A10.76 10.76 0 0 1 12 22.75m-9-20a.25.25 0 0 0-.25.25v9a9.25 9.25 0 1 0 18.5 0V3a.25.25 0 0 0-.25-.25zm9 16A6.76 6.76 0 0 1 5.25 12V6A.76.76 0 0 1 6 5.25h12a.76.76 0 0 1 .75.75v6A6.76 6.76 0 0 1 12 18.75m-5.25-12V12a5.25 5.25 0 0 0 10.5 0V6.75z"
    />
  </svg>
);
export default SvgAbstract2;
