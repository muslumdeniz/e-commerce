import * as React from "react";
import type { SVGProps } from "react";
const SvgTrello = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.686 7.614a6.43 6.43 0 0 0-6.431-6.334H7.552A6.43 6.43 0 0 0 1.25 7.71v8.66a6.43 6.43 0 0 0 6.43 6.346h8.714a6.43 6.43 0 0 0 6.356-6.431zm-5.627 6.11H15a1.607 1.607 0 0 1-1.608-1.587V7.443a1.597 1.597 0 0 1 1.587-1.597h2.068a1.575 1.575 0 0 1 1.597 1.575v4.706a1.587 1.587 0 0 1-1.575 1.596zm-8.307 5.24H6.716a1.596 1.596 0 0 1-1.597-1.607V7.432a1.586 1.586 0 0 1 1.597-1.586h2.036a1.586 1.586 0 0 1 1.598 1.586v9.925a1.6 1.6 0 0 1-1.598 1.607"
    />
  </svg>
);
export default SvgTrello;
