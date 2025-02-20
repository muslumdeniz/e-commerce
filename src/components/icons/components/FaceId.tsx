import * as React from "react";
import type { SVGProps } from "react";
const SvgFaceId = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.916 7.126a5.01 5.01 0 0 0-2.26 3.6.266.266 0 0 1-.522.061C5.5 8.67 5.06 4.988 9.417 4.65a6.14 6.14 0 0 1 5.258-.89 5.523 5.523 0 0 1 2.986 7.866.277.277 0 0 1-.511-.051c-.246-.9-1.023-2.302-3.56-2.128a5.49 5.49 0 0 1-4.674-2.321m9.45 4.827a1.02 1.02 0 0 1-.95.583 1.02 1.02 0 0 1-1.023-.777 2.15 2.15 0 0 0-2.363-1.565h-.787a6.14 6.14 0 0 1-4.45-2.046 4.22 4.22 0 0 0-1.309 2.67 1.023 1.023 0 0 1-1.022.94 1.02 1.02 0 0 1-1.023-.746v-.174c-.271.422-.387.924-.327 1.422.092.951.695 1.667 1.34 1.606a1 1 0 0 0 .224-.062v.604a3.56 3.56 0 0 0 1.218 2.74l2.485 2.046a2.65 2.65 0 0 0 3.314.082l2.321-1.728a3.52 3.52 0 0 0 1.34-2.833v-.91q.114.045.236.06c.644.062 1.237-.654 1.33-1.605a2.2 2.2 0 0 0-.134-1.023q-.171.368-.378.716zm4.593 8.95v-3.396a.788.788 0 0 0-1.575 0v3.395a.44.44 0 0 1-.44.44h-3.068a.788.788 0 0 0 0 1.575h3.068A2.045 2.045 0 0 0 23 20.902zM6.871 22.13a.8.8 0 0 0-.788-.788H3.015a.44.44 0 0 1-.44-.44v-3.395a.788.788 0 1 0-1.575 0v3.395a2.046 2.046 0 0 0 2.046 2.046h3.068a.79.79 0 0 0 .757-.818M23 6.48V3.086a2.046 2.046 0 0 0-2.046-2.046h-3.068a.788.788 0 1 0 0 1.575h3.068a.44.44 0 0 1 .44.44V6.48a.788.788 0 0 0 1.575 0zm-20.353 0V3.086a.44.44 0 0 1 .44-.44h3.068a.788.788 0 0 0 0-1.575H3.086a2.046 2.046 0 0 0-2.045 2.045v3.365a.787.787 0 1 0 1.575 0z"
    />
  </svg>
);
export default SvgFaceId;
