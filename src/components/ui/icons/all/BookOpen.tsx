import * as React from "react";
import type { SVGProps } from "react";
const SvgBookOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M11.194 4.79h-.076a21.8 21.8 0 0 0-7.643-2.72A1.935 1.935 0 0 0 1.25 3.983v13.341a1.914 1.914 0 0 0 1.602 1.892 29.9 29.9 0 0 1 8.266 2.774h.076zM4.98 7.25h2.44a.806.806 0 1 1 0 1.613H4.98a.806.806 0 0 1 0-1.613m3.225 4.838H4.98a.805.805 0 0 1-.57-1.376.8.8 0 0 1 .57-.237h3.225a.806.806 0 0 1 0 1.613m14.545-8.18v13.458a1.9 1.9 0 0 1-1.559 1.892 28 28 0 0 0-8.31 2.73h-.075V4.79h.075a23 23 0 0 1 7.6-2.762 1.946 1.946 0 0 1 2.269 1.881"
    />
  </svg>
);
export default SvgBookOpen;
