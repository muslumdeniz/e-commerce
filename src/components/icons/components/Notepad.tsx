import * as React from "react";
import type { SVGProps } from "react";
const SvgNotepad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M18.173 10.23a.887.887 0 0 0-.888-.899H6.748a.9.9 0 0 0 0 1.799h10.537a.89.89 0 0 0 .888-.9m-3.712 5.626a.89.89 0 0 0-.876-.899h-6.78a.9.9 0 0 0 0 1.799h6.78a.89.89 0 0 0 .876-.9m8.07-7.228v8.52a6.28 6.28 0 0 1-6.237 6.352h-8.6a6.295 6.295 0 0 1-6.284-6.295V8.628A6.283 6.283 0 0 1 6.92 2.39v1.083a.865.865 0 0 0 1.73 0V2.322h6.687v1.152a.864.864 0 1 0 1.73 0V2.391a6.27 6.27 0 0 1 5.51 6.237zM7.693 2.333a6 6 0 0 0-.772 0v-.968a.865.865 0 0 1 1.73 0v.968zm8.6 0h-.956v-.968a.864.864 0 1 1 1.73 0V2.39a6 6 0 0 0-.773-.058"
    />
  </svg>
);
export default SvgNotepad;
