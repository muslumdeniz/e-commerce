import * as React from "react";
import type { SVGProps } from "react";
const SvgPointers = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.807 23.25H11.21a1.45 1.45 0 0 1-1.452-1.451V2.2A1.45 1.45 0 0 1 11.21.75h1.597a1.45 1.45 0 0 1 1.451 1.451V21.8a1.45 1.45 0 0 1-1.45 1.451M8.071 9.75h-4.32a1.4 1.4 0 0 0-1.125.619l-1.35 1.98a1.395 1.395 0 0 0 0 1.552l1.316 1.98a1.4 1.4 0 0 0 1.125.619h4.354zm14.625-4.151-1.271-1.98A1.4 1.4 0 0 0 20.3 3h-4.354v6.75h4.32a1.4 1.4 0 0 0 1.125-.619l1.316-1.98a1.395 1.395 0 0 0 .034-1.552z"
    />
  </svg>
);
export default SvgPointers;
