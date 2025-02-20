import * as React from "react";
import type { SVGProps } from "react";
const SvgTree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m6.108 8.128 4.954-6.88a1.126 1.126 0 0 1 1.87 0l4.954 6.88a1.126 1.126 0 0 1-.935 1.824H7.043a1.126 1.126 0 0 1-.935-1.824M19.8 16.404l-4.65-6.452H8.844l-4.65 6.452a1.52 1.52 0 0 0 1.238 2.376h5.72v3.625a.845.845 0 0 0 1.69 0V18.78h5.72a1.52 1.52 0 0 0 1.238-2.376"
    />
  </svg>
);
export default SvgTree;
