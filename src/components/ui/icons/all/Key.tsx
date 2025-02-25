import * as React from "react";
import type { SVGProps } from "react";
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.145 1.32a8.098 8.098 0 0 0-6.203 10.426l-5.337 5.338a1.41 1.41 0 0 0-.38 1.255l.52 2.718a1.41 1.41 0 0 0 1.083 1.082l2.771.596a1.39 1.39 0 0 0 1.256-.39l1.224-1.223a.53.53 0 0 0 0-.769l-1.917-1.84a.844.844 0 0 1 0-1.159.823.823 0 0 1 1.148 0l1.96 1.884a.54.54 0 0 0 .757 0l2.166-2.165a8.11 8.11 0 1 0 .963-15.676zm1.527 10.589a2.663 2.663 0 1 1-.022-5.327 2.663 2.663 0 0 1 .022 5.327"
    />
  </svg>
);
export default SvgKey;
