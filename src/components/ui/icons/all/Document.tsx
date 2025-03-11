import * as React from "react";
import type { SVGProps } from "react";
const SvgDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M16 16.51a.71.71 0 0 1-.64.76H7.88a.77.77 0 0 1 0-1.52h7.47a.71.71 0 0 1 .65.76m-7.9-3.33h3.16a.76.76 0 0 0 .531-1.297.77.77 0 0 0-.531-.233H8.09a.76.76 0 0 0-.75.77.75.75 0 0 0 .75.76zm14.66-2.71a.7.7 0 0 0 0-.15.76.76 0 0 0-.19-.72l-8-8.13a.6.6 0 0 0-.22-.14h-.06a.8.8 0 0 0-.21 0H7.59a6.43 6.43 0 0 0-6.37 6.39v8.56a6.43 6.43 0 0 0 6.37 6.47h8.82a6.43 6.43 0 0 0 6.37-6.47zm-8-6.62 5.44 5.53h-2.92a2.56 2.56 0 0 1-2.53-2.57zm1.66 17.38H7.59a4.91 4.91 0 0 1-4.87-4.95V7.72a4.91 4.91 0 0 1 4.87-4.95h5.66v4a4.07 4.07 0 0 0 4 4.09h4v5.38a4.91 4.91 0 0 1-4.84 4.99z"
    />
  </svg>
);
export default SvgDocument;
