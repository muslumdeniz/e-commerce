import * as React from "react";
import type { SVGProps } from "react";
const SvgThetaTheta = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.08 10a.814.814 0 0 1 .815-.804h1.35V7.782a.803.803 0 1 1 1.607 0v1.414h1.328a.803.803 0 0 1 0 1.607H9.895a.814.814 0 0 1-.814-.804m5.1 2.41H9.895a.803.803 0 1 0 0 1.607h1.35v2.206a.804.804 0 1 0 1.607 0v-2.206h1.328a.803.803 0 0 0 0-1.607m8.57-4.692v8.57a6.43 6.43 0 0 1-6.427 6.427H7.678a6.43 6.43 0 0 1-6.428-6.427v-8.57A6.43 6.43 0 0 1 7.678 1.29h8.72a6.427 6.427 0 0 1 6.352 6.428m-5.356-.097a2 2 0 0 0-1.227-1.89 2 2 0 0 0-.777-.156H8.685a2.003 2.003 0 0 0-2.003 2.003v8.849a2.004 2.004 0 0 0 2.003 2.003h6.707a2 2 0 0 0 2.003-2.003z"
    />
  </svg>
);
export default SvgThetaTheta;
