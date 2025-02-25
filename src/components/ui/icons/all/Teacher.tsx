import * as React from "react";
import type { SVGProps } from "react";
const SvgTeacher = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M19.823 14.68v3.394a3.62 3.62 0 0 1-2.276 3.372l-4.055 1.192c-.86.346-1.82.346-2.681 0l-4.3-1.234a3.63 3.63 0 0 1-2.308-3.383v-3.287l5.044 2.691a5 5 0 0 0 2.803.856c.999 0 2.966-.298 3.795-.856zm1.607-8.808-6.734-4.255c-.565-.355-2.212-.538-2.879-.527a3.44 3.44 0 0 0-1.868.59L2.511 6.033a3.415 3.415 0 0 0 0 5.67l7.598 4.394a3.4 3.4 0 0 0 1.915.587c.682 0 2.34-.205 2.906-.587l6.383-4.362v3.34a.797.797 0 1 0 1.595 0V9.532a3.415 3.415 0 0 0-1.478-3.66"
    />
  </svg>
);
export default SvgTeacher;
