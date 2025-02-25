import * as React from "react";
import type { SVGProps } from "react";
const SvgChartLineUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.224 21.47a.78.78 0 0 1-.78.78H7.863a6.083 6.083 0 0 1-6.073-6.073V2.529a.78.78 0 0 1 .78-.779.78.78 0 0 1 .77.78v13.628a4.524 4.524 0 0 0 4.523 4.514h13.581a.78.78 0 0 1 .78.799M6.77 16.549a.8.8 0 0 0 .599-.276l3.687-4.362a1.234 1.234 0 0 1 1.749-.143l1.055.894a2.794 2.794 0 0 0 3.868-.257l4.267-4.695a.78.78 0 0 0-1.15-1.045l-4.267 4.695a1.245 1.245 0 0 1-1.72.114l-1.055-.894a2.794 2.794 0 0 0-3.925.323L6.18 15.265a.78.78 0 0 0 .123 1.093.8.8 0 0 0 .466.19"
    />
  </svg>
);
export default SvgChartLineUp;
