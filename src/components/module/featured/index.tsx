import { FeaturedCard } from "@/components/ui/cards/featured-card";

type Props = {};

const Featured = ({}: Props) => {
  return (
    <section className="section-md">
      <div className="row">
        <div className="col-span-6">
          <FeaturedCard
            src="/media/cards/featured-card-1.png"
            alt="Featured 1"
          />
        </div>
      </div>
    </section>
  );
};

export { Featured };
