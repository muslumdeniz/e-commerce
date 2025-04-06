import { Breadcrumb } from "@/components/ui/breadcrumb";
import { IBreadcrumb } from "@/core/_breadcrumb";

type Props = {
  title: string;
  breadcrumb: IBreadcrumb[];
};

const SubPageHero = ({ title, breadcrumb }: Props) => {
  return (
    <section className="section-md">
      <div className="container">
        <div className="flex justify-between items-center my-6">
          <h3 className="font-bold text-text-primary text-2xl">{title}</h3>
          <Breadcrumb list={breadcrumb} />
        </div>
      </div>
    </section>
  );
};

export { SubPageHero };
