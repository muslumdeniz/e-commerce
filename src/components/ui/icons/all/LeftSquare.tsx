import * as React from "react";
import type { SVGProps } from "react";
const SvgLeftSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.192 1.25H7.808A6.57 6.57 0 0 0 1.25 7.808v8.385a6.57 6.57 0 0 0 6.558 6.557h8.385a6.57 6.57 0 0 0 6.557-6.558V7.808a6.57 6.57 0 0 0-6.558-6.558m-2.45 13.631a1 1 0 0 1 0 1.408 1 1 0 0 1-.7.28c-.27-.01-.527-.121-.72-.312l-3.547-3.644a.98.98 0 0 1-.269-.71.95.95 0 0 1 .301-.699L12.484 7.7a1 1 0 0 1 1.376 1.44L10.925 12z"
    />
  </svg>
);
export default SvgLeftSquare;
