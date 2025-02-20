import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.29 2.7H8.815a4.765 4.765 0 0 0-4.688 4.841v5.49l-1.724-1.78a.823.823 0 0 0-1.163 1.164l3.172 3.294a.8.8 0 0 0 .593.252.8.8 0 0 0 .593-.252l3.162-3.294a.834.834 0 0 0 0-1.163.823.823 0 0 0-1.164 0L5.72 13.15v-5.61a3.15 3.15 0 0 1 3.096-3.194h9.473a3.15 3.15 0 0 1 3.085 3.194v9.782a3.14 3.14 0 0 1-3.085 3.183H8.816a3.085 3.085 0 0 1-2.888-2.02.79.79 0 0 0-1.304-.279.83.83 0 0 0-.178.916 4.67 4.67 0 0 0 4.391 3.063h9.474A4.765 4.765 0 0 0 23 17.323V7.54a4.775 4.775 0 0 0-4.71-4.841"
    />
  </svg>
);
export default SvgArrowCircleLeft;
