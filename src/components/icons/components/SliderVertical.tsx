import * as React from "react";
import type { SVGProps } from "react";
const SvgSliderVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M4.475 6.55h15.158a3.225 3.225 0 0 1 3.117 3.225v6.45a3.225 3.225 0 0 1-3.171 3.225H4.475a3.225 3.225 0 0 1-3.225-3.225v-6.45A3.225 3.225 0 0 1 4.475 6.55m.355 14.824a2.376 2.376 0 0 0 2.375 2.376h9.59a2.376 2.376 0 0 0 2.375-2.376v-.322H4.83zM19.17 4.626a2.376 2.376 0 0 0-2.376-2.376H7.207A2.376 2.376 0 0 0 4.83 4.626v.322h14.34z"
    />
  </svg>
);
export default SvgSliderVertical;
