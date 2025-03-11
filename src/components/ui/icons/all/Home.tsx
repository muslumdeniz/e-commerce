import * as React from "react";
import type { SVGProps } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.73 22.74h-3.4a3 3 0 0 1-3-3v-4.47A1.3 1.3 0 0 0 11.78 14a1.36 1.36 0 0 0-1.07 1.38v4.32a3 3 0 0 1-3 3H4.27a3 3 0 0 1-3-3v-8.37A5.13 5.13 0 0 1 3 7.43l5.76-5a5 5 0 0 1 6.48 0l5.75 5a5.15 5.15 0 0 1 1.78 3.89v8.38a3 3 0 0 1-3.04 3.04M12 12.49a2.79 2.79 0 0 1 2.79 2.78v4.43a1.54 1.54 0 0 0 1.54 1.54h3.4a1.54 1.54 0 0 0 1.55-1.54v-8.38A3.66 3.66 0 0 0 20 8.56l-5.75-5a3.48 3.48 0 0 0-4.52 0L4 8.57a3.61 3.61 0 0 0-1.27 2.76v8.37a1.54 1.54 0 0 0 1.55 1.54h3.4a1.54 1.54 0 0 0 1.53-1.54v-4.32a2.88 2.88 0 0 1 2.33-2.86q.228-.03.46-.03"
    />
  </svg>
);
export default SvgHome;
