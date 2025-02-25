import * as React from "react";
import type { SVGProps } from "react";
const SvgCreditCart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.75 6.565v.495H1.25v-.495A3.515 3.515 0 0 1 4.765 3.05h14.47a3.515 3.515 0 0 1 3.515 3.515m0 3.225v7.666a3.505 3.505 0 0 1-3.515 3.493H4.765a3.504 3.504 0 0 1-3.515-3.504V9.779zm-8.503 8.042a.817.817 0 0 0-.806-.806h-1.602a.806.806 0 1 0 0 1.612h1.601a.817.817 0 0 0 .807-.817zm6.45 0a.817.817 0 0 0-.806-.806h-3.806a.806.806 0 1 0 0 1.612h3.816a.817.817 0 0 0 .806-.817z"
    />
  </svg>
);
export default SvgCreditCart;
