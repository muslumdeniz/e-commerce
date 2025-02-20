import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M3 12c0-.635.466-1.15 1.04-1.15h15.92c.574 0 1.04.515 1.04 1.15s-.466 1.15-1.04 1.15H4.04C3.466 13.15 3 12.635 3 12"
      clipRule="evenodd"
    />
    <path
      fill={props.color}
      fillRule="evenodd"
      d="M12 21c-.635 0-1.15-.466-1.15-1.04V4.04c0-.574.515-1.04 1.15-1.04s1.15.466 1.15 1.04v15.92c0 .574-.515 1.04-1.15 1.04"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlus;
