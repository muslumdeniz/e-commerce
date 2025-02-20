import * as React from "react";
import type { SVGProps } from "react";
const SvgLts = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.75.75a11 11 0 1 0 0 22 11 11 0 0 0 0-22m5.247 15.059-.363 1.199a.95.95 0 0 1-.902.671H9.33a.945.945 0 0 1-.88-1.21l.957-3.388-1.925.385h-.165a.825.825 0 0 1-.165-1.639l2.761-.55 1.364-4.785a.946.946 0 0 1 .913-.693h1.452a.957.957 0 0 1 .924 1.199l-.979 3.542 1.936-.396a.836.836 0 0 1 .97.972.81.81 0 0 1-.651.645l-2.75.561-.484 1.628a.485.485 0 0 0 .462.605h3.08a.946.946 0 0 1 .847 1.254"
    />
  </svg>
);
export default SvgLts;
