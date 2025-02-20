import * as React from "react";
import type { SVGProps } from "react";
const SvgGlass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.598 17.998-2.306-5.387-1.077-2.488-1.563-3.664h.216a2.607 2.607 0 1 0 0-5.204h-9.8a2.607 2.607 0 0 0 0 5.204h.107l-1.584 3.664-3.232 7.95q-.171.406-.237.841v.248a3.5 3.5 0 0 0 0 .582.9.9 0 0 0 0 .237q.038.28.13.55c0 .085.086.16.118.236q.108.252.248.485c0 .076.129.151.194.227q.149.198.323.377c.086.075.194.129.28.204.086.076.237.194.377.27l.345.14q.21.098.43.161c.12 0 .26 0 .389.054q.231.016.463 0l6.56.065h6.505a3.373 3.373 0 0 0 3.114-4.752M8.92 6.416h5.986l1.832 4.31.678 1.616c-1.305-.105-3.614.14-4.792.711-.861.496-2.813.815-3.8.937a7.4 7.4 0 0 1-2.943-.226l1.25-3.017z"
    />
  </svg>
);
export default SvgGlass;
