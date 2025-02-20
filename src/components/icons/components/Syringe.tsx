import * as React from "react";
import type { SVGProps } from "react";
const SvgSyringe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.133 11.72a1.126 1.126 0 0 1-.802 1.923 1.13 1.13 0 0 1-.801-.334l-.78-.777-6.31 6.29a1.63 1.63 0 0 1-1.65.395L7.24 18.36l-4.302 4.307a1.13 1.13 0 0 1-1.603 0 1.13 1.13 0 0 1 0-1.601l4.313-4.296-.858-2.547a1.62 1.62 0 0 1 .395-1.646l6.312-6.302-.78-.778a1.127 1.127 0 0 1 .797-1.929c.298 0 .584.118.796.328zm2.62-4.735-5.646-5.716a.846.846 0 1 0-1.197 1.195l1.242 1.285L15.46 5.44l3.127 3.123 1.694-1.69 1.275 1.284a.85.85 0 0 0 .599.26.845.845 0 0 0 .599-1.443z"
    />
  </svg>
);
export default SvgSyringe;
