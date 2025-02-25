import * as React from "react";
import type { SVGProps } from "react";
const SvgKeySquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M15.118 10.441a1.56 1.56 0 1 1-1.549-1.548 1.55 1.55 0 0 1 1.548 1.548m7.632-3.644v10.406a5.536 5.536 0 0 1-5.547 5.547H6.797a5.536 5.536 0 0 1-5.547-5.547V6.797A5.547 5.547 0 0 1 6.797 1.25h10.406a5.547 5.547 0 0 1 5.547 5.547m-4.45 3.644a4.74 4.74 0 0 0-9.471 0c.003.485.08.967.226 1.43l-3.118 3.117a.85.85 0 0 0-.226.742l.312 1.58a.83.83 0 0 0 .645.656l1.602.312a.8.8 0 0 0 .73-.226l.71-.677L8.56 16.3a.806.806 0 0 1 1.14-1.14l1.182 1.13 1.268-1.258a4.6 4.6 0 0 0 1.452.225 4.73 4.73 0 0 0 4.697-4.816"
    />
  </svg>
);
export default SvgKeySquare;
