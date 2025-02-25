import * as React from "react";
import type { SVGProps } from "react";
const SvgBlackUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.212 8.865h3.94v12.28a.854.854 0 0 0 1.708 0V8.866h3.929a.535.535 0 0 0 .375-.922L12.381 2.16a.535.535 0 0 0-.762 0L6.836 7.943a.535.535 0 0 0 .376.922"
    />
  </svg>
);
export default SvgBlackUp;
