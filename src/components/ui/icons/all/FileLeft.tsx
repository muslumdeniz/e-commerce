import * as React from "react";
import type { SVGProps } from "react";
const SvgFileLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M22.588 10.312H17.59a3.613 3.613 0 0 1-3.44-3.687.7.7 0 0 0 0-.15V1.25zM17.59 12h-.14a5.267 5.267 0 0 1-4.924-5.568V1.25H7.334a6.05 6.05 0 0 0-5.923 6.149v9.202a6.05 6.05 0 0 0 5.923 6.149h9.299a6.053 6.053 0 0 0 5.955-6.149V12zm-5.472 3.677H6.625l1.57 2.01a.816.816 0 0 1-.13 1.15.74.74 0 0 1-.494.183.8.8 0 0 1-.635-.312l-2.59-3.343-.065-.14-.054-.107a1 1 0 0 1 0-.248.7.7 0 0 1 .065-.3v-.087l.086-.14 2.612-3.106a.794.794 0 0 1 1.129-.097.83.83 0 0 1 .086 1.161l-1.484 1.73h5.375a.828.828 0 0 1 0 1.646z"
    />
  </svg>
);
export default SvgFileLeft;
