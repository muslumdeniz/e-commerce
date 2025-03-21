import * as React from "react";
import type { SVGProps } from "react";
const SvgCube2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.91 8.4a4.6 4.6 0 0 0-.29-1.1h.06l-.37-.65a1 1 0 0 1-.07-.1L20.92 6a4.5 4.5 0 0 0-.73-.72l-.08-.07q-.255-.195-.53-.36l-5.12-3a4.86 4.86 0 0 0-4.84 0l-5.12 3-.53.35-.12.11a5 5 0 0 0-1.16 1.31l-.37.65h.06A4.8 4.8 0 0 0 2.05 9v6a4.83 4.83 0 0 0 2.41 4.18l5.12 3a5 5 0 0 0 1.81.61v.05h1.47l.45-.1.2-.07c.12 0 .24-.07.36-.12q.283-.12.55-.27l5.12-3A4.83 4.83 0 0 0 22 15V9a4.4 4.4 0 0 0-.09-.6M10.33 3.19a3.37 3.37 0 0 1 3.34 0l5.12 3 .39.26.12.11.22.2L15 9.41l-3 1.72-7.55-4.37a2.4 2.4 0 0 1 .23-.22l.11-.1.39-.26zm0 17.6-5.12-3A3.31 3.31 0 0 1 3.55 15V9a3.2 3.2 0 0 1 .15-1l7.56 4.37.11 8.72a3.3 3.3 0 0 1-1.04-.3M20.45 15a3.31 3.31 0 0 1-1.66 2.88l-5.12 3q-.377.224-.8.33l-.11-8.7 7.54-4.45q.06.181.09.37a.3.3 0 0 0 0 .1q.015.234 0 .47z"
    />
  </svg>
);
export default SvgCube2;
