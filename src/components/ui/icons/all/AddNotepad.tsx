import * as React from "react";
import type { SVGProps } from "react";
const SvgAddNotepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M7.797 2.543a6 6 0 0 0-.756 0v-.947a.846.846 0 0 1 1.692 0v.947zm9.169 0v-.947a.846.846 0 1 0-1.692 0v.947h.936q.38.002.756.057zm5.39 6.158v8.335a6.147 6.147 0 0 1-6.146 6.214H7.797a6.16 6.16 0 0 1-6.147-6.158v-8.39A6.147 6.147 0 0 1 7.041 2.6v1.06a.846.846 0 0 0 1.692 0V2.532h6.541V3.66a.846.846 0 1 0 1.692 0V2.6a6.135 6.135 0 0 1 5.39 6.101m-6.97 4.24a.8.8 0 0 0-.789-.811h-1.804v-1.794a.79.79 0 0 0-.823-.789.81.81 0 0 0-.779.835v1.725H9.443a.8.8 0 0 0 0 1.602h1.805v1.793a.8.8 0 0 0 .8.778.8.8 0 0 0 .779-.823V13.72h1.737a.8.8 0 0 0 .823-.778"
    />
  </svg>
);
export default SvgAddNotepad;
