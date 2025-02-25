import * as React from "react";
import type { SVGProps } from "react";
const SvgSomeFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.986 12.55H14.75a3.036 3.036 0 0 1-2.948-3.135V4.96zm0 1.375H14.75a4.4 4.4 0 0 1-4.301-4.532v-4.4h-4.4A5.093 5.093 0 0 0 1 10.097v7.7A5.104 5.104 0 0 0 6.05 23h7.964a5.104 5.104 0 0 0 5.049-5.159v-3.916zM17.622 1H10.46A5.26 5.26 0 0 0 5.83 3.651q.398-.065.803-.066h7.7a5.74 5.74 0 0 1 5.72 5.764v7.931a6.8 6.8 0 0 1-.176 1.408A5.42 5.42 0 0 0 23 13.804v-7.38A5.37 5.37 0 0 0 17.677 1z"
    />
  </svg>
);
export default SvgSomeFiles;
