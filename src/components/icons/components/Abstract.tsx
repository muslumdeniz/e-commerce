import * as React from "react";
import type { SVGProps } from "react";
const SvgAbstract = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m10.167 22.172-7.6-7.6a2.16 2.16 0 0 1-.468-2.367l.456-1.112A2.22 2.22 0 0 1 4.566 9.75h10.957l-4.834-4.79a1.945 1.945 0 0 1 0-2.744l.4-.389a1.92 1.92 0 0 1 2.745 0l7.6 7.578a2.16 2.16 0 0 1 .467 2.367l-.456 1.111a2.22 2.22 0 0 1-2.011 1.334H8.478l4.833 4.833a1.956 1.956 0 0 1 0 2.756l-.4.39a1.944 1.944 0 0 1-2.744-.023"
    />
  </svg>
);
export default SvgAbstract;
