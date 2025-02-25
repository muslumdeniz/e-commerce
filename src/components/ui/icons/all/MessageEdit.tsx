import * as React from "react";
import type { SVGProps } from "react";
const SvgMessageEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.061 1.5H6.939A5.44 5.44 0 0 0 1.5 6.939V21.45a1.05 1.05 0 0 0 1.05 1.05h14.49a5.44 5.44 0 0 0 5.46-5.439V6.939A5.44 5.44 0 0 0 17.061 1.5M12 16.851c-.235.317-.566.55-.945.662l-2.447.787a1.493 1.493 0 0 1-1.858-1.501v-2.646c.005-.396.13-.78.357-1.103l2.94-3.969A5.84 5.84 0 0 0 12 11.717a5.64 5.64 0 0 0 3.003 1.165zm4.861-6.573-.777 1.05a4.01 4.01 0 0 1-3.286-.787 4.2 4.2 0 0 1-1.638-3.014l.777-1.05a1.95 1.95 0 0 1 2.783-.399l1.753 1.354a2.1 2.1 0 0 1 .42 2.846z"
    />
  </svg>
);
export default SvgMessageEdit;
