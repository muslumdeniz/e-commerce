import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertica = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.747 19.955H5.245A3.225 3.225 0 0 1 2.02 16.73V7.238a3.225 3.225 0 0 1 3.225-3.225h13.502a3.225 3.225 0 0 1 3.225 3.225v9.524a3.225 3.225 0 0 1-3.225 3.193m1.3-17.899a.817.817 0 0 0-.806-.806H4.751a.806.806 0 1 0 0 1.612h14.49a.817.817 0 0 0 .807-.806m0 19.888a.817.817 0 0 0-.806-.806H4.751a.806.806 0 1 0 0 1.612h14.49a.817.817 0 0 0 .807-.806"
    />
  </svg>
);
export default SvgSliderVertica;
