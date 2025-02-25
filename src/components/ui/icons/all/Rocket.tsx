import * as React from "react";
import type { SVGProps } from "react";
const SvgRocket = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m20.775 1.028-3.9.714a11.27 11.27 0 0 0-5.164 3 21.4 21.4 0 0 0-2.658 3.636C5.175 7.62 1 13.992 1 13.992l4.999.11-.132.285a1.46 1.46 0 0 0 .318 1.68l.583.561 1.098 1.099.539.516a1.48 1.48 0 0 0 1.713.242l.758-.418.418 4.933s6.207-4.526 5.174-8.35a24 24 0 0 0 2.868-2.274 10.55 10.55 0 0 0 2.9-5.493l.736-3.658a1.88 1.88 0 0 0-1.538-2.197 2 2 0 0 0-.659 0m-2.57 7.899a2.197 2.197 0 0 1-3.11.055 2.197 2.197 0 0 1-.066-3.087 2.197 2.197 0 0 1 3.175 3.032"
    />
  </svg>
);
export default SvgRocket;
