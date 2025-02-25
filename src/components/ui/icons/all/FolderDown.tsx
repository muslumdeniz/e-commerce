import * as React from "react";
import type { SVGProps } from "react";
const SvgFolderDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M17.042 5.668h-3.225a2.78 2.78 0 0 1-2.58-1.752l-.312-.903A2.785 2.785 0 0 0 8.323 1.25h-2.15A4.923 4.923 0 0 0 1.25 6.173v10.922a5.655 5.655 0 0 0 5.665 5.655h10.127a5.655 5.655 0 0 0 5.708-5.6v-5.817a5.665 5.665 0 0 0-5.655-5.665zm-2.021 9.46-2.537 2.15-.13.075h-.085a.7.7 0 0 1-.28.065h-.376a.6.6 0 0 1-.108-.065l-2.73-2.225a.774.774 0 0 1-.118-1.075.76.76 0 0 1 .59-.28c.175.001.345.058.485.162l1.483 1.193v-4.3a.775.775 0 0 1 1.537 0v4.3l1.269-1.075a.763.763 0 0 1 1.075.075.774.774 0 0 1-.075 1"
    />
  </svg>
);
export default SvgFolderDown;
