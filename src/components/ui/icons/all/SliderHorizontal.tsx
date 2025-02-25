import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.955 5.245v13.502a3.225 3.225 0 0 1-3.225 3.225H7.238a3.225 3.225 0 0 1-3.225-3.225V5.245A3.225 3.225 0 0 1 7.238 2.02h9.524a3.225 3.225 0 0 1 3.193 3.225M2.863 19.22V4.75a.806.806 0 0 0-1.613 0v14.491a.806.806 0 1 0 1.612 0zm19.887 0V4.75a.806.806 0 1 0-1.613 0v14.491a.806.806 0 1 0 1.613 0z"
    />
  </svg>
);
export default SvgSliderHorizontal;
