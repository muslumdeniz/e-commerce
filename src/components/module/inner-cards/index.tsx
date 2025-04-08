import { StyleCard } from "@/components/ui/cards/style-card";

type Props = {};

const InnerCard = ({}: Props) => {
  return (
    <section className="section-md">
      <div className="container">
        <div className="row">
          <div className="col-span-6">
            <StyleCard src="/media/cards/style-card-1.jpg" alt="Style 1" />
          </div>
          <div className="col-span-6">
            <StyleCard src="/media/cards/style-card-2.jpg" alt="Style 2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { InnerCard };
