import { HighlightCard } from "@/components/ui/cards/highlight-card";

type Props = {};

const Highlights = ({}: Props) => {
  return (
    <section className="container section-lg">
      <div className="row">
        <div className="col-span-6 aspect-square">
          <HighlightCard
            img="/media/highlights/highlight-1.jpg"
            alt="Highlight 1"
            title="Top Product Of the Week"
            buttonLabel="EXPLORE ITEMS"
            className="h-full"
          />
        </div>
        <div className="col-span-6 flex flex-col gap-5">
          <HighlightCard
            img="/media/highlights/highlight-1.jpg"
            alt="Highlight 1"
            title="Top"
            buttonLabel="EXPLORE"
            className="flex-1"
          />
          <HighlightCard
            img="/media/highlights/highlight-1.jpg"
            alt="Highlight 1"
            title="Top"
            buttonLabel="EXPLORE"
            className="flex-1"
          />
        </div>
      </div>
    </section>
  );
};

export { Highlights };
