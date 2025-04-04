import * as React from "react";
import type { SVGProps } from "react";
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.75 3.15V2a.75.75 0 1 0-1.5 0v1.15a7.8 7.8 0 0 0-7 7.75v8a3.85 3.85 0 0 0 3.85 3.84H16a3.85 3.85 0 0 0 3.85-3.84v-8a7.8 7.8 0 0 0-7.1-7.75m-1.46 3.47a.74.74 0 0 0 1.42 0 .8.8 0 0 1 0 .26.76.76 0 0 1-1.52 0 .8.8 0 0 1 .1-.26m7 12.26A2.35 2.35 0 0 1 16 21.22H8.05a2.35 2.35 0 0 1-2.35-2.34v-8a6.3 6.3 0 0 1 5.55-6.24v.1a2.26 2.26 0 1 0 1.5 0v-.1a6.3 6.3 0 0 1 5.55 6.26zm-3.62-2.26a2.08 2.08 0 0 1-1.54 2.09v.65a.44.44 0 0 1-.44.44h-.6a.44.44 0 0 1-.44-.44v-.63a3.5 3.5 0 0 1-1.56-.8.43.43 0 0 1-.06-.57l.38-.57a.45.45 0 0 1 .3-.18.5.5 0 0 1 .35.1 1.9 1.9 0 0 0 1.26.55c.6 0 .67-.31.67-.58 0-.49-.38-.7-1.06-1s-1.73-.88-1.73-2.17a2 2 0 0 1 1.45-2v-.71a.44.44 0 0 1 .44-.44h.6a.44.44 0 0 1 .44.44v.64c.497.14.944.417 1.29.8a.43.43 0 0 1 0 .59l-.44.49a.46.46 0 0 1-.3.15.5.5 0 0 1-.33-.13 1.18 1.18 0 0 0-.91-.44.5.5 0 0 0-.57.52c0 .35.29.53.95.85a2.55 2.55 0 0 1 1.86 2.35z"
    />
  </svg>
);
export default SvgTag;
