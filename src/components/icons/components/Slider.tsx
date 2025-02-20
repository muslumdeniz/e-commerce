import * as React from "react";
import type { SVGProps } from "react";
const SvgSlider = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M2.288 20.4a.79.79 0 0 1-.788-.756V4.356a.788.788 0 0 1 1.575 0v15.288a.787.787 0 0 1-.788.756m20.212-.756V4.356a.787.787 0 0 0-1.575 0v15.288a.787.787 0 1 0 1.575 0M4.482 16.662v1.27A4.567 4.567 0 0 0 9.05 22.5h5.9a4.567 4.567 0 0 0 4.568-4.567v-1.271zm15.036-1.575v-9.02A4.567 4.567 0 0 0 14.95 1.5h-5.9a4.567 4.567 0 0 0-4.568 4.568v9.019z"
    />
  </svg>
);
export default SvgSlider;
