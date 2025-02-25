import * as React from "react";
import type { SVGProps } from "react";
const SvgFilterEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M13.632 20.26a2 2 0 0 1-.646.76l-1.418 1.043a2.085 2.085 0 0 1-3.355-1.803v-5.472a4 4 0 0 0-1.157-2.814L3.137 7.993a2.3 2.3 0 0 1-.667-1.615V3.782A2.303 2.303 0 0 1 4.773 1.5h13.288a2.303 2.303 0 0 1 2.283 2.282v2.502a2.31 2.31 0 0 1-.771 1.73l-1.314 1.23a5.982 5.982 0 0 0-4.627 11.016m7.91-5.211a4.95 4.95 0 1 1-9.9 0 4.95 4.95 0 0 1 9.9 0m-2.73-1.772-.553-.542a.71.71 0 0 0-1.042 0l-2.803 2.866a.52.52 0 0 0-.146.281l-.167.886a.594.594 0 0 0 .698.688l.886-.187a.52.52 0 0 0 .282-.146l2.814-2.866a.69.69 0 0 0 .03-.98"
    />
  </svg>
);
export default SvgFilterEdit;
