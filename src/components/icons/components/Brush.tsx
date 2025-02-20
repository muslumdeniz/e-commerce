import * as React from "react";
import type { SVGProps } from "react";
const SvgBrush = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.24 1.774a1.706 1.706 0 0 0-2.146-.258 44.8 44.8 0 0 0-9.557 7.68 36.3 36.3 0 0 0-4.495 5.771c-2.595.226-3.915 2.607-4.74 6.05A1.362 1.362 0 0 0 2.974 22.7c3.443-.794 5.867-2.145 6.039-4.741a35 35 0 0 0 5.77-4.505 44.3 44.3 0 0 0 7.691-9.557 1.694 1.694 0 0 0-.236-2.124M9.27 15.879l-1.137-1.126a34 34 0 0 1 2.5-3.218l1.855 1.845a35 35 0 0 1-3.218 2.499"
    />
  </svg>
);
export default SvgBrush;
