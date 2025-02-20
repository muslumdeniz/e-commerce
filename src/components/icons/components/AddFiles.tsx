import * as React from "react";
import type { SVGProps } from "react";
const SvgAddFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 9.473h-4.715a3.38 3.38 0 0 1-3.26-3.459.3.3 0 0 0 0-.1V1.12zm0 1.525h-4.715a4.884 4.884 0 0 1-4.735-4.984V1.1H8.675a5.63 5.63 0 0 0-5.562 5.702v6.808a5.413 5.413 0 0 1 7.028 3.22 5.73 5.73 0 0 1-.1 4.226h7.416A5.63 5.63 0 0 0 23 15.354zM5.057 14.786a4.057 4.057 0 1 0 0 8.114 4.057 4.057 0 0 0 0-8.114m1.485 4.825h-.807v.767a.727.727 0 0 1-.738.738.75.75 0 0 1-.747-.758v-.757h-.748a.768.768 0 0 1 0-1.525h.748v-.748a.748.748 0 1 1 1.485 0v.758h.757a.768.768 0 0 1 0 1.525z"
    />
  </svg>
);
export default SvgAddFiles;
