import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 10.347h-5.073a3.61 3.61 0 0 1-3.554-3.651 1 1 0 0 1 0-.149V1.454zm-5.073 1.655h-.148a5.23 5.23 0 0 1-4.988-5.476V1.39H7.235A6.04 6.04 0 0 0 1.25 7.47v9.063a6.04 6.04 0 0 0 6.007 6.08h9.455a6.04 6.04 0 0 0 6.038-6.037v-4.574zm-5.56 4.542-3.025 2.579s-.085 0-.127.074H8.87a.7.7 0 0 1-.287.064.64.64 0 0 1-.287-.064h-.095a.4.4 0 0 1-.117-.064l-3.247-2.568a.806.806 0 0 1-.127-1.125.796.796 0 0 1 1.06-.127l1.985 1.56V11.46a.796.796 0 1 1 1.592 0v5.306l1.698-1.454a.804.804 0 1 1 1.061 1.21z"
    />
  </svg>
);
export default SvgFileDown;
