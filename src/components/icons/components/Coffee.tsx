import * as React from "react";
import type { SVGProps } from "react";
const SvgCoffee = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M9.347 4.866a.785.785 0 0 1-.775-.775V2.025a.775.775 0 1 1 1.55 0V4.09a.775.775 0 0 1-.775.775m-3.265-.775V2.025a.775.775 0 0 0-1.55 0V4.09a.775.775 0 0 0 1.55 0m8.09.093V2.118a.775.775 0 1 0-1.55 0v2.066a.775.775 0 1 0 1.55 0M17.27 9.35q-.15-.015-.3 0a4.22 4.22 0 0 0-3.833-2.635H5.576a4.226 4.226 0 0 0-4.226 4.247v.837h16.004v-.837a3.967 3.967 0 0 1 0 7.924v-.114a2 2 0 0 0 0-.258v-5.166H1.35v5.166a4.236 4.236 0 0 0 4.226 4.236h7.562a4.22 4.22 0 0 0 3.792-2.387q.128.044.258.073h.186a5.517 5.517 0 0 0 0-11.024z"
    />
  </svg>
);
export default SvgCoffee;
