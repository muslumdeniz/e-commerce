import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 7.7v8.708a6.45 6.45 0 0 1-6.396 6.342H7.7a6.45 6.45 0 0 1-6.45-6.396V7.7a6.45 6.45 0 0 1 3.945-5.955.44.44 0 0 1 .624.408v10.47a2.59 2.59 0 0 0 2.612 2.602c.371 0 .738-.08 1.075-.236l2.483-1.075 2.483 1.075c.337.156.704.237 1.076.236a2.59 2.59 0 0 0 2.612-2.57V2.154a.44.44 0 0 1 .623-.409A6.45 6.45 0 0 1 22.75 7.7M8.431 13.58a1 1 0 0 0 .43-.097l2.709-1.203a1.08 1.08 0 0 1 .86 0l2.709 1.204c.134.063.281.096.43.096a.98.98 0 0 0 1-.957V1.703a.44.44 0 0 0-.441-.452H7.872a.44.44 0 0 0-.44.44v10.934a.98.98 0 0 0 .999.956"
    />
  </svg>
);
export default SvgBookmark;
