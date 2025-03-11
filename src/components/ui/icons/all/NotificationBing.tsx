import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationBing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12 11.33a.75.75 0 0 1-.75-.75V7.45a.75.75 0 1 1 1.5 0v3.13a.75.75 0 0 1-.75.75"
    />
    <path
      fill={props.color}
      d="M18 18.73H6a2.88 2.88 0 0 1-2.87-2.87 2.92 2.92 0 0 1 .56-1.71l.67-.91a7.24 7.24 0 0 0 1.43-4.4A6.19 6.19 0 0 1 9.63 3a6.43 6.43 0 0 1 6.07.6 6.31 6.31 0 0 1 2.77 5.23V9a7.3 7.3 0 0 0 1.22 4.16l.67 1a2.83 2.83 0 0 1 .48 1.59A2.89 2.89 0 0 1 18 18.73M12.15 4a5.5 5.5 0 0 0-2 .38 4.65 4.65 0 0 0-2.83 4.38 8.83 8.83 0 0 1-1.72 5.37l-.67.92a1.32 1.32 0 0 0-.27.81A1.37 1.37 0 0 0 6 17.23h12a1.37 1.37 0 0 0 1.37-1.37 1.44 1.44 0 0 0-.23-.82l-.67-1A8.75 8.75 0 0 1 17 9v-.17A4.81 4.81 0 0 0 12.15 4"
    />
    <path
      fill={props.color}
      d="M12 21.48a2.71 2.71 0 0 1-2.67-2.31.4.4 0 0 1 0-.11v-1a.75.75 0 1 1 1.5 0V19a1.2 1.2 0 0 0 2.36 0v-.91a.75.75 0 1 1 1.5 0v1a.4.4 0 0 1 0 .11A2.68 2.68 0 0 1 12 21.48"
    />
  </svg>
);
export default SvgNotificationBing;
