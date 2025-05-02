import { ProfileLayout } from "@/components/module/profile-layout";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { IBreadcrumb } from "@/core/_breadcrumb";

type Props = {
  title: string;
  breadcrumb: IBreadcrumb[];
};

const SavedPage = ({ breadcrumb, title }: Props) => {
  return (
    <section className="section-md">
      <div className="container">
        <div className="flex justify-between items-center my-6">
          {<h3 className="font-bold text-text-primary text-2xl">{title}</h3>}
          <Breadcrumb list={breadcrumb} />
        </div>
        <div className="row">
          <div className="col-span-2">
            <ProfileLayout />
          </div>
          <div className="col-span-8">
            <div className="p-10">
              <div className="flex  justify-center w-full gap-5">
                <h2 className="font-medium text-lg text-text-secondary">
                  My Orders
                </h2>
                <h2 className="font-medium text-lg text-text-primary">
                  My Returns
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { SavedPage };
