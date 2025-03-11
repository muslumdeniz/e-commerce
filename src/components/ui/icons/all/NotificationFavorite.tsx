import * as React from "react";
import type { SVGProps } from "react";
const SvgNotificationFavorite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19 3.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M19 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
    <path
      fill={props.color}
      d="M16 22.75H7A5.8 5.8 0 0 1 1.25 17V8A5.8 5.8 0 0 1 7 2.25h6a.75.75 0 1 1 0 1.5H7A4.3 4.3 0 0 0 2.75 8v9A4.3 4.3 0 0 0 7 21.25h9A4.3 4.3 0 0 0 20.25 17v-5.66a.75.75 0 1 1 1.5 0V17A5.8 5.8 0 0 1 16 22.75"
    />
    <path
      fill={props.color}
      d="M8.68 18.94a2.4 2.4 0 0 1-1.31-.38 4.69 4.69 0 0 1-2.49-4A2.62 2.62 0 0 1 6.76 12a2.57 2.57 0 0 1 1.87.18 2.57 2.57 0 0 1 3.75 2.38 4.66 4.66 0 0 1-2.42 4 2.5 2.5 0 0 1-1.28.38m-1.21-5.55a1.08 1.08 0 0 0-1.09 1.19 3.31 3.31 0 0 0 1.79 2.71 1 1 0 0 0 1 0 3.23 3.23 0 0 0 1.69-2.77 1.07 1.07 0 0 0-.69-1.07 1.06 1.06 0 0 0-1.08.18l-.48.4-.48-.4a1.08 1.08 0 0 0-.66-.24"
    />
  </svg>
);
export default SvgNotificationFavorite;
