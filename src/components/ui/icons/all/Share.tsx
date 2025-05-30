import * as React from "react";
import type { SVGProps } from "react";
const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.05 22a9.1 9.1 0 0 1-3.82-.83.77.77 0 0 1-.37-1 .76.76 0 0 1 1-.37 7.7 7.7 0 0 0 6.22.07.76.76 0 0 1 .61 1.39 9.1 9.1 0 0 1-3.64.74m8.41-9.25a.75.75 0 0 0 .67-.83 9.16 9.16 0 0 0-3.6-6.36.76.76 0 0 0-.91 1.21 7.66 7.66 0 0 1 3 5.3.76.76 0 0 0 .75.68zm-16-.68a7.64 7.64 0 0 1 3.13-5.38.76.76 0 1 0-.89-1.22A9.15 9.15 0 0 0 3 11.91a.75.75 0 0 0 .67.83h.08a.76.76 0 0 0 .72-.67zm11.18-7.16a3.66 3.66 0 1 0-7.32-.02 3.66 3.66 0 0 0 7.32.02m-1.5 0a2.16 2.16 0 1 1-4.32 0 2.16 2.16 0 0 1 4.32 0m-5.49 12a3.66 3.66 0 1 0-1.068 2.535A3.66 3.66 0 0 0 8.65 16.86zm-1.5 0a2.16 2.16 0 1 1 0-.05zm15.51 0a3.66 3.66 0 1 0-1.072 2.538 3.66 3.66 0 0 0 1.072-2.588zm-1.5 0a2.16 2.16 0 1 1 0-.05z"
    />
  </svg>
);
export default SvgShare;
