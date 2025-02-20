import * as React from "react";
import type { SVGProps } from "react";
const SvgUpdateFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M14.2 6.302V1l2.926 3.135L23 10.328h-5.192A3.72 3.72 0 0 1 14.2 6.5a1.3 1.3 0 0 1 0-.198M23 16.719a6.226 6.226 0 0 1-6.16 6.28H7.16A6.226 6.226 0 0 1 1 16.72V7.28A6.226 6.226 0 0 1 7.16 1h5.401v5.302A5.423 5.423 0 0 0 17.665 12H23zm-14.41-2.31a.8.8 0 0 0 .484-1.034.79.79 0 0 0-1.012-.495l-.55.198a2.65 2.65 0 0 1 1.53-1.188 2.54 2.54 0 0 1 2.001.22.793.793 0 0 0 1.1-.32.814.814 0 0 0-.319-1.1 4.167 4.167 0 0 0-5.709 1.695.3.3 0 0 0 0 .143l-.253-.671a.803.803 0 1 0-1.485.583l.88 2.354a.76.76 0 0 0 .737.506.54.54 0 0 0 .264 0zm6.39 3.454-.78-2.508a.803.803 0 0 0-1.001-.517l-2.299.946a.837.837 0 0 0-.451 1.1.793.793 0 0 0 1.034.45l.484-.197a2.585 2.585 0 0 1-3.498.979.76.76 0 0 0-1.1.264.825.825 0 0 0 .297 1.1H7.6c.614.348 1.308.53 2.013.528a4.18 4.18 0 0 0 3.663-2.2l.165.495a.77.77 0 0 0 .759.56h.242a.814.814 0 0 0 .55-1.022z"
    />
  </svg>
);
export default SvgUpdateFile;
