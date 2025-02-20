import * as React from "react";
import type { SVGProps } from "react";
const SvgText = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.61 4.961H14.1v14.986a2.73 2.73 0 0 1-.577 1.92 1.92 1.92 0 0 1-1.522.63 1.96 1.96 0 0 1-1.51-.63 2.77 2.77 0 0 1-.589-1.92V4.961H4.371a2.32 2.32 0 0 1-1.595-.472 1.62 1.62 0 0 1-.525-1.25 1.62 1.62 0 0 1 .546-1.269 2.37 2.37 0 0 1 1.574-.462h15.24a2.28 2.28 0 0 1 1.605.483 1.59 1.59 0 0 1 .536 1.249 1.58 1.58 0 0 1-.536 1.249c-.46.348-1.03.516-1.605.472"
    />
  </svg>
);
export default SvgText;
