import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendarAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M20.573 6.683a.882.882 0 0 1-.808 1.191H2.752a1.063 1.063 0 0 1-.99-1.446 5.77 5.77 0 0 1 3.552-3.286V1.484a.734.734 0 1 1 1.468 0v1.382h3.817V1.484a.734.734 0 0 1 1.013-.678.72.72 0 0 1 .444.678v1.35H15.5v-1.35a.734.734 0 1 1 1.467 0v1.658a5.76 5.76 0 0 1 3.605 3.541m-.5 2.648H2.252a.87.87 0 0 0-.872.872v6.05a5.774 5.774 0 0 0 5.774 5.764h6.178a5.74 5.74 0 0 1-.851-3.02 5.837 5.837 0 0 1 8.507-5.221v-3.573a.87.87 0 0 0-.915-.872M7.728 17.657a.904.904 0 1 1 .021-1.807.904.904 0 0 1-.021 1.807m0-3.413a.904.904 0 1 1 .914-.894.914.914 0 0 1-.914.894m3.413 0a.904.904 0 1 1 .925-.894.914.914 0 0 1-.967.894zm7.23.5a4.253 4.253 0 1 0 1.621.32 4.3 4.3 0 0 0-1.63-.32zm1.585 5.082h-.797v.798a.797.797 0 0 1-.787.808.8.8 0 0 1-.787-.808v-.82h-.797a.8.8 0 0 1-.787-.807.84.84 0 0 1 .797-.808h.787v-.798a.81.81 0 0 1 .776-.819.797.797 0 0 1 .787.808v.82h.798a.787.787 0 0 1 .786.807.805.805 0 0 1-.818.82z"
    />
  </svg>
);
export default SvgCalendarAdd;
