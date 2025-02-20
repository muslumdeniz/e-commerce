import * as React from "react";
import type { SVGProps } from "react";
const SvgTextNumber = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color}
      d="M21.459 5.86H8.846a.832.832 0 0 1 0-1.664h12.613a.832.832 0 0 1 0 1.664m-4.892 4.715a.83.83 0 0 0-.832-.832h-6.89a.832.832 0 0 0 0 1.664h6.89a.843.843 0 0 0 .832-.832m5.724 5.546a.83.83 0 0 0-.832-.832H8.846a.832.832 0 1 0 0 1.664h12.613a.843.843 0 0 0 .832-.832m-5.724 5.547a.83.83 0 0 0-.832-.832h-6.89a.832.832 0 1 0 0 1.664h6.89a.843.843 0 0 0 .832-.832M5.24 7.701V2.343a.832.832 0 0 0-1.497-.51L1.879 4.24a.833.833 0 0 0 1.309 1.032l.388-.488V7.7a.832.832 0 0 0 1.664 0m1.11 11.094a.83.83 0 0 0-.833-.832H4.408l1.587-2.674a.84.84 0 0 0 .122-.421 2.218 2.218 0 1 0-4.338 0 .832.832 0 1 0 1.664 0 .51.51 0 0 1 .793-.423c.086.06.15.146.183.245l-2.218 3.683a.8.8 0 0 0 0 .832.81.81 0 0 0 .72.422h2.541a.82.82 0 0 0 .832-.877z"
    />
  </svg>
);
export default SvgTextNumber;
