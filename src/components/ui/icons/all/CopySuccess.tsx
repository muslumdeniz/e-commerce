import * as React from "react";
import type { SVGProps } from "react";
const SvgCopySuccess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 5.048v7.293a4.06 4.06 0 0 1-4.048 4.059h-.902v-4.741a5.72 5.72 0 0 0-5.709-5.709H7.6v-.902A4.06 4.06 0 0 1 11.659 1h7.293A4.05 4.05 0 0 1 23 5.048m-6.6 6.6v7.293A4.06 4.06 0 0 1 12.341 23H5.048A4.05 4.05 0 0 1 1 18.952v-7.293A4.06 4.06 0 0 1 5.048 7.6h7.293a4.06 4.06 0 0 1 4.059 4.059zm-3.476.847a.825.825 0 0 0-1.166 0L8.271 15.85l-1.364-1.397a.825.825 0 0 0-1.177 1.1l1.936 1.98a.836.836 0 0 0 1.166 0l4.07-3.927a.825.825 0 0 0 .022-1.1z"
    />
  </svg>
);
export default SvgCopySuccess;
