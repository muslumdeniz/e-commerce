import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.42 8.42H13v7.16H9.42a3.58 3.58 0 0 1 0-7.16m7.16 0a3.58 3.58 0 1 0 0 7.16 3.58 3.58 0 0 0 0-7.16M5.83 19.17a3.58 3.58 0 1 0 7.16 0v-3.59H9.42a3.58 3.58 0 0 0-3.58 3.59zm.623-12.34c.255.383.584.712.968.967.387.261.822.444 1.28.537q.355.078.72.076h7.159a3.58 3.58 0 0 0 0-7.16H9.42a3.2 3.2 0 0 0-.72.075A3.58 3.58 0 0 0 6.453 6.83"
    />
  </svg>
);
export default SvgFigma;
