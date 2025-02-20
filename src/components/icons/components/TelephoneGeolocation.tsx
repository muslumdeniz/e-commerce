import * as React from "react";
import type { SVGProps } from "react";
const SvgTelephoneGeolocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.123.5h-3.882v1.21c0 .322-.132.63-.367.857a1.28 1.28 0 0 1-.887.354c-.333 0-.652-.127-.887-.354a1.2 1.2 0 0 1-.368-.856V.5H6.85c-.915 0-1.792.35-2.44.975A3.27 3.27 0 0 0 3.4 3.829V20.17c0 .883.364 1.73 1.01 2.354.32.31.701.554 1.12.722.418.167.867.253 1.32.253h10.273c.915 0 1.793-.35 2.44-.975a3.27 3.27 0 0 0 1.01-2.354V3.83a3.27 3.27 0 0 0-1.01-2.354A3.52 3.52 0 0 0 17.123.5M15.75 14.627l-2.81 3.05c-.117.125-.26.225-.42.293a1.3 1.3 0 0 1-1.016 0 1.3 1.3 0 0 1-.42-.293l-2.86-3.05a4.77 4.77 0 0 1-1.2-2.482 4.7 4.7 0 0 1 .389-2.713 4.9 4.9 0 0 1 1.851-2.076 5.15 5.15 0 0 1 2.723-.774c.965 0 1.91.269 2.722.774a4.9 4.9 0 0 1 1.852 2.076c.397.85.532 1.791.388 2.713a4.77 4.77 0 0 1-1.199 2.482m-1.882-3.232c0 .359-.11.71-.317 1.008-.206.3-.5.532-.844.67a1.95 1.95 0 0 1-1.087.103c-.365-.07-.7-.243-.964-.497a1.8 1.8 0 0 1-.515-.93 1.76 1.76 0 0 1 .107-1.05c.143-.33.384-.614.693-.814a1.93 1.93 0 0 1 2.373.23c.352.34.551.8.554 1.28"
    />
  </svg>
);
export default SvgTelephoneGeolocation;
