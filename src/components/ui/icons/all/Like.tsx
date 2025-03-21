import * as React from "react";
import type { SVGProps } from "react";
const SvgLike = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M3.69 21.17h2.1a2.34 2.34 0 0 0 1.91-1l1.91 1.53a4.1 4.1 0 0 0 2.39.76h5.07a3 3 0 0 0 2.87-2.12l2.6-8.48a2.53 2.53 0 0 0-2.4-3.27h-4.07a.44.44 0 0 1-.34-.16.46.46 0 0 1-.1-.37l.53-3a2.94 2.94 0 0 0-1.84-3.3 3.1 3.1 0 0 0-1.14-.22 3 3 0 0 0-2.47 1.35L7.92 7.12a2.34 2.34 0 0 0-2.13-1.39h-2.1a2.35 2.35 0 0 0-2.34 2.35v10.75a2.34 2.34 0 0 0 2.34 2.34M12 3.71a1.49 1.49 0 0 1 2.71 1.08l-.52 3a1.94 1.94 0 0 0 .42 1.59 2 2 0 0 0 1.48.7h4.07a1 1 0 0 1 1 1.33l-2.6 8.48A1.5 1.5 0 0 1 17.07 21H12a2.52 2.52 0 0 1-1.48-.46l-2.37-1.92v-9.1zM2.85 8.08a.84.84 0 0 1 .84-.85h2.1a.85.85 0 0 1 .84.85v10.75a.85.85 0 0 1-.84.84h-2.1a.84.84 0 0 1-.84-.84z"
    />
  </svg>
);
export default SvgLike;
