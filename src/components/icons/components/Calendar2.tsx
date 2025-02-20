import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.716 7.137a.9.9 0 0 1-.845 1.218H3.306a1.098 1.098 0 0 1-1-1.493 5.96 5.96 0 0 1 3.657-3.381V1.757a.746.746 0 0 1 .746-.713.76.76 0 0 1 .758.757V3.24h3.94V1.757a.758.758 0 0 1 1.516 0v1.406h3.535V1.757a.746.746 0 0 1 .746-.713.76.76 0 0 1 .758.757v1.68a5.95 5.95 0 0 1 3.754 3.656m-.516 2.69H2.8a.9.9 0 0 0-.9.9v6.235A5.95 5.95 0 0 0 7.85 23h8.3a5.95 5.95 0 0 0 5.95-5.95v-6.28a.9.9 0 0 0-.9-.944M8.4 18.454a.934.934 0 1 1 .022-1.867.934.934 0 0 1-.022 1.867m0-3.513a.933.933 0 1 1 .01 0zm3.524 0a.933.933 0 1 1 .01 0z"
    />
  </svg>
);
export default SvgCalendar2;
