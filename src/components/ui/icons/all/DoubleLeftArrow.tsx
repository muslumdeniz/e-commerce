import * as React from "react";
import type { SVGProps } from "react";
const SvgDoubleLeftArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m2.777 9.7 7.353-4.428a1.91 1.91 0 0 1 1.963.003c.299.18.547.437.72.748.172.31.264.663.265 1.022v9.91a2.1 2.1 0 0 1-.265 1.022c-.173.31-.421.569-.72.748a1.91 1.91 0 0 1-1.963.003l-7.353-4.427a2.6 2.6 0 0 1-.935-.972A2.74 2.74 0 0 1 1.5 12c0-.467.118-.925.342-1.329s.547-.74.935-.972m16.775-4.428-4.805 2.886v7.684l4.805 2.887a1.91 1.91 0 0 0 1.963-.004c.299-.18.547-.437.72-.748.172-.31.264-.663.265-1.022v-9.91a2.1 2.1 0 0 0-.265-1.022 2 2 0 0 0-.72-.748 1.91 1.91 0 0 0-1.963-.003"
    />
  </svg>
);
export default SvgDoubleLeftArrow;
