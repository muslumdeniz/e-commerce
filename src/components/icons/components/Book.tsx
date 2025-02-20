import * as React from "react";
import type { SVGProps } from "react";
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2.37 19.02v-.645a3.15 3.15 0 0 1 3.15-3.15h16.125v3.795a3.74 3.74 0 0 1-3.763 3.73H6.132a3.74 3.74 0 0 1-3.762-3.73M21.645 4.98v8.6H5.52a4.74 4.74 0 0 0-3.15 1.247V4.98a3.74 3.74 0 0 1 3.762-3.73h11.75a3.74 3.74 0 0 1 3.763 3.73m-7.32 5.483a.817.817 0 0 0-.807-.806h-6.15a.806.806 0 0 0 0 1.612h6.15a.806.806 0 0 0 .806-.806m3.106-3.838a.806.806 0 0 0-.806-.806H7.369a.806.806 0 0 0 0 1.612h9.256a.806.806 0 0 0 .806-.806"
    />
  </svg>
);
export default SvgBook;
