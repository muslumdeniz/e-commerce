import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m21.618 10.857-1.73 1.807V7.157A4.79 4.79 0 0 0 15.186 2.3H5.68a4.78 4.78 0 0 0-4.68 4.835v9.813a4.78 4.78 0 0 0 4.68 4.802h9.505a4.68 4.68 0 0 0 4.405-3.073.837.837 0 0 0-.451-1.101.794.794 0 0 0-1.036.462 3.1 3.1 0 0 1-2.885 2.027H5.68a3.15 3.15 0 0 1-3.106-3.194V7.135A3.16 3.16 0 0 1 5.681 3.93h9.505a3.16 3.16 0 0 1 3.094 3.205v5.628l-1.86-1.906a.826.826 0 0 0-1.19 1.102l3.172 3.304a.8.8 0 0 0 .594.253.81.81 0 0 0 .595-.253l3.172-3.304a.837.837 0 0 0 0-1.168.826.826 0 0 0-1.146.066"
    />
  </svg>
);
export default SvgArrowCircleRight;
