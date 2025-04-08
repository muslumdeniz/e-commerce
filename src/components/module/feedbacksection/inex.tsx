import { CommandCard } from "@/components/ui/cards/command-card";
import { Image } from "@/components/ui/image";

type Props = {};

const FeedBackSection = ({}: Props) => {
  return (
    <section className="section-lg bg-primary-700 relative">
      <div className="container">
        <div className="row">
          <div className="col-span-4 flex flex-col gap-12">
            <h2 className="font-bold text-4.5xl text-light-bg">
              What they say about us
            </h2>
            <p className="font-normal text-sm text-light-bg">
              The gradual accumulation of information about atomic and
              small-scale behavior during the first quarter of the 20th
            </p>
            <CommandCard />
          </div>
        </div>
      </div>
      <Image
        src="/media/feedback/feedback-card-2.jpg"
        alt="Feedback 2"
        objectFit="cover"
        className="!absolute h-full top-0 right-0"
      />
    </section>
  );
};

export { FeedBackSection };
