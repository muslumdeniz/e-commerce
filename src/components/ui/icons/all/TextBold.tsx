import * as React from "react";
import type { SVGProps } from "react";
const SvgTextBold = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.85 10.925h-4.3V7.7h4.3a1.623 1.623 0 0 1 0 3.225m.677 1.612h-5v3.881h5a1.947 1.947 0 0 0 1.468-3.366 1.95 1.95 0 0 0-1.468-.514M22.75 7.7v8.708a6.45 6.45 0 0 1-6.396 6.342H7.7a6.45 6.45 0 0 1-6.45-6.396V7.7A6.45 6.45 0 0 1 7.7 1.25h8.708A6.45 6.45 0 0 1 22.75 7.7m-5.665 6.783a3.55 3.55 0 0 0-1.806-3.085 3.15 3.15 0 0 0 .795-2.15 3.225 3.225 0 0 0-3.225-3.225H7.7a.806.806 0 0 0-.806.806v10.353a.795.795 0 0 0 .806.806h5.805a3.56 3.56 0 0 0 3.58-3.558z"
    />
  </svg>
);
export default SvgTextBold;
