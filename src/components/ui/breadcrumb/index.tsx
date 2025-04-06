import Link from "next/link";
import Icons from "../icons";
import { IBreadcrumb } from "@/core/_breadcrumb";

type Props = {
  list?: IBreadcrumb[];
};

const Breadcrumb = ({ list }: Props) => {
  return (
    <div className="flex items-center gap-2 ml-auto">
      {list?.map((item, key) => (
        <div key={key} className="flex items-center">
          {item.href ? (
            <>
              <Link href={item.href} className="link text-text-primary">
                {item.label}
              </Link>
              <Icons name="Right" className="text-text-muted" size={24} />
            </>
          ) : (
            <span className="fake-link">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export { Breadcrumb };
