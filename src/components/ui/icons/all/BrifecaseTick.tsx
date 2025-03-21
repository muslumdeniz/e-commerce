import * as React from "react";
import type { SVGProps } from "react";
const SvgBrifecaseTick = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.93 14.7A.756.756 0 1 1 11 13.63l.43.42L13 12.57a.75.75 0 0 1 1.06 1.06l-2.16 2a.72.72 0 0 1-1 0zM21.57 6A4.9 4.9 0 0 0 18 4.43h-1.61v-.3a2.71 2.71 0 0 0-2.71-2.71h-3.39a2.71 2.71 0 0 0-2.71 2.71v.3H6.05a4.91 4.91 0 0 0-4.88 5.43l.19 1.75.7 6.59a4.9 4.9 0 0 0 4.88 4.38h10.23a4.89 4.89 0 0 0 4.89-4.45l.63-6.76.14-1.57A4.89 4.89 0 0 0 21.57 6M9.08 4.13a1.21 1.21 0 0 1 1.21-1.21h3.39a1.21 1.21 0 0 1 1.21 1.21v.3H9.08zM20.56 18a3.38 3.38 0 0 1-3.39 3.09H6.94a3.39 3.39 0 0 1-3.38-3L3 12.76a15.5 15.5 0 0 0 4.35 1.68 4.66 4.66 0 0 0 9.29 0 15.6 15.6 0 0 0 4.44-1.82zM8.8 14a3.19 3.19 0 1 1 6.38-.02A3.19 3.19 0 0 1 8.8 14m12.45-3.37a12.8 12.8 0 0 1-4.72 2.27 4.67 4.67 0 0 0-9.1 0 13 13 0 0 1-4.64-2.11L2.67 9.7a2.8 2.8 0 0 1 0-.71 3.4 3.4 0 0 1 3.38-3.06H18a3.43 3.43 0 0 1 3.39 3.73z"
    />
  </svg>
);
export default SvgBrifecaseTick;
