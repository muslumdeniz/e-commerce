import * as React from "react";
import type { SVGProps } from "react";
const SvgBank = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.031 8.905H19.63v9.146a.89.89 0 0 1-.55.835.9.9 0 0 1-.346.068h-1.577a.9.9 0 0 1-.832-.558.9.9 0 0 1-.065-.345V8.905h-2.401v9.146a.89.89 0 0 1-.551.835.9.9 0 0 1-.346.068h-1.567a.9.9 0 0 1-.831-.558.9.9 0 0 1-.065-.345V8.905H7.973v9.146a.89.89 0 0 1-.559.838.9.9 0 0 1-.348.065H5.499a.9.9 0 0 1-.831-.558.9.9 0 0 1-.066-.345V8.905H3.324c-1.401 0-1.989-1.479-.865-2.177l7.977-4.886a3.33 3.33 0 0 1 3.483 0l7.978 4.886c1.123.698.587 2.177-.866 2.177m1.453 12.975a.77.77 0 0 0-.773-.77H2.273a.775.775 0 0 0-.773.77.77.77 0 0 0 .773.77h19.428a.785.785 0 0 0 .783-.77"
    />
  </svg>
);
export default SvgBank;
