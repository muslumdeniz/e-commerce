import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22m4.598 11.869-1.936.693a1.74 1.74 0 0 0-1.045 1.1l-.693 2.024a1.782 1.782 0 0 1-3.388-.066L7.424 9.657A1.848 1.848 0 0 1 9.8 7.347l6.776 2.2a1.782 1.782 0 0 1 .022 3.322"
    />
  </svg>
);
export default SvgCursor;
