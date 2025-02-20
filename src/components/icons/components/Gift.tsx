import * as React from "react";
import type { SVGProps } from "react";
const SvgGift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.594 11.44v8.214a3.097 3.097 0 0 1-3.086 3.096H6.478a3.096 3.096 0 0 1-3.085-3.096V11.44h3.752v3.86a2.69 2.69 0 0 0 2.687 2.688 2.6 2.6 0 0 0 1.473-.452l.688-.452.688.452c.434.296.948.454 1.473.451a2.7 2.7 0 0 0 2.698-2.687v-3.838h3.57zm-.172-6.966h-2.15a.98.98 0 0 0 0-1.387l-1.57-1.548a.99.99 0 0 0-1.398 0L12.37 4.474h-.752L8.682 1.539a.99.99 0 0 0-1.398 0L5.747 3.087a.98.98 0 0 0-.01 1.387h-2.15A1.784 1.784 0 0 0 1.78 6.259v1.795a1.785 1.785 0 0 0 1.785 1.795h16.857a1.785 1.785 0 0 0 1.784-1.795V6.259a1.785 1.785 0 0 0-1.784-1.785M8.768 11.462v3.86a1.075 1.075 0 0 0 1.075 1.074c.21-.001.416-.065.591-.182l.817-.538a1.37 1.37 0 0 1 1.505 0l.817.538c.175.117.381.18.592.182a1.075 1.075 0 0 0 1.075-1.075v-3.86z"
    />
  </svg>
);
export default SvgGift;
