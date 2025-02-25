import * as React from "react";
import type { SVGProps } from "react";
const SvgKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M8.588 22.5h-5.25A1.837 1.837 0 0 1 1.5 20.663V3.338A1.837 1.837 0 0 1 3.338 1.5h5.25a1.84 1.84 0 0 1 1.837 1.838v17.325A1.84 1.84 0 0 1 8.587 22.5M22.5 13.313V3.338A1.837 1.837 0 0 0 20.663 1.5h-5.25a1.84 1.84 0 0 0-1.838 1.838v9.974a1.84 1.84 0 0 0 1.838 1.838h5.25a1.84 1.84 0 0 0 1.837-1.838"
    />
  </svg>
);
export default SvgKanban;
