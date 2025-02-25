import * as React from "react";
import type { SVGProps } from "react";
const SvgEmojiHappy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16.694 1.5H7.307A5.807 5.807 0 0 0 1.5 7.307v9.387A5.806 5.806 0 0 0 7.307 22.5h9.387a5.807 5.807 0 0 0 5.806-5.806V7.307A5.807 5.807 0 0 0 16.694 1.5m-8.4 4.589a1.974 1.974 0 1 1-1.358.581c.368-.37.867-.579 1.389-.582zM12 19.434a5.124 5.124 0 0 1-5.113-5.124 1.344 1.344 0 0 1 1.343-1.344h7.571a1.344 1.344 0 0 1 1.344 1.344A5.124 5.124 0 0 1 12 19.434m3.601-9.397a1.974 1.974 0 1 1 .011 0z"
    />
  </svg>
);
export default SvgEmojiHappy;
