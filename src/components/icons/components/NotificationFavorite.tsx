import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.525 7.7a3.225 3.225 0 1 0 0-6.45 3.225 3.225 0 0 0 0 6.45"
    />
    <path
      fill={props.color}
      d="M19.525 9.313a4.85 4.85 0 0 1-4.837-4.838c.01-.749.194-1.484.537-2.15h-8.6A5.375 5.375 0 0 0 1.25 7.7v9.675a5.375 5.375 0 0 0 5.375 5.375H16.3a5.375 5.375 0 0 0 5.375-5.375v-8.6a4.85 4.85 0 0 1-2.15.537M9.388 18.386a1.82 1.82 0 0 1-1.935 0 4.35 4.35 0 0 1-2.3-3.612 2.04 2.04 0 0 1 1.472-2.01 1.97 1.97 0 0 1 1.795.376 1.99 1.99 0 0 1 1.946-.334 1.96 1.96 0 0 1 1.28 1.925 4.23 4.23 0 0 1-2.258 3.655"
    />
  </svg>
);
export default SvgNotificationFavorite;
