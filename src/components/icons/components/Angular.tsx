import * as React from "react";
import type { SVGProps } from "react";
const SvgAngular = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="m12.019 7.686 2.204 4.606H9.925zm9.531-.43-.826 9.421a3.75 3.75 0 0 1-1.84 2.887l-4.992 2.931a3.77 3.77 0 0 1-3.768 0l-5.003-2.93a3.76 3.76 0 0 1-1.807-2.888l-.848-9.42a3.71 3.71 0 0 1 2.38-3.813l5.829-2.204c.86-.32 1.806-.32 2.666 0l5.829 2.204a3.75 3.75 0 0 1 2.38 3.812m-3.647 8.97L12.757 5.372a.76.76 0 0 0-.76-.474.8.8 0 0 0-.738.485l-3.383 7.416-1.565 3.438a.826.826 0 0 0 .419 1.101.74.74 0 0 0 .341.078.83.83 0 0 0 .75-.485l1.355-2.975h5.818l1.421 2.986a.827.827 0 1 0 1.488-.706z"
    />
  </svg>
);
export default SvgAngular;
