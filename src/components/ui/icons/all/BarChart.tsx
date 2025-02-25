import * as React from "react";
import type { SVGProps } from "react";
const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.154 20.169h-2.516V9.675a1.895 1.895 0 0 0-1.895-1.884h-2.426a1.884 1.884 0 0 0-1.884 1.884V20.17h-3.385V4.034A1.895 1.895 0 0 0 8.153 2.15H5.727a1.884 1.884 0 0 0-1.884 1.884V20.17H1.846a.846.846 0 1 0 0 1.692h20.308a.847.847 0 0 0 0-1.692"
    />
  </svg>
);
export default SvgBarChart;
