import * as React from "react";
import type { SVGProps } from "react";
const SvgParcel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m4.546 9.466 5.503 3.17a2.43 2.43 0 0 1 1.161 2.101v6.351a2.427 2.427 0 0 1-3.634 2.09l-5.457-3.17a2.44 2.44 0 0 1-1.161-2.101v-6.351a2.427 2.427 0 0 1 3.588-2.09m14.862 0-1.29.743v3.065a.87.87 0 0 1-.858.87.87.87 0 0 1-.871-.858v-2.079l-2.485 1.428a2.43 2.43 0 0 0-1.16 2.102v6.351a2.427 2.427 0 0 0 3.633 2.09l5.504-3.17a2.44 2.44 0 0 0 1.161-2.101v-6.351a2.427 2.427 0 0 0-3.634-2.09m-.72-5.469-5.55-3.17a2.39 2.39 0 0 0-2.415 0L7.855 2.522l10.252 6.003.593-.348a2.415 2.415 0 0 0-.012-4.18m-2.322 5.515L6.17 3.532l-.859.5a2.415 2.415 0 0 0 0 4.18l5.504 3.17a2.43 2.43 0 0 0 2.415 0l3.181-1.847z"
    />
  </svg>
);
export default SvgParcel;
